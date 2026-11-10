import {
  drizzle as drizzleNodePg,
  type NodePgDatabase,
} from "drizzle-orm/node-postgres";
import { drizzle as drizzlePglite } from "drizzle-orm/pglite";
import { PGlite } from "@electric-sql/pglite";
import { Pool } from "pg";
import * as schema from "./schema";
import { SCHEMA_DDL_STATEMENTS } from "./init-tables";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __loksewaPool?: Pool;
  __loksewaPglite?: PGlite;
  __loksewaDb?: NodePgDatabase<typeof schema>;
  __loksewaSchemaInitPromise?: Promise<void>;
};

export async function ensureSchemaInitialized(): Promise<void> {
  if (globalForDb.__loksewaSchemaInitPromise) {
    return globalForDb.__loksewaSchemaInitPromise;
  }

  globalForDb.__loksewaSchemaInitPromise = (async () => {
    if (globalForDb.__loksewaPglite) {
      await globalForDb.__loksewaPglite.waitReady;
      for (const statement of SCHEMA_DDL_STATEMENTS) {
        try {
          await globalForDb.__loksewaPglite.exec(statement);
        } catch {
          // ignore if already exists
        }
      }
    } else if (globalForDb.__loksewaPool) {
      for (const statement of SCHEMA_DDL_STATEMENTS) {
        try {
          await globalForDb.__loksewaPool.query(statement);
        } catch {
          // ignore if already exists
        }
      }
    }
  })();

  try {
    await globalForDb.__loksewaSchemaInitPromise;
  } catch (err) {
    globalForDb.__loksewaSchemaInitPromise = undefined;
    throw err;
  }
}

function isValidPostgresUrl(url: string | undefined): boolean {
  if (!url) return false;
  if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) {
    return false;
  }
  if (url.includes("@base") || url.includes("@#")) {
    return false;
  }
  return true;
}

function getPgliteClient(): PGlite {
  if (globalForDb.__loksewaPglite) {
    return globalForDb.__loksewaPglite;
  }

  // In-memory PGlite: ultra-fast, zero filesystem lock conflicts, completely immune to WASM abort
  const client = new PGlite();
  globalForDb.__loksewaPglite = client;
  return client;
}

function initDb(): NodePgDatabase<typeof schema> {
  if (globalForDb.__loksewaDb) {
    return globalForDb.__loksewaDb;
  }

  if (isValidPostgresUrl(databaseUrl)) {
    try {
      const pool =
        globalForDb.__loksewaPool ??
        new Pool({
          connectionString: databaseUrl,
        });
      globalForDb.__loksewaPool = pool;
      const db = drizzleNodePg(pool, { schema });
      globalForDb.__loksewaDb = db;
      return db;
    } catch (err) {
      console.warn(
        "[Loksewa Pro] PostgreSQL connection failed, falling back to embedded PGlite:",
        err
      );
    }
  }

  const client = getPgliteClient();
  const db = drizzlePglite(client, { schema }) as unknown as NodePgDatabase<
    typeof schema
  >;
  globalForDb.__loksewaDb = db;
  return db;
}

export const db: NodePgDatabase<typeof schema> = initDb();
export const pool = globalForDb.__loksewaPool;
export * from "./schema";
