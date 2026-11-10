import { QuestionSeed } from "./questions-gk";

/**
 * Authentic Nepal Public Service Commission (Loksewa Aayog 2073–2083)
 * Certified Past Examination Questions & High-Frequency Topics
 * Extracted and categorized from "Past Questions 400+ Collection" (qna.pdf):
 *  1. नेपालको संविधान (Constitution of Nepal & Governance)
 *  2. खेलकुद (Sports & Tournaments)
 *  3. चलचित्र तथा सिनेमा (Cinema, Arts & Culture)
 *  4. नेपालको इतिहास (Ancient, Medieval & Modern History of Nepal)
 */
export const QNA_COMPILATION_SEEDS: QuestionSeed[] = [
  // =========================================================================
  // CATEGORY 1: नेपालको संविधान (CONSTITUTION OF NEPAL & GOVERNANCE)
  // =========================================================================
  {
    topicSlug: "gk-constitution-of-nepal",
    questionEn:
      "When was the present Constitution of Nepal ('Constitution of Nepal') formally promulgated by the Constituent Assembly?",
    questionNe:
      "नेपालको वर्तमान संविधान 'नेपालको संविधान' कहिले जारी (Promulgated) भएको हो?",
    optionAEn: "2072 Ashoj 1 BS",
    optionANe: "२०७२ असोज १",
    optionBEn: "2072 Ashoj 3 BS",
    optionBNe: "२०७२ असोज ३",
    optionCEn: "2072 Ashoj 5 BS",
    optionCNe: "२०७२ असोज ५",
    optionDEn: "2072 Ashoj 10 BS",
    optionDNe: "२०७२ असोज १०",
    correctOption: "B",
    explanationEn:
      "The present Constitution of Nepal was promulgated on 2072 Ashoj 3 BS (20 September 2015 AD) by the second Constituent Assembly. It is the 7th constitution in Nepal's constitutional history.",
    explanationNe:
      "नेपालको संविधान संविधान सभाबाट २०७२ साल असोज ३ गते (सन् २०१५ सेप्टेम्बर २०) जारी भएको हो। यो नेपालको संवैधानिक इतिहासको सातौं संविधान हो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Nayab Subba / Kharidar (2073-2083)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2073, Na.Su. 2076 & All 7 Provinces",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "gk-constitution-of-nepal",
    questionEn:
      "How many parts, articles, and schedules are there in the present Constitution of Nepal?",
    questionNe:
      "नेपालको वर्तमान संविधानमा कति भाग, धारा र अनुसूचीहरू रहेका छन्?",
    optionAEn: "35 Parts, 308 Articles, 9 Schedules",
    optionANe: "३५ भाग, ३०८ धारा, ९ अनुसूची",
    optionBEn: "30 Parts, 300 Articles, 9 Schedules",
    optionBNe: "३० भाग, ३०० धारा, ९ अनुसूची",
    optionCEn: "35 Parts, 315 Articles, 7 Schedules",
    optionCNe: "३५ भाग, ३१५ धारा, ७ अनुसूची",
    optionDEn: "32 Parts, 308 Articles, 9 Schedules",
    optionDNe: "३२ भाग, ३०८ धारा, ९ अनुसूची",
    correctOption: "A",
    explanationEn:
      "The Constitution of Nepal 2072 comprises 35 parts, 308 articles, and 9 schedules, outlining the federal democratic republican structure of Nepal.",
    explanationNe:
      "वर्तमान नेपालको संविधान २०७२ मा जम्मा ३५ भाग, ३०८ धारा र ९ अनुसूची रहेका छन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Bagmati Province PSC (2074-2083)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2074, Bagmati Province 2078",
    isImportant: true,
  },
  {
    topicSlug: "constitutional-bodies",
    questionEn:
      "Under which Part of the Constitution of Nepal are the provisions concerning the Public Service Commission (Loksewa Aayog) set forth?",
    questionNe:
      "नेपालको संविधान अनुसार लोक सेवा आयोग सम्बन्धी व्यवस्था कुन भागमा गरिएको छ?",
    optionAEn: "Part 21",
    optionANe: "भाग २१",
    optionBEn: "Part 22",
    optionBNe: "भाग २२",
    optionCEn: "Part 23",
    optionCNe: "भाग २३",
    optionDEn: "Part 24",
    optionDNe: "भाग २४",
    correctOption: "C",
    explanationEn:
      "Part 23 (Articles 242 and 243) of the Constitution of Nepal governs the composition, functions, duties, and powers of the Public Service Commission (PSC).",
    explanationNe:
      "संविधानको भाग २३ (धारा २४२ र २४३) मा लोक सेवा आयोगको गठन, काम, कर्तव्य र अधिकार सम्बन्धी संवैधानिक व्यवस्था गरिएको छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2075-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2075, Bagmati Province 2079",
    isImportant: true,
  },
  {
    topicSlug: "legislative-structure",
    questionEn:
      "In the House of Representatives (Pratinidhi Sabha), how many members are elected through the First-Past-The-Post (FPTP) system and the Proportional Representation (PR) system respectively?",
    questionNe:
      "प्रतिनिधि सभामा प्रत्यक्ष (पहिलो हुने निर्वाचित हुने) र समानुपातिक प्रणालीबाट कति-कति जना सांसद निर्वाचित हुन्छन्?",
    optionAEn: "FPTP 165, PR 110 (Total 275)",
    optionANe: "प्रत्यक्ष १६५, समानुपातिक ११० (जम्मा २७५)",
    optionBEn: "FPTP 110, PR 165 (Total 275)",
    optionBNe: "प्रत्यक्ष ११०, समानुपातिक १६५ (जम्मा २७५)",
    optionCEn: "FPTP 200, PR 75 (Total 275)",
    optionCNe: "प्रत्यक्ष २००, समानुपातिक ७५ (जम्मा २७५)",
    optionDEn: "FPTP 160, PR 115 (Total 275)",
    optionDNe: "प्रत्यक्ष १६०, समानुपातिक ११५ (जम्मा २७५)",
    correctOption: "A",
    explanationEn:
      "According to Article 84, the House of Representatives consists of 275 members: 165 members elected through first-past-the-post (FPTP) single-member constituencies and 110 members through closed-list proportional representation (PR).",
    explanationNe:
      "धारा ८४ अनुसार प्रतिनिधि सभामा जम्मा २७५ सदस्य रहनेछन्, जसमध्ये प्रत्यक्ष निर्वाचन प्रणालीबाट १६५ र समानुपातिक प्रणालीबाट ११० जना निर्वाचित हुन्छन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Lumbini Province (2076-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2076, Lumbini PPSC 2080",
    isImportant: true,
  },
  {
    topicSlug: "gk-constitution-of-nepal",
    questionEn:
      "On which date was the Second Amendment of the Constitution of Nepal authenticated to incorporate the updated political map into the national coat of arms (Schedule 3)?",
    questionNe:
      "नेपालको संविधान (दोस्रो संशोधन) कहिले प्रमाणीकरण भएको हो?",
    optionAEn: "2077 Jestha 31 BS",
    optionANe: "२०७७ जेठ ३१",
    optionBEn: "2077 Ashar 4 BS",
    optionBNe: "२०७७ असार ४",
    optionCEn: "2077 Jestha 25 BS",
    optionCNe: "२०७७ जेठ २५",
    optionDEn: "2077 Saun 1 BS",
    optionDNe: "२०७७ साउन १",
    correctOption: "B",
    explanationEn:
      "The Constitution of Nepal (Second Amendment) Bill, 2077, updating Schedule-3 (Coat of Arms) to incorporate the revised map including Limpiyadhura, Lipulekh, and Kalapani, was formally authenticated on 2077 Ashar 4 BS.",
    explanationNe:
      "नेपालको नयाँ राजनीतिक तथा प्रशासनिक नक्सालाई अनुसूची-३ को निशान छापमा समावेश गर्न दोस्रो संशोधन २०७७ असार ४ गते प्रमाणीकरण भएको हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Gandaki Province (2077-2078)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2077, Gandaki PPSC 2078",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "fundamental-rights",
    questionEn:
      "In which Part and across which Articles are the Fundamental Rights of citizens guaranteed under the Constitution of Nepal, and how many rights are there?",
    questionNe:
      "नेपालको संविधान अनुसार नागरिकका मौलिक हकहरू कुन भाग र कति वटा धारामा व्यवस्था गरिएका छन्?",
    optionAEn: "Part 3, Articles 16 to 46 (31 Rights)",
    optionANe: "भाग ३, धारा १६ देखि ४६ सम्म (३१ हक)",
    optionBEn: "Part 2, Articles 10 to 15 (6 Rights)",
    optionBNe: "भाग २, धारा १० देखि १५ सम्म (६ हक)",
    optionCEn: "Part 4, Articles 49 to 55 (7 Principles)",
    optionCNe: "भाग ४, धारा ४९ देखि ५५ सम्म",
    optionDEn: "Part 3, Articles 15 to 45 (30 Rights)",
    optionDNe: "भाग ३, धारा १५ देखि ४५ सम्म",
    correctOption: "A",
    explanationEn:
      "Part 3 of the Constitution (Articles 16 through 46) enshrines a total of 31 fundamental rights, ranging from the Right to Live with Dignity (Art 16) to the Right to Constitutional Remedies (Art 46).",
    explanationNe:
      "नेपालको संविधानको भाग ३ अन्तर्गत धारा १६ देखि धारा ४६ सम्म जम्मा ३१ वटा मौलिक हकको संवैधानिक प्रत्याभूति गरिएको छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Karnali Province (2075-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2075, Karnali Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "legislative-structure",
    questionEn:
      "What is the total constitutional membership of the National Assembly (Rastriya Sabha) of Nepal?",
    questionNe:
      "राष्ट्रिय सभामा जम्मा कति जना सदस्य रहने संवैधानिक व्यवस्था छ?",
    optionAEn: "59 Members",
    optionANe: "५९ जना",
    optionBEn: "60 Members",
    optionBNe: "६० जना",
    optionCEn: "275 Members",
    optionCNe: "२७५ जना",
    optionDEn: "55 Members",
    optionDNe: "५५ जना",
    correctOption: "A",
    explanationEn:
      "The National Assembly is a permanent chamber consisting of 59 members: 56 members elected from the 7 provinces (8 from each province, including at least 3 women, 1 Dalit, and 1 person with disability or minority) and 3 members nominated by the President (including at least one woman) on the recommendation of the Government of Nepal.",
    explanationNe:
      "राष्ट्रिय सभा एक स्थायी सदन हो जसमा प्रत्येक प्रदेशबाट ८ जनाका दरले ५६ जना र नेपाल सरकारको सिफारिसमा राष्ट्रपतिबाट मनोनीत ३ जना (कम्तीमा १ महिला) गरी जम्मा ५९ जना सदस्य रहन्छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Sudurpashchim Province (2078-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2078, Sudurpashchim Province 2079",
    isImportant: true,
  },
  {
    topicSlug: "federalism",
    questionEn:
      "Which Schedule of the Constitution of Nepal enumerates the concurrent list of powers shared among the Federation, Provinces, and Local Levels?",
    questionNe:
      "नेपालमा संघ, प्रदेश र स्थानीय तहको साझा अधिकारको सूची कुन अनुसूचीमा उल्लेख छ?",
    optionAEn: "Schedule 5",
    optionANe: "अनुसूची ५",
    optionBEn: "Schedule 7",
    optionBNe: "अनुसूची ७",
    optionCEn: "Schedule 8",
    optionCNe: "अनुसूची ८",
    optionDEn: "Schedule 9",
    optionDNe: "अनुसूची ९",
    correctOption: "D",
    explanationEn:
      "Schedule 9 enumerates 22 concurrent powers shared across all three tiers: Federation, Provinces, and Local Levels. (Schedule 5 = Federation 35, Schedule 6 = Province 21, Schedule 7 = Federation & Province 25, Schedule 8 = Local Level 22).",
    explanationNe:
      "नेपालको संविधानको अनुसूची ९ मा संघ, प्रदेश र स्थानीय तहको साझा अधिकारको सूची (२२ वटा अधिकारहरू) उल्लेख गरिएको छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Madhesh Province (2078-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2078, Madhesh Province 2080",
    isImportant: true,
  },
  {
    topicSlug: "judiciary",
    questionEn:
      "What is the compulsory retirement age for the Chief Justice and Justices of the Supreme Court of Nepal?",
    questionNe:
      "सर्वोच्च अदालतका प्रधानन्यायाधीश वा न्यायाधीशको उमेर हद कति तोकिएको छ?",
    optionAEn: "60 Years",
    optionANe: "६० वर्ष",
    optionBEn: "63 Years",
    optionBNe: "६३ वर्ष",
    optionCEn: "65 Years",
    optionCNe: "६५ वर्ष",
    optionDEn: "68 Years",
    optionDNe: "६८ वर्ष",
    correctOption: "C",
    explanationEn:
      "According to Article 141 of the Constitution of Nepal, the Chief Justice or a Justice of the Supreme Court holds office until attaining the age of sixty-five (65) years or until the end of their six-year term in case of the Chief Justice.",
    explanationNe:
      "धारा १४१ अनुसार सर्वोच्च अदालतको प्रधानन्यायाधीश तथा न्यायाधीशको उमेर ६५ वर्ष पूरा भएपछि अनिवार्य अवकाश हुने संवैधानिक व्यवस्था छ। प्रधानन्यायाधीशको पदावधि ६ वर्षको हुन्छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Koshi Province (2073-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2073, Koshi Province 2082",
    isImportant: true,
  },
  {
    topicSlug: "directive-principles",
    questionEn:
      "Which Part of the Constitution of Nepal sets forth the Directive Principles, Policies, and Responsibilities of the State?",
    questionNe:
      "राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्व कुन भागमा उल्लेख छ?",
    optionAEn: "Part 3",
    optionANe: "भाग ३",
    optionBEn: "Part 4",
    optionBNe: "भाग ४",
    optionCEn: "Part 5",
    optionCNe: "भाग ५",
    optionDEn: "Part 6",
    optionDNe: "भाग ६",
    correctOption: "B",
    explanationEn:
      "Part 4 (Articles 49 to 55) sets forth the Directive Principles, Policies, and Responsibilities of the State, serving as guiding fundamentals for state governance.",
    explanationNe:
      "भाग ४ को धारा ४९ देखि ५५ सम्म राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्व सम्बन्धी व्यवस्थाहरू समेटिएका छन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2077-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2077, Gandaki PPSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "gk-constitution-of-nepal",
    questionEn:
      "Which Part of the Constitution of Nepal governs citizenship provisions?",
    questionNe:
      "नेपालको नागरिकता सम्बन्धी व्यवस्था संविधानको कुन भागमा छ?",
    optionAEn: "Part 1",
    optionANe: "भाग १",
    optionBEn: "Part 2",
    optionBNe: "भाग २",
    optionCEn: "Part 3",
    optionCNe: "भाग ३",
    optionDEn: "Part 4",
    optionDNe: "भाग ४",
    correctOption: "B",
    explanationEn:
      "Part 2 (Articles 10 through 15) of the Constitution contains all fundamental provisions relating to citizenship of Nepal, including citizenship by descent, naturalized citizenship, and honorary citizenship.",
    explanationNe:
      "नेपालको संविधानको भाग २ को धारा १० देखि १५ सम्म नागरिकता सम्बन्धी सम्पूर्ण संवैधानिक प्रावधानहरू उल्लेख छन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2073-2083)",
    isPreviousYear: true,
    previousYearInfo: "Bagmati PPSC Na.Su. 2073 & Federal PSC 2083",
    isImportant: true,
  },
  {
    topicSlug: "constitutional-bodies",
    questionEn:
      "How many members serve on the Constitutional Council (Sambhidanik Parishad) besides the Chief Justice?",
    questionNe:
      "संवैधानिक परिषदमा प्रधानन्यायाधीश बाहेक कति जना सदस्य रहने व्यवस्था छ?",
    optionAEn: "5 members",
    optionANe: "५ जना",
    optionBEn: "6 members",
    optionBNe: "६ जना",
    optionCEn: "7 members",
    optionCNe: "७ जना",
    optionDEn: "4 members",
    optionDNe: "४ जना",
    correctOption: "A",
    explanationEn:
      "The Constitutional Council has a total of 6 members: Prime Minister (Chairperson), Chief Justice, Speaker of HoR, Chairman of National Assembly, Leader of Main Opposition Party in HoR, and Deputy Speaker of HoR. Thus, excluding the Chief Justice, there are 5 other members.",
    explanationNe:
      "प्रधानमन्त्रीको अध्यक्षतामा रहने संवैधानिक परिषदमा प्रधानन्यायाधीश, प्रतिनिधि सभाका सभामुख, राष्ट्रिय सभाका अध्यक्ष, प्रतिनिधि सभामा विपक्षी दलका नेता र प्रतिनिधि सभाका उपसभामुख गरी कुल ६ जना रहन्छन्। अतः प्रधानन्यायाधीश बाहेक ५ जना सदस्य हुन्छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2074-2083)",
    isPreviousYear: true,
    previousYearInfo: "Gandaki PPSC Kharidar 2074 & Federal PSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "executive-structure",
    questionEn:
      "Under Article 273 of the Constitution of Nepal, who declares a State of Emergency in Nepal upon the recommendation of the Council of Ministers?",
    questionNe:
      "नेपालमा संकटकालीन अवस्थाको घोषणा मन्त्रिपरिषदको सिफारिसमा कसले गर्दछ?",
    optionAEn: "Prime Minister",
    optionANe: "प्रधानमन्त्री",
    optionBEn: "President",
    optionBNe: "राष्ट्रपति",
    optionCEn: "Speaker of HoR",
    optionCNe: "सभामुख",
    optionDEn: "Home Minister",
    optionDNe: "गृह मन्त्री",
    correctOption: "B",
    explanationEn:
      "Under Article 273, if a grave emergency arises in relation to the sovereignty, territorial integrity, or security of Nepal, the President may declare a state of emergency on the recommendation of the Council of Ministers.",
    explanationNe:
      "धारा २७३ अनुसार नेपालको सार्वभौमसत्ता, भौगोलिक अखण्डता वा सुरक्षामा गम्भीर संकट उत्पन्न भएमा मन्त्रिपरिषदको सिफारिसमा राष्ट्रपतिले संकटकालीन अवस्थाको घोषणा गर्न सक्ने संवैधानिक व्यवस्था छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fifth Level / Lumbini Province (2075-2082)",
    isPreviousYear: true,
    previousYearInfo: "Lumbini PPSC 5th Level 2075, Gandaki 2082",
    isImportant: true,
  },
  {
    topicSlug: "constitutional-bodies",
    questionEn:
      "What is the term of office (tenure) of the Chief Commissioner and Commissioners of the Commission for the Investigation of Abuse of Authority (CIAA)?",
    questionNe:
      "अख्तियार दुरुपयोग अनुसन्धान आयोगका प्रमुख आयुक्तको पदावधि कति वर्षको हुन्छ?",
    optionAEn: "5 Years",
    optionANe: "५ वर्ष",
    optionBEn: "6 Years",
    optionBNe: "६ वर्ष",
    optionCEn: "7 Years",
    optionCNe: "७ वर्ष",
    optionDEn: "4 Years",
    optionDNe: "४ वर्ष",
    correctOption: "B",
    explanationEn:
      "Under Article 238(3), the Chief Commissioner and Commissioners of the CIAA hold office for a term of six (6) years from the date of appointment or until attaining the age of 65 years, whichever occurs earlier.",
    explanationNe:
      "संविधानको धारा २३८ अनुसार अख्तियार दुरुपयोग अनुसन्धान आयोगका प्रमुख आयुक्त र आयुक्तको पदावधि नियुक्ति भएको मितिले ६ वर्षको हुनेछ वा ६५ वर्ष उमेर पुगेपछि अवकाश हुनेछ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fourth Level / Karnali Province (2076-2083)",
    isPreviousYear: true,
    previousYearInfo: "Karnali PPSC 4th Level 2076, Lumbini Na.Su. 2083",
    isImportant: true,
  },
  {
    topicSlug: "legislative-structure",
    questionEn:
      "Under which Article of the Constitution of Nepal are the provisions concerning Impeachment (Mahabhiyog) of constitutional office-bearers specified?",
    questionNe:
      "महाभियोग सम्बन्धी व्यवस्था संविधानको कुन धारामा गरिएको छ?",
    optionAEn: "Article 101",
    optionANe: "धारा १०१",
    optionBEn: "Article 102",
    optionBNe: "धारा १०२",
    optionCEn: "Article 100",
    optionCNe: "धारा १००",
    optionDEn: "Article 105",
    optionDNe: "धारा १०५",
    correctOption: "A",
    explanationEn:
      "Article 101 governs impeachment. A motion of impeachment may be introduced against the President, Vice President, Chief Justice, Justices of Supreme Court, and heads/members of constitutional bodies on grounds of grave violation of the constitution or incompetence.",
    explanationNe:
      "धारा १०१ अनुसार राष्ट्रपति, उपराष्ट्रपति, प्रधानन्यायाधीश, सर्वोच्चका न्यायाधीश वा संवैधानिक निकायका पदाधिकारी विरुद्ध संविधानको गम्भीर उल्लंघन वा कार्यक्षमताको अभावमा महाभियोग प्रस्ताव पेश गर्न सकिन्छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Sudurpashchim Province (2077-2083)",
    isPreviousYear: true,
    previousYearInfo: "Sudurpashchim Officer 2077, Karnali Kharidar 2073",
    isImportant: true,
  },
  {
    topicSlug: "provincial-government",
    questionEn:
      "What is the regular term (tenure) of the Provincial Assembly (Pradesh Sabha) in Nepal?",
    questionNe:
      "प्रदेश सभाको नियमित कार्यकाल कति वर्षको हुन्छ?",
    optionAEn: "4 Years",
    optionANe: "४ वर्ष",
    optionBEn: "5 Years",
    optionBNe: "५ वर्ष",
    optionCEn: "6 Years",
    optionCNe: "६ वर्ष",
    optionDEn: "3 Years",
    optionDNe: "३ वर्ष",
    correctOption: "B",
    explanationEn:
      "Under Article 177, the term of the Provincial Assembly is five (5) years from the date of its first meeting, unless dissolved earlier in accordance with the Constitution.",
    explanationNe:
      "संविधानको धारा १७७ अनुसार अगावै विघटन भएकोमा बाहेक प्रदेश सभाको नियमित कार्यकाल ५ वर्षको हुनेछ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Federal PSC (2078-2083)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2078, Koshi Province 2083",
    isImportant: true,
  },
  {
    topicSlug: "local-government",
    questionEn:
      "In which body is the executive power of the local level vested under Article 214 of the Constitution of Nepal?",
    questionNe:
      "स्थानीय तहको कार्यकारी अधिकार कसमा निहित हुन्छ?",
    optionAEn: "In the Rural Municipality (Gaun) or Municipality (Nagar) Executive",
    optionANe: "गाउँपालिका/नगरपालिका कार्यपालिकामा",
    optionBEn: "In the Ward Chairperson",
    optionBNe: "वडा अध्यक्षमा",
    optionCEn: "In the Chief Administrative Officer",
    optionCNe: "प्रमुख प्रशासकीय अधिकृतमा",
    optionDEn: "In the Provincial Government",
    optionDNe: "प्रदेश सरकारमा",
    correctOption: "A",
    explanationEn:
      "Article 214 stipulates that the executive power of the local level shall be vested in the Village Executive (Gaun Karyapalika) or Municipal Executive (Nagar Karyapalika) in accordance with the Constitution and local law.",
    explanationNe:
      "धारा २१४ अनुसार स्थानीय तहको कार्यकारिणी अधिकार गाउँ कार्यपालिका वा नगर कार्यपालिकामा निहित रहन्छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Koshi Province (2079-2083)",
    isPreviousYear: true,
    previousYearInfo: "Koshi PPSC Kharidar 2079, Federal PSC 2075",
    isImportant: true,
  },
  {
    topicSlug: "local-government",
    questionEn:
      "Which Schedule of the Constitution of Nepal enumerates the 22 exclusive single powers of the Local Level?",
    questionNe:
      "नेपालको संविधानको कुन अनुसूचीमा स्थानीय तहका २२ वटा एकल अधिकारहरूको सूची उल्लेख छ?",
    optionAEn: "Schedule 5",
    optionANe: "अनुसूची ५",
    optionBEn: "Schedule 6",
    optionBNe: "अनुसूची ६",
    optionCEn: "Schedule 8",
    optionCNe: "अनुसूची ८",
    optionDEn: "Schedule 9",
    optionDNe: "अनुसूची ९",
    correctOption: "C",
    explanationEn:
      "Schedule 8 contains the 22 exclusive powers of the Local Level, including local police, cooperative management, local taxes, basic health, and basic & secondary education.",
    explanationNe:
      "अनुसूची ८ मा स्थानीय तहका २२ वटा एकल अधिकारहरूको सूची दिइएको छ, जसमा नगर प्रहरी, सहकारी संस्था, स्थानीय कर, आधारभूत स्वास्थ्य तथा आधारभूत र माध्यमिक शिक्षा आदि पर्दछन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Nayab Subba Model Exam",
    isPreviousYear: true,
    previousYearInfo: "PSC Model Practice Question (Constitution)",
    isImportant: true,
  },

  // =========================================================================
  // CATEGORY 2: खेलकुद (SPORTS & TOURNAMENTS)
  // =========================================================================
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "What is the official national sport of Nepal and on which date was it formally declared by the Council of Ministers?",
    questionNe:
      "नेपालको वर्तमान राष्ट्रिय खेल कुन हो र यो कहिले घोषणा गरियो?",
    optionAEn: "Dandi Biyo, 2070 Jestha 1 BS",
    optionANe: "डण्डीबियो, २०७० जेठ १",
    optionBEn: "Volleyball, 2074 Jestha 9 BS",
    optionBNe: "भलिबल, २०७४ जेठ ९",
    optionCEn: "Football, 2072 Ashoj 3 BS",
    optionCNe: "फुटबल, २०७२ असोज ३",
    optionDEn: "Cricket, 2075 Baisakh 1 BS",
    optionDNe: "क्रिकेट, २०७५ वैशाख १",
    correctOption: "B",
    explanationEn:
      "On 2074 Jestha 9 BS (22 May 2017 AD), the Government of Nepal Cabinet formally declared Volleyball as the national sport of Nepal due to its geographic accessibility and nationwide popularity.",
    explanationNe:
      "नेपाल सरकार मन्त्रिपरिषदको २०७४ साल जेठ ९ गतेको निर्णय अनुसार भलिबललाई नेपालको आधिकारिक राष्ट्रिय खेल घोषणा गरिएको हो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2074-2078)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2074, Bagmati Province 2078",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who was the historic athlete to win Nepal's first-ever medal (Bronze) in the Asian Games?",
    questionNe:
      "एसियाली खेलकुद (Asian Games) मा नेपालका लागि पहिलो पदक (कांस्य) जित्ने खेलाडी को हुन्?",
    optionAEn: "Bidhan Lama (Taekwondo)",
    optionANe: "विधान लामा (तेक्वान्दो)",
    optionBEn: "Sabita Rajbhandari (Taekwondo)",
    optionBNe: "सविता राजभण्डारी (तेक्वान्दो)",
    optionCEn: "Deepak Bista (Taekwondo)",
    optionCNe: "दीपक विष्ट (तेक्वान्दो)",
    optionDEn: "Baikuntha Manandhar (Marathon)",
    optionDNe: "बैकुण्ठ मानन्धर (म्याराथन)",
    correctOption: "A",
    explanationEn:
      "Bidhan Lama won Nepal's first-ever official Asian Games medal (Bronze in Taekwondo) at the 10th Asian Games held in Seoul, South Korea in 1986 AD. (He also won an exhibition Bronze at the 1988 Seoul Olympics).",
    explanationNe:
      "विधान लामाले सन् १९८६ मा दक्षिण कोरियाको सियोलमा आयोजित १० औं एसियाली खेलकुदमा तेक्वान्दो खेलतर्फ नेपाललाई पहिलो ऐतिहासिक कांस्य पदक दिलाएका थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2073-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2073, Gandaki PPSC 2079",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who was the first Nepali athlete to win a historic Silver medal at the Asian Games?",
    questionNe:
      "एसियाली खेलकुदमा नेपालका लागि पहिलो ऐतिहासिक रजत पदक जित्ने खेलाडी को हुन्?",
    optionAEn: "Bidhan Lama",
    optionANe: "विधान लामा",
    optionBEn: "Sabita Rajbhandari (Taekwondo)",
    optionBNe: "सविता राजभण्डारी (तेक्वान्दो)",
    optionCEn: "Erica Gurung (Karate)",
    optionCNe: "एरिका गुरुङ (कराते)",
    optionDEn: "Sangina Baidya",
    optionDNe: "सङ्गिना वैद्य",
    correctOption: "B",
    explanationEn:
      "Sabita Rajbhandari won Nepal's first historic Asian Games silver medal in Taekwondo at the 13th Asian Games in Bangkok (1998 AD). Later, Erica Gurung won Nepal's second Asian Games silver in Karate at the 19th Asian Games in Hangzhou (2023 AD).",
    explanationNe:
      "सविता राजभण्डारीले सन् १९९८ मा बैङ्कक एसियाडमा तेक्वान्दोतर्फ नेपालका लागि पहिलो रजत पदक जितेकी थिइन्। (१९ औं एसियाडमा करातेकी एरिका गुरुङले दोस्रो रजत जितेकी छन्।)",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Lumbini Province (2076-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2076, Lumbini PPSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "When and where did Nepal participate for the first time in an international multi-sport competition?",
    questionNe:
      "नेपालले अन्तर्राष्ट्रिय खेलकुद प्रतियोगितामा पहिलो पटक कहिले सहभागिता जनाएको थियो?",
    optionAEn: "1951 AD (First Asian Games, New Delhi)",
    optionANe: "सन् १९५१ (प्रथम एसियाड, नयाँ दिल्ली)",
    optionBEn: "1964 AD (Tokyo Olympics)",
    optionBNe: "सन् १९६४ (टोकियो ओलम्पिक)",
    optionCEn: "1984 AD (First SAG, Kathmandu)",
    optionCNe: "सन् १९८४ (प्रथम साग, काठमाडौं)",
    optionDEn: "1950 AD (Colombo Cup)",
    optionDNe: "सन् १९५०",
    correctOption: "A",
    explanationEn:
      "Nepal made its international sporting debut at the 1st Asian Games held in New Delhi, India in 1951 AD, participating in football and athletics.",
    explanationNe:
      "नेपालले सन् १९५१ मा भारतको नयाँ दिल्लीमा आयोजित पहिलो एसियाली खेलकुदमा पहिलो पटक अन्तर्राष्ट्रिय सहभागिता जनाएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Koshi Province (2075-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2075, Koshi Province 2080",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "In which year did the Cricket Association of Nepal (CAN) obtain Associate membership from the International Cricket Council (ICC)?",
    questionNe:
      "नेपाल क्रिकेट संघ (CAN) ले ICC को एसोसिएट (Associate) सदस्यता कहिले प्राप्त गरेको थियो?",
    optionAEn: "1988 AD",
    optionANe: "सन् १९८८",
    optionBEn: "1996 AD",
    optionBNe: "सन् १९९६",
    optionCEn: "2014 AD",
    optionCNe: "सन् २०१४",
    optionDEn: "2000 AD",
    optionDNe: "सन् २०००",
    correctOption: "B",
    explanationEn:
      "Nepal became an Affiliate member of the ICC in 1988 AD and achieved Associate membership in 1996 AD.",
    explanationNe:
      "नेपालले सन् १९८८ मा एफिलिएट र सन् १९९६ मा ICC को एसोसिएट सदस्यता प्राप्त गरेको हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Sudurpashchim Province (2078-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2078, Sudurpashchim 2082",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who is the legendary Nepali marathon runner who created history by winning three consecutive gold medals in the South Asian Games (SAG)?",
    questionNe:
      "दक्षिण एसियाली खेलकुद (SAG) मा लगातार ३ वटा स्वर्ण पदक जित्ने नेपालका कीर्तिमानी धावक को हुन्?",
    optionAEn: "Deepak Bista",
    optionANe: "दीपक विष्ट",
    optionBEn: "Baikuntha Manandhar",
    optionBNe: "बैकुण्ठ मानन्धर",
    optionCEn: "Rajendra Bhandari",
    optionCNe: "राजेन्द्र भण्डारी",
    optionDEn: "Jit Bahadur KC",
    optionDNe: "जितबहादुर केसी",
    correctOption: "B",
    explanationEn:
      "Baikuntha Manandhar won gold medals in the marathon in the 1st (Kathmandu 1984), 2nd (Dhaka 1985), and 3rd (Kolkata 1987) South Asian Games. His record time of 2 hours 15 minutes 03 seconds set in 1987 still stands unbroken.",
    explanationNe:
      "बैकुण्ठ मानन्धरले प्रथम, दोस्रो र तेस्रो साग खेलकुदमा म्याराथनमा लगातार ३ स्वर्ण जितेका थिए। सन् १९८७ मा कोलकातामा उनले बनाएको २ घण्टा १५ मिनेट ३ सेकेन्डको कीर्तिमान अझै कायमै छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Bagmati Province (2074-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2074, Bagmati Province 2080",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "When was the 13th South Asian Games (13th SAG) held in Nepal, where Nepal won a record 51 gold medals?",
    questionNe:
      "नेपालमा १३ औं दक्षिण एसियाली खेलकुद (13th SAG) कहिले आयोजना भएको थियो?",
    optionAEn: "2019 December 1 to 10",
    optionANe: "२०१९ डिसेम्बर १ देखि १०",
    optionBEn: "2018 November 15 to 25",
    optionBNe: "२०१८ नोभेम्बर १५ देखि २५",
    optionCEn: "2020 January 1 to 10",
    optionCNe: "२०२० जनवरी १ देखि १०",
    optionDEn: "2021 March 5 to 15",
    optionDNe: "२०२१ मार्च ५ देखि १५",
    correctOption: "A",
    explanationEn:
      "The 13th South Asian Games was hosted in Kathmandu, Pokhara, and Janakpur from December 1 to 10, 2019. Nepal finished 2nd in the medal tally with a historic 51 gold, 60 silver, and 95 bronze medals (total 206 medals).",
    explanationNe:
      "१३ औं साग २०१९ डिसेम्बर १ देखि १० सम्म नेपालका तीन शहर (काठमाडौं, पोखरा र जनकपुर) मा आयोजना भएको थियो, जसमा नेपालले ऐतिहासिक ५१ स्वर्ण पदक जितेको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Officer / Karnali Province (2076-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2076, Karnali Province 2079",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "In the tragic Dasharath Rangasala stadium stampede on 2044 Falgun 29 BS during a football tournament, how many spectators lost their lives?",
    questionNe:
      "वि.सं. २०४४ फागुन २९ गते दशरथ रङ्गशालामा भएको दुःखद भागदौड दुर्घटनामा कति जनाको ज्यान गएको थियो?",
    optionAEn: "50 Persons",
    optionANe: "५० जना",
    optionBEn: "70 Persons",
    optionBNe: "७० जना",
    optionCEn: "93 Persons",
    optionCNe: "९३ जना",
    optionDEn: "105 Persons",
    optionDNe: "१०५ जना",
    correctOption: "B",
    explanationEn:
      "On 2044 Falgun 29 BS (12 March 1988 AD), a catastrophic hailstorm struck during the Tribhuvan Challenge Shield football match between Janakpur Cigarette Factory and Liberation Army of Bangladesh. As spectators rushed towards locked exits, a stampede claimed the lives of 70 football fans.",
    explanationNe:
      "२०४४ फागुन २९ मा जनकपुर चुरोट कारखाना र मुक्ति योद्धा बंगलादेशबीचको फुटबल म्याचका क्रममा भीषण असिना-हावाहुरी आएपछि भएको भागदौडमा ७० जना दर्शकको निधन भएको थियो।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Madhesh Province (2076-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2076, Madhesh Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who was Nepal's first international medalist athlete, who won Bronze at the Asian Athletics Championships in 1973 Manila?",
    questionNe:
      "नेपालको पहिलो अन्तर्राष्ट्रिय धावक (अन्तर्राष्ट्रिय पदक विजेता) को हुन्?",
    optionAEn: "Jit Bahadur KC",
    optionANe: "जितबहादुर केसी",
    optionBEn: "Baikuntha Manandhar",
    optionBNe: "बैकुण्ठ मानन्धर",
    optionCEn: "Hari Bahadur Rokaya",
    optionCNe: "हरिबहादुर रोकाय",
    optionDEn: "Gajendra Bahadur Shrestha",
    optionDNe: "गजेन्द्रबहादुर श्रेष्ठ",
    correctOption: "A",
    explanationEn:
      "Jit Bahadur KC made sporting history for Nepal by winning a Bronze medal in the marathon at the 1973 Asian Athletics Championships in Manila, Philippines, becoming Nepal's first international medalist.",
    explanationNe:
      "जितबहादुर केसीले सन् १९७३ मा मनिलामा भएको पहिलो एसियाली एथलेटिक्स च्याम्पियनसिपमा म्याराथनतर्फ कांस्य पदक जितेर नेपाललाई पहिलो अन्तर्राष्ट्रिय पदक दिलाएका थिए।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Gandaki Province (2075-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2075, Gandaki PPSC 2082",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Which two nations have won back-to-back (two consecutive) FIFA World Cup titles in football history?",
    questionNe:
      "विश्वकप फुटबलको इतिहासमा लगातार दुई पटक उपाधि जित्ने देशहरू कुन-कुन हुन्?",
    optionAEn: "Italy (1934, 1938) & Brazil (1958, 1962)",
    optionANe: "इटाली र ब्राजिल",
    optionBEn: "Argentina & France",
    optionBNe: "अर्जेन्टिना र फ्रान्स",
    optionCEn: "Germany & Brazil",
    optionCNe: "जर्मनी र ब्राजिल",
    optionDEn: "Uruguay & Italy",
    optionDNe: "उरुग्वे र इटाली",
    correctOption: "A",
    explanationEn:
      "Only two nations have successfully defended their FIFA World Cup title: Italy in 1934 and 1938, and Brazil in 1958 and 1962.",
    explanationNe:
      "इटालीले (१९३४ र १९३८) तथा ब्राजिलले (१९५८ र १९६२) लगातार दुई पटक विश्वकप फुटबलको उपाधि जितेका छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Lumbini Province (2077-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2077, Lumbini PPSC 2082",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "From which Olympic Games did Nepal start its official participation in the Summer Olympics?",
    questionNe:
      "नेपालले ओलम्पिक खेलकुदमा कहिलेदेखि आधिकारिक सहभागिता जनाउन थालेको हो?",
    optionAEn: "1964 Tokyo Olympics",
    optionANe: "सन् १९६४ (टोकियो ओलम्पिक)",
    optionBEn: "1972 Munich Olympics",
    optionBNe: "सन् १९७२ (म्युनिख ओलम्पिक)",
    optionCEn: "1980 Moscow Olympics",
    optionCNe: "सन् १९८० (मस्को ओलम्पिक)",
    optionDEn: "1952 Helsinki Olympics",
    optionDNe: "सन् १९५२ (हेलसिन्की ओलम्पिक)",
    correctOption: "A",
    explanationEn:
      "Nepal first officially participated in the Olympic Games at the 1964 Tokyo Summer Olympics in Japan with 6 athletes (4 marathon runners and 2 boxers).",
    explanationNe:
      "नेपालले सन् १९६४ को १८ औं टोकियो ओलम्पिकदेखि आधिकारिक रूपमा ओलम्पिकमा भाग लिन थालेको हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2073-2083)",
    isPreviousYear: true,
    previousYearInfo: "Bagmati PPSC Na.Su. 2073, Federal PSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "When and where was the 1st South Asian Games (1st SAG) hosted?",
    questionNe:
      "प्रथम दक्षिण एसियाली खेलकुद (1st SAG) कहिले र कहाँ आयोजना भएको थियो?",
    optionAEn: "1984 AD, Kathmandu, Nepal",
    optionANe: "सन् १९८४ काठमाडौं",
    optionBEn: "1985 AD, New Delhi, India",
    optionBNe: "सन् १९८५ नयाँ दिल्ली",
    optionCEn: "1987 AD, Dhaka, Bangladesh",
    optionCNe: "सन् १९८७ ढाका",
    optionDEn: "1983 AD, Islamabad, Pakistan",
    optionDNe: "सन् १९८३ इस्लामाबाद",
    correctOption: "A",
    explanationEn:
      "The inaugural South Asian Games (then SAF Games) took place in Kathmandu, Nepal from 17 to 23 September 1984.",
    explanationNe:
      "प्रथम दक्षिण एसियाली खेलकुद (साग) सन् १९८४ सेप्टेम्बर १७ देखि २३ सम्म नेपालको काठमाडौंमा आयोजना भएको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2074-2083)",
    isPreviousYear: true,
    previousYearInfo: "Gandaki PPSC Kharidar 2074, Federal PSC 2079",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "In which year was Nepal's apex sports regulatory body, the National Sports Council (NSC), established?",
    questionNe:
      "नेपाल राष्ट्रिय खेलकुद परिषद (NSC) को स्थापना कहिले भएको हो?",
    optionAEn: "2017 BS",
    optionANe: "वि.सं. २०१७",
    optionBEn: "2024 BS",
    optionBNe: "वि.सं. २०२४",
    optionCEn: "2035 BS",
    optionCNe: "वि.सं. २०३५",
    optionDEn: "2010 BS",
    optionDNe: "वि.सं. २०१०",
    correctOption: "A",
    explanationEn:
      "The National Sports Council (NSC / Rashtriya Khelkud Parishad) of Nepal was formally established in 2017 BS.",
    explanationNe:
      "नेपालमा खेलकुदको सर्वोच्च निकाय राष्ट्रिय खेलकुद परिषदको स्थापना वि.सं. २०१७ सालमा भएको हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fifth Level / Lumbini Province (2075-2083)",
    isPreviousYear: true,
    previousYearInfo: "Lumbini 5th Level 2075, Koshi PPSC 2080",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "In which group was Nepal placed in the ICC Men's T20 World Cup 2024 held in the USA and West Indies?",
    questionNe:
      "सन् २०२४ को ICC Men's T20 World Cup मा नेपाल कुन समूहमा रहेको थियो?",
    optionAEn: "Group A",
    optionANe: "Group A",
    optionBEn: "Group B",
    optionBNe: "Group B",
    optionCEn: "Group C",
    optionCNe: "Group C",
    optionDEn: "Group D",
    optionDNe: "Group D",
    correctOption: "D",
    explanationEn:
      "In the 2024 ICC Men's T20 World Cup, Nepal was in Group D alongside South Africa, Sri Lanka, Bangladesh, and the Netherlands.",
    explanationNe:
      "अमेरिका र वेस्टइन्डिजमा सम्पन्न २०२४ T20 विश्वकपमा नेपाल समूह 'D' (Group D) मा परेको थियो, जसमा दक्षिण अफ्रिका, श्रीलंका, बंगलादेश र नेदरल्यान्ड्स पनि थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fourth Level / Karnali Province (2076-2083)",
    isPreviousYear: true,
    previousYearInfo: "Karnali 4th Level 2076, Model Exam 2081",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who holds the record for winning four consecutive individual Gold Medals for Nepal in Taekwondo at the South Asian Games (SAG)?",
    questionNe:
      "नेपालका लागि तेक्वान्दो खेलमा लगातार चार वटा साग स्वर्ण पदक जित्ने कीर्तिमानी खेलाडी को हुन्?",
    optionAEn: "Deepak Bista",
    optionANe: "दीपक विष्ट",
    optionBEn: "Bidhan Lama",
    optionBNe: "विधान लामा",
    optionCEn: "Sujan Shrestha",
    optionCNe: "सुजन श्रेष्ठ",
    optionDEn: "Rajkumar Rai",
    optionDNe: "राजकुमार राई",
    correctOption: "A",
    explanationEn:
      "Deepak Bista won four consecutive gold medals in Taekwondo at the South Asian Games (8th Kathmandu 1999, 9th Islamabad 2004, 10th Colombo 2006, and 11th Dhaka 2010), a landmark record in Nepali sports.",
    explanationNe:
      "दीपक विष्टले साग खेलकुदमा लगातार ४ वटा स्वर्ण पदक (८ औं, ९ औं, १० औं र ११ औं साग) जितेर नेपालको तर्फबाट सर्वाधिक व्यक्तिगत स्वर्णको कीर्तिमान कायम गरेका छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Sudurpashchim (2077-2082)",
    isPreviousYear: true,
    previousYearInfo: "Sudurpashchim Officer 2077, Gandaki 2082",
    isImportant: true,
  },

  // =========================================================================
  // CATEGORY 3: चलचित्र तथा सिनेमा (CINEMA, ARTS & CULTURE)
  // =========================================================================
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which was the first feature film made in the Nepali language (filmed in Kolkata, India)?",
    questionNe:
      "नेपाली भाषामा बनेको पहिलो चलचित्र कुन हो?",
    optionAEn: "Aama",
    optionANe: "आमा",
    optionBEn: "Satya Harishchandra",
    optionBNe: "सत्य हरिश्चन्द्र",
    optionCEn: "Maitighar",
    optionCNe: "माइतीघर",
    optionDEn: "Kumari",
    optionDNe: "कुमारी",
    correctOption: "B",
    explanationEn:
      "'Satya Harishchandra' (1951 AD), produced and directed by D.B. Joshi in Kolkata (Calcutta), India, was the first-ever feature film made in the Nepali language.",
    explanationNe:
      "नेपाली भाषाको पहिलो चलचित्र 'सत्य हरिश्चन्द्र' हो जुन डी.बी. जोशीको निर्देशनमा सन् १९५१ मा भारतको कोलकातामा बनेको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Bagmati Province (2073-2078)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2073, Bagmati Province 2078",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which was the first feature film produced within Nepal by the Nepal Government Department of Information?",
    questionNe:
      "नेपालभित्रै निर्माण भएको पहिलो नेपाली चलचित्र कुन हो?",
    optionAEn: "Maitighar",
    optionANe: "माइतीघर",
    optionBEn: "Aama",
    optionBNe: "आमा",
    optionCEn: "Hijo Aaja Bholi",
    optionCNe: "हिजो आज र भोलि",
    optionDEn: "Paral Ko Aago",
    optionDNe: "परालको आगो",
    correctOption: "B",
    explanationEn:
      "'Aama' was the first feature film produced entirely within Nepal. Directed by Hira Singh Khatri and produced by the Department of Information, Government of Nepal, it premiered on 2021 Ashoj 22 BS (7 October 1964 AD).",
    explanationNe:
      "नेपाल सरकार सूचना विभागद्वारा वि.सं. २०२१ असोज २२ मा प्रदर्शित 'आमा' नेपालभित्र निर्माण भएको पहिलो नेपाली चलचित्र हो। यसका निर्देशक हीरासिंह खत्री थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Gandaki Province (2074-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2074, Gandaki PPSC 2079",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which was the first Nepali feature film produced by the private sector?",
    questionNe:
      "नेपालको निजी क्षेत्रबाट निर्मित पहिलो नेपाली चलचित्र कुन हो?",
    optionAEn: "Maitighar",
    optionANe: "माइतीघर",
    optionBEn: "Kumari",
    optionBNe: "कुमारी",
    optionCEn: "Sindoor",
    optionCNe: "सिन्दूर",
    optionDEn: "Kanchhi",
    optionDNe: "कान्छी",
    correctOption: "A",
    explanationEn:
      "'Maitighar' (2023 BS / 1966 AD), produced under the banner of Sumonanjali Films by private investors and starring Mala Sinha and CP Lohani, was the first privately produced Nepali movie.",
    explanationNe:
      "वि.सं. २०२३ सालमा सुमोनाञ्जली फिल्म्स प्रालिको ब्यानरमा निर्मित 'माइतीघर' निजी क्षेत्रबाट बनेको नेपालको पहिलो चलचित्र हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Koshi Province (2075-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2075, Koshi Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which was the first color feature film made in Nepal?",
    questionNe:
      "नेपालको पहिलो रंगीन (Color) चलचित्र कुन हो?",
    optionAEn: "Maitighar",
    optionANe: "माइतीघर",
    optionBEn: "Kumari",
    optionBNe: "कुमारी",
    optionCEn: "Jeevan Rekha",
    optionCNe: "जीवन रेखा",
    optionDEn: "Sindoor",
    optionDNe: "सिन्दूर",
    correctOption: "B",
    explanationEn:
      "'Kumari' (2034 BS / 1977 AD), directed by Prem Bahadur Basnet and produced by Royal Nepal Film Corporation, was Nepal's first full-length color feature film.",
    explanationNe:
      "वि.सं. २०३४ सालमा प्रेमबहादुर बस्नेतको निर्देशनमा बनेको 'कुमारी' नेपालको पहिलो रंगीन (Color) चलचित्र हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Lumbini Province (2076-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2076, Lumbini PPSC 2080",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which was the first Nepali film to receive an official Oscar nomination in the Best Foreign Language Film category?",
    questionNe:
      "ओस्कार पुरस्कारको मनोनयन (Final Top-5 Nomination) मा पर्न सफल पहिलो नेपाली चलचित्र कुन हो?",
    optionAEn: "Basudev",
    optionANe: "बासुदेव",
    optionBEn: "Mukundo",
    optionBNe: "मुकुण्डो",
    optionCEn: "Caravan (Himalaya)",
    optionCNe: "क्याराभान (Himalaya)",
    optionDEn: "Kalo Pothi",
    optionDNe: "कालो पोथी",
    correctOption: "C",
    explanationEn:
      "'Caravan' (internationally titled 'Himalaya'), directed by French director Eric Valli and set in Upper Dolpo, received an Academy Award (Oscar) nomination in the Best Foreign Language Film category at the 72nd Academy Awards in 1999 AD.",
    explanationNe:
      "सन् १९९९ मा फ्रान्सेली निर्देशक एरिक भ्यालीद्वारा निर्देशित डोल्पाको पृष्ठभूमिमा बनेको चलचित्र 'क्याराभान' (Himalaya) ओस्कारको उत्कृष्ट ५ विदेशी भाषा चलचित्र मनोनयनमा परेको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Karnali Province (2076-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2076, Karnali Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Who were the historic first actor (hero) and actress (heroine) of Nepali cinema (in film 'Aama')?",
    questionNe:
      "नेपाली चलचित्र क्षेत्रका प्रथम नायक र नायिका को-को हुन्?",
    optionAEn: "Shiva Shankar Manandhar & Bhuwan Chand",
    optionANe: "शिवशंकर मानन्धर र भुवन चन्द",
    optionBEn: "Hari Prasad Rimal & Basundhara Bhusal",
    optionBNe: "हरिप्रसाद रिमाल र वसुन्धरा भुसाल",
    optionCEn: "Pradeep Kumar & Mala Sinha",
    optionCNe: "प्रदीप कुमार र माला सिन्हा",
    optionDEn: "Shiva Shrestha & Karishma Manandhar",
    optionDNe: "शिव श्रेष्ठ र करिश्मा मानन्धर",
    correctOption: "A",
    explanationEn:
      "Shiva Shankar Manandhar (renowned musician and singer) and Bhuwan Chand debuted as the lead actor and actress in 'Aama' (2021 BS), becoming the foundational hero and heroine of Nepali cinema.",
    explanationNe:
      "वि.सं. २०२१ को चलचित्र 'आमा' का प्रमुख पात्र शिवशंकर मानन्धर प्रथम नायक र भुवन चन्द प्रथम नायिका हुन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Sudurpashchim (2075-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2075, Sudurpashchim 2079",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "When was the Film Development Board (Chalachitra Vikas Board) of Nepal established?",
    questionNe:
      "नेपाल चलचित्र विकास बोर्डको स्थापना कहिले भएको हो?",
    optionAEn: "2050 Ashar 15 BS",
    optionANe: "वि.सं. २०५० असार १५",
    optionBEn: "2057 Ashar 16 BS",
    optionBNe: "वि.सं. २०५७ असार १६",
    optionCEn: "2060 Saun 1 BS",
    optionCNe: "वि.सं. २०६० साउन १",
    optionDEn: "2045 Mangsir 10 BS",
    optionDNe: "वि.सं. २०४५ मङ्aggregate",
    correctOption: "B",
    explanationEn:
      "The Film Development Board of Nepal was established on 2057 Ashar 16 BS (30 June 2000 AD) under the Motion Picture (Production, Exhibition and Distribution) Act to foster and regulate the Nepali film sector.",
    explanationNe:
      "नेपाली चलचित्रको प्रवर्द्धन तथा विकासका लागि नेपाल सरकारले वि.सं. २०५७ साल असार १६ गते चलचित्र विकास बोर्डको स्थापना गरेको हो।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Madhesh Province (2077-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2077, Madhesh Province 2080",
    isImportant: true,
  },
  {
    topicSlug: "culture-festivals-and-traditions",
    questionEn:
      "Which is the first feature film made in the Tharu language?",
    questionNe:
      "नेपालको पहिलो थारू भाषाको चलचित्र कुन हो?",
    optionAEn: "Jeet",
    optionANe: "जीत",
    optionBEn: "Patal Bhuiya",
    optionBNe: "पाताल भुइँया",
    optionCEn: "Sailung",
    optionCNe: "सैलुङ",
    optionDEn: "Bavari",
    optionDNe: "बामरी",
    correctOption: "A",
    explanationEn:
      "'Jeet' is recognized as the first feature film produced in the Tharu indigenous language of Nepal.",
    explanationNe:
      "थारू भाषामा निर्मित पहिलो चलचित्र 'जीत' हो।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Bagmati Province (2077-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2077, Bagmati Province 2082",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which acclaimed Nepali film won the prestigious Critics' Week award at the Venice International Film Festival in 2015?",
    questionNe:
      "अन्तर्राष्ट्रिय भेनिस फिल्म फेस्टिभल (Venice Film Festival 2015) मा पुरस्कृत हुने नेपाली चलचित्र कुन हो?",
    optionAEn: "White Sun (Seto Surya)",
    optionANe: "सेतो सूर्य",
    optionBEn: "Kalo Pothi (The Black Hen)",
    optionBNe: "कालो पोथी",
    optionCEn: "Bulbul",
    optionCNe: "बुलबुल",
    optionDEn: "Gaun Aayeko Bato",
    optionDNe: "गाउँ आएको बाटो",
    correctOption: "B",
    explanationEn:
      "'Kalo Pothi' (The Black Hen, 2015), directed by Min Bahadur Bham and set in Mugu during the Maoist insurgency, won the Best Film award in the International Critics' Week section at the 72nd Venice International Film Festival.",
    explanationNe:
      "मीनबहादुर भामद्वारा निर्देशित मुगुको द्वन्द्वकालीन परिवेशमा आधारित चलचित्र 'कालो पोथी' ले सन् २०१५ को ७२ औं भेनिस अन्तर्राष्ट्रिय फिल्म फेस्टिभलको क्रिटिक्स विकमा उत्कृष्ट फिल्मको पुरस्कार जितेको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Gandaki Province (2077-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2077, Gandaki PPSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Which 1888 short film is widely regarded as the world's first surviving motion picture film in history?",
    questionNe:
      "विश्वको पहिलो चलचित्र दृश्य (First Motion Picture) कुनलाई मानिन्छ?",
    optionAEn: "Roundhay Garden Scene (1888)",
    optionANe: "द राउन्डहे गार्डेन सिन",
    optionBEn: "The Arrival of a Train",
    optionBNe: "द अराइभल अफ अ ट्रेन",
    optionCEn: "The Great Train Robbery",
    optionCNe: "द ग्रेट ट्रेन रोबरी",
    optionDEn: "The Jazz Singer",
    optionDNe: "द ज्याज सिङ्गर",
    correctOption: "A",
    explanationEn:
      "'Roundhay Garden Scene' (1888), directed by French inventor Louis Le Prince in Leeds, England, is acknowledged by the Guinness Book of Records as the oldest surviving film in existence.",
    explanationNe:
      "सन् १८८८ मा फ्रान्सेली आविष्कारक लुई ले प्रिन्सले खिचेको २.११ सेकेन्डको 'Roundhay Garden Scene' लाई सिनेमा इतिहासकै पहिलो मुभी दृश्य मानिन्छ।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Lumbini Province (2078-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2078, Lumbini PPSC 2082",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Who was the first female film director of Nepal?",
    questionNe:
      "नेपालको पहिलो महिला चलचित्र निर्देशक को हुन्?",
    optionAEn: "Suchitra Shrestha",
    optionANe: "सुचित्रा श्रेष्ठ",
    optionBEn: "Renaha Basnet",
    optionBNe: "रेनाहा बस्नेत",
    optionCEn: "Suwarna Thapa",
    optionCNe: "सुवर्ण थापा",
    optionDEn: "Deepa Shree Niraula",
    optionDNe: "दीपाश्री निरौला",
    correctOption: "A",
    explanationEn:
      "Suchitra Shrestha is celebrated as Nepal's first female film director, having directed the feature film 'Premyuddha'.",
    explanationNe:
      "नेपालकी प्रथम महिला चलचित्र निर्देशक सुचित्रा श्रेष्ठ हुन्। उनले 'प्रेमयुद्ध' चलचित्रको सफल निर्देशन गरेकी थिइन्।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2073-2083)",
    isPreviousYear: true,
    previousYearInfo: "Bagmati PPSC Na.Su. 2073, Federal PSC 2082",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Who was the legendary Indian classical and film music composer who composed the timeless music for the Nepali film 'Maitighar' (2023 BS)?",
    questionNe:
      "चलचित्र 'माइतीघर' (वि.सं. २०२३) मा सङ्गीत संयोजन गर्ने प्रसिद्ध भारतीय सङ्गीतकार को हुन्?",
    optionAEn: "Jaidev",
    optionANe: "जयदेव",
    optionBEn: "Sanjay Leela Bhansali",
    optionBNe: "सञ्जय लीला भन्साली",
    optionCEn: "R.D. Burman",
    optionCNe: "आर.डी. बर्मन",
    optionDEn: "Laxmikant-Pyarelal",
    optionDNe: "लक्ष्मीकान्त प्यारेलाल",
    correctOption: "A",
    explanationEn:
      "Celebrated Indian maestro Jaidev composed the immortal soundtrack of 'Maitighar', which included Lata Mangeshkar's iconic Nepali song 'Asar Kothaima' and Manna Dey's songs.",
    explanationNe:
      "वि.सं. २०२३ को ऐतिहासिक चलचित्र 'माइतीघर' मा प्रख्यात भारतीय सङ्गीतकार जयदेवले सङ्गीत दिएका थिए, जसमा लता मङ्गेशकरको स्वरमा 'असारै महिनामा' जस्ता अमर गीत समावेश छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2074-2083)",
    isPreviousYear: true,
    previousYearInfo: "Gandaki PPSC Kharidar 2074, Federal PSC 2079",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "On which date is National Cinema Day (Nepali Chalachitra Diwas) celebrated annually in Nepal?",
    questionNe:
      "नेपाली चलचित्र दिवस कहिले मनाइन्छ?",
    optionAEn: "Ashoj 22",
    optionANe: "असोज २२",
    optionBEn: "Kartik 7",
    optionBNe: "कात्तिक ७",
    optionCEn: "Mangsir 15",
    optionCNe: "मङ्सिर १५",
    optionDEn: "Ashar 16",
    optionDNe: "असार १६",
    correctOption: "A",
    explanationEn:
      "Nepali Cinema Day is observed every year on Ashoj 22, commemorating the date when Nepal's first indigenous feature film 'Aama' premiered in 2021 BS.",
    explanationNe:
      "नेपालभित्रै निर्मित प्रथम नेपाली चलचित्र 'आमा' २०२१ साल असोज २२ गते प्रदर्शन भएको सम्झनामा हरेक वर्ष असोज २२ लाई 'नेपाली चलचित्र दिवस' मनाइन्छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fifth Level / Lumbini Province (2075-2083)",
    isPreviousYear: true,
    previousYearInfo: "Lumbini 5th Level 2075, Federal PSC 2078",
    isImportant: true,
  },
  {
    topicSlug: "culture-festivals-and-traditions",
    questionEn:
      "Which was the first feature film made in the Newari language (Nepal Bhasa)?",
    questionNe:
      "नेपालको पहिलो नेवारी (नेपाल भाषा) चलचित्र कुन हो?",
    optionAEn: "Silu",
    optionANe: "सिलु",
    optionBEn: "Rajamati",
    optionBNe: "राजमती",
    optionCEn: "Pasa",
    optionCNe: "पसः",
    optionDEn: "Nhila",
    optionDNe: "न्हिला",
    correctOption: "A",
    explanationEn:
      "'Silu' (2044 BS / 1987 AD), directed by Pradeep Rimal and starring Nabina Shrestha and Jay Shrestha, was the first feature film made in Nepal Bhasa (Newari).",
    explanationNe:
      "वि.सं. २०४४ मा निर्मित 'सिलु' नेपाल भाषा (नेवारी) को पहिलो चलचित्र हो। यसका निर्देशक प्रदीप रिमाल थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fourth Level / Karnali Province (2076-2083)",
    isPreviousYear: true,
    previousYearInfo: "Karnali 4th Level 2076, Bagmati Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Who is the acclaimed director of the internationally honored Nepali film 'White Sun' (Seto Surya)?",
    questionNe:
      "अन्तर्राष्ट्रिय पुरस्कार विजेता चलचित्र 'सेतो सूर्य' (White Sun) का निर्देशक को हुन्?",
    optionAEn: "Deepak Rauniyar",
    optionANe: "दीपक रौनियर",
    optionBEn: "Nabin Subba",
    optionBNe: "नवीन सुब्बा",
    optionCEn: "Chhirring Ritar Sherpa",
    optionCNe: "छिरिङ रितार शेर्पा",
    optionDEn: "Bhanu Bhakta",
    optionDNe: "भानु भक्त",
    correctOption: "A",
    explanationEn:
      "'White Sun' (Seto Surya, 2016), directed by Deepak Rauniyar, premiered at the Venice and Toronto Film Festivals and won awards at Palm Springs and Singapore International Film Festivals.",
    explanationNe:
      "दीपक रौनियरद्वारा निर्देशित 'सेतो सूर्य' (White Sun) ले भेनिस, टोरन्टो र सिङ्गापुर फिल्म फेस्टिभलहरूमा विभिन्न अन्तर्राष्ट्रिय पुरस्कार जितेको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Sudurpashchim (2077-2083)",
    isPreviousYear: true,
    previousYearInfo: "Sudurpashchim Officer 2077, Gandaki 2082",
    isImportant: true,
  },
  {
    topicSlug: "literature-and-personalities",
    questionEn:
      "Who is the director of the acclaimed indigenous Nepali film 'Gaun Aayeko Bato' (A Road to a Village)?",
    questionNe:
      "नेपाली चलचित्र 'गाउँ आएको बाटो' (A Road to a Village) का निर्देशक को हुन्?",
    optionAEn: "Nabin Subba",
    optionANe: "नवीन सुब्बा",
    optionBEn: "Min Bahadur Bham",
    optionBNe: "मीनबहादुर भाम",
    optionCEn: "Deepak Rauniyar",
    optionCNe: "दीपक रौनियर",
    optionDEn: "Nischal Basnet",
    optionDNe: "निश्चल बस्नेत",
    correctOption: "A",
    explanationEn:
      "'Gaun Aayeko Bato' (A Road to a Village, 2023), directed by prominent indigenous filmmaker Nabin Subba (who also directed 'Numafung'), had its world premiere at the 48th Toronto International Film Festival.",
    explanationNe:
      "राई समुदायको परिवेशमा निर्मित 'गाउँ आएको बाटो' का निर्देशक नवीन सुब्बा हुन्। यो चलचित्र टोरन्टो, बुसान र मुम्बई अन्तर्राष्ट्रिय फिल्म फेस्टिभलमा प्रदर्शन भएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Model Practice Question (Cinema & Arts)",
    isPreviousYear: true,
    previousYearInfo: "Loksewa PSC Model Practice (Cinema)",
    isImportant: true,
  },

  // =========================================================================
  // CATEGORY 4: नेपालको इतिहास (HISTORY OF NEPAL)
  // =========================================================================
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which was the first dynasty to rule Kathmandu Valley and who was its first king?",
    questionNe:
      "नेपालको उपत्यकामा शासन गर्ने पहिलो राजवंश कुन हो र प्रथम राजा को थिए?",
    optionAEn: "Gopal Dynasty, King Bhuktaman (Gupta)",
    optionANe: "गोपाल वंश, भुक्तमान (गुप्त)",
    optionBEn: "Mahispal Dynasty, Bar Singh",
    optionBNe: "महिषपाल वंश, बरसिंह",
    optionCEn: "Kirat Dynasty, Yalambar",
    optionCNe: "किराँत वंश, यलम्बर",
    optionDEn: "Lichchhavi Dynasty, Supushpa",
    optionDNe: "लिच्छवि वंश, सुपुष्प",
    correctOption: "A",
    explanationEn:
      "The Gopal Dynasty (cowherds) was the earliest recorded dynasty to rule the Kathmandu Valley, with Bhuktaman (Bhuktamana / Dharma Gopa) as its founding monarch.",
    explanationNe:
      "नेपालको उपत्यकामा शासन गर्ने प्रथम वंश गोपाल वंश (गाई पाल्ने) हो र यसका प्रथम राजा भुक्तमान (गुप्त) हुन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Koshi Province (2073-2078)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2073, Koshi Province 2078",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which famous Lichchhavi ruler adopted the dual titles 'Yuvarajadhiraj' and 'Mahasamanta' and authored the treatise 'Shabdavidya'?",
    questionNe:
      "लिच्छविकालमा 'युवराजाधिराज' र 'महासामन्त' को पदवी धारण गर्ने प्रसिद्ध शासक को हुन्?",
    optionAEn: "Mandev",
    optionANe: "मानदेव",
    optionBEn: "Amshuverma",
    optionBNe: "अंशुवर्मा",
    optionCEn: "Narendra Dev",
    optionCNe: "नरेन्द्र देव",
    optionDEn: "Jishnu Gupta",
    optionDNe: "जिष्णुगुप्त",
    correctOption: "B",
    explanationEn:
      "King Amshuverma (reign 662–678 BS / 605–621 AD) established Kailashkut Bhawan, initiated the title 'Mahasamanta' & 'Yuvarajadhiraj', and authored the Sanskrit grammar treatise 'Shabdavidya'.",
    explanationNe:
      "अंशुवर्मा (वि.सं. ६६२-६७८) ले कैलाशकूट भवन निर्माण गरी शब्दविद्या नामक व्याकरण ग्रन्थ रचना गरे र युवराजाधिराज घोषणा गर्ने प्रथा बसालेका थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Bagmati Province (2074-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2074, Bagmati Province 2079",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "During the reign of which Malla king was the iconic three-storied pavilion 'Kasthamandap' (Maru Satta) constructed from a single sal tree?",
    questionNe:
      "नेपालको इतिहासमा 'काष्ठमण्डप' (मरु सत्तल) को निर्माण कसको पालामा भएको मानिन्छ?",
    optionAEn: "Gunakamadev",
    optionANe: "गुणकामदेव",
    optionBEn: "Laxminarsingh Malla",
    optionBNe: "लक्ष्मीनरसिंह मल्ल",
    optionCEn: "Ratna Malla",
    optionCNe: "रत्न मल्ल",
    optionDEn: "Pratap Malla",
    optionDNe: "प्रताप मल्ल",
    correctOption: "B",
    explanationEn:
      "Kasthamandap (Maru Satta) was built in the early 16th century during the reign of King Laxminarsingh Malla by an artisan named Bisayet using the timber of a single sal tree, giving Kathmandu its name.",
    explanationNe:
      "काष्ठमण्डपको निर्माण मल्ल राजा लक्ष्मीनरसिंह मल्लको पालामा बिसारत नामका व्यक्तिले एउटै रुखको काठबाट बनाएको जनविश्वास रहिआएको छ, जसबाट काठमाडौं शहरको नामकरण भएको हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Gandaki Province (2075-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2075, Gandaki PPSC 2080",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "On which date was the historic Treaty of Sugauli between the Kingdom of Nepal and the British East India Company ratified and exchanged?",
    questionNe:
      "नेपाल र इस्ट इन्डिया कम्पनीबीच सुगौली सन्धि कहिले प्रमाणीकरण (Ratified) भएको थियो?",
    optionAEn: "2 December 1815 AD",
    optionANe: "सन् १८१५ डिसेम्बर २",
    optionBEn: "4 March 1816 AD",
    optionBNe: "सन् १८१६ मार्च ४",
    optionCEn: "1 November 1815 AD",
    optionCNe: "सन् १८१५ नोभेम्बर १",
    optionDEn: "25 December 1816 AD",
    optionDNe: "सन् १८१६ डिसेम्बर २५",
    correctOption: "B",
    explanationEn:
      "The Sugauli Treaty was drafted on 2 December 1815 and officially ratified and exchanged on 4 March 1816 AD, concluding the Anglo-Nepalese War and fixing Nepal's Mechi-Mahakali boundaries.",
    explanationNe:
      "सुगौली सन्धि १८१५ डिसेम्बर २ मा हस्ताक्षर भए तापनि सन् १८१६ मार्च ४ मा दुवै पक्षबाट प्रमाणीकरण आदानप्रदान भई लागू भएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Lumbini Province (2073-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2073, Lumbini PPSC 2080",
    isImportant: true,
  },
  {
    topicSlug: "political-history",
    questionEn:
      "On which exact date did the Kot Parva (Kot Massacre) occur, marking the rise of Jung Bahadur Kunwar and the establishment of the 104-year Rana oligarchy?",
    questionNe:
      "नेपालमा १०४ वर्षे राणा शासनको स्थापना गर्ने 'कोतपर्व' कहिले भएको थियो?",
    optionAEn: "1903 Ashoj 2 BS",
    optionANe: "वि.सं. १९०३ असोज २",
    optionBEn: "1903 Bhadra 31 BS",
    optionBNe: "वि.सं. १९०३ भदौ ३१",
    optionCEn: "1903 Kartik 12 BS",
    optionCNe: "वि.सं. १९०३ कात्तिक १२",
    optionDEn: "1904 Baisakh 1 BS",
    optionDNe: "वि.सं. १९०४ वैशाख १",
    correctOption: "A",
    explanationEn:
      "The Kot Massacre took place on the night of 1903 Ashoj 2 BS (14 September 1846 AD) inside the Hanuman Dhoka Kot courtyard following the murder of General Gagan Singh, catapulting Jung Bahadur Rana to power as Prime Minister.",
    explanationNe:
      "गगन सिंहको हत्यापछि रानी राज्यलक्ष्मीले भारदारहरूलाई बोलाएको कोतमा वि.सं. १९०३ असोज २ गते राति कोतपर्व भएको थियो, जसबाट जङ्गबहादुरले १०४ वर्षे जहानियाँ राणा शासनको जग बसाले।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Sudurpashchim (2076-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2076, Sudurpashchim 2081",
    isImportant: true,
  },
  {
    topicSlug: "political-history",
    questionEn:
      "Who was the first democratically elected Prime Minister of Nepal and in which year were Nepal's first parliamentary general elections conducted?",
    questionNe:
      "नेपालको पहिलो निर्वाचित प्रधानमन्त्री को हुन् र आमनिर्वाचन कहिले भएको थियो?",
    optionAEn: "Matrika Prasad Koirala, 2007 BS",
    optionANe: "मातृकाप्रसाद कोइराला, २००७",
    optionBEn: "Bishweshwar Prasad Koirala (BP Koirala), 2015 BS",
    optionBNe: "विश्वेश्वरप्रसाद कोइराला, २०१५",
    optionCEn: "Tanka Prasad Acharya, 2012 BS",
    optionCNe: "टङ्कप्रसाद आचार्य, २०१२",
    optionDEn: "Subarna Shumsher, 2014 BS",
    optionDNe: "सुवर्ण शमशेर, २०१४",
    correctOption: "B",
    explanationEn:
      "Nepal's first general parliamentary elections commenced on 2015 Falgun 7 BS. The Nepali Congress won 74 out of 109 seats, and BP Koirala took oath as the first elected Prime Minister on 2016 Ashar 16 BS.",
    explanationNe:
      "नेपालको पहिलो आमनिर्वाचन २०१५ साल फागुन ७ गतेदेखि सुरु भएको थियो र अत्यधिक बहुमत हासिल गरी बी.पी. कोइराला २०१६ सालमा प्रथम जननिर्वाचित प्रधानमन्त्री बनेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Madhesh Province (2076-2079)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2076, Madhesh Province 2079",
    isImportant: true,
  },
  {
    topicSlug: "political-history",
    questionEn:
      "Who was appointed Prime Minister of the coalition interim government formed after the historic Revolution of 2007 BS (1951 AD)?",
    questionNe:
      "२००७ सालको क्रान्तिपछि गठित अन्तरिम सरकारका प्रधानमन्त्री को थिए?",
    optionAEn: "BP Koirala",
    optionANe: "बी.पी. कोइराला",
    optionBEn: "Mohan Shumsher",
    optionBNe: "मोहन शमशेर",
    optionCEn: "Matrika Prasad Koirala",
    optionCNe: "मातृकाप्रसाद कोइराला",
    optionDEn: "Keshar Shumsher",
    optionDNe: "केशर शमशेर",
    correctOption: "B",
    explanationEn:
      "Following the Delhi Accord and King Tribhuvan's proclamation on 2007 Falgun 7 BS, a 10-member joint cabinet (5 Ranas and 5 Nepali Congress members) was formed under Prime Minister Mohan Shumsher Jang Bahadur Rana.",
    explanationNe:
      "२००७ साल फागुन ७ गते प्रजातन्त्र घोषणा भएपछि दिल्ली सम्झौता अनुसार गठित १० सदस्यीय राणा-कांग्रेस संयुक्त मन्त्रिमण्डलका प्रधानमन्त्री मोहन शमशेर जबरा थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Karnali Province (2074-2080)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2074, Karnali Province 2080",
    isImportant: true,
  },
  {
    topicSlug: "political-history",
    questionEn:
      "On which date was Nepal formally declared a Federal Democratic Republic by the first meeting of the Constituent Assembly?",
    questionNe:
      "नेपाललाई कहिले सङ्घीय लोकतान्त्रिक गणतन्त्रात्मक राज्य घोषणा गरिएको हो?",
    optionAEn: "2063 Baisakh 11 BS",
    optionANe: "वि.सं. २०६३ वैशाख ११",
    optionBEn: "2065 Jestha 15 BS",
    optionBNe: "वि.सं. २०६५ जेठ १५",
    optionCEn: "2062 Mangsir 12 BS",
    optionCNe: "वि.सं. २०६२ मङ्aggregate",
    optionDEn: "2072 Ashoj 3 BS",
    optionDNe: "वि.सं. २०७२ असोज ३",
    correctOption: "B",
    explanationEn:
      "The first session of the Constituent Assembly abolished the 240-year-old Shah monarchy and proclaimed Nepal a Federal Democratic Republic on 2065 Jestha 15 BS (28 May 2008 AD).",
    explanationNe:
      "पहिलो संविधान सभाको पहिलो ऐतिहासिक बैठकले २०६५ साल जेठ १५ गते २४० वर्षे राजतन्त्र अन्त्य गरी नेपाललाई सङ्घीय लोकतान्त्रिक गणतन्त्र घोषणा गरेको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Bagmati Province (2075-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Officer 2075, Bagmati Province 2081",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who was the brave Gorkhali commander who commanded the Fort of Nalapani (Khalanga) with unparalleled heroism against British forces during the Anglo-Nepal War (1814)?",
    questionNe:
      "नालापानीको युद्धमा ब्रिटिस फौज विरुद्ध लड्ने नेपाली वीर कप्तान को हुन्?",
    optionAEn: "Amar Singh Thapa",
    optionANe: "अमरसिंह थापा",
    optionBEn: "Balbhadra Kunwar",
    optionBNe: "बलभद्र कुँवर",
    optionCEn: "Bhakti Thapa",
    optionCNe: "भक्ति थापा",
    optionDEn: "Ujir Singh Thapa",
    optionDNe: "उजिरसिंह थापा",
    correctOption: "B",
    explanationEn:
      "Captain Balbhadra Kunwar commanded 600 soldiers (including women and children) in the Nalapani (Dehradun) fort, withstanding heavy bombardment and siege by thousands of British soldiers under Major-General Rollo Gillespie in October–November 1814.",
    explanationNe:
      "नालापानी (खलङ्गा) को युद्धमा कप्तान बलभद्र कुँवरको नेतृत्वमा नेपाली फौज (महिला र बालबालिकासहित करिब ६०० जना) ले ब्रिटिस सेना विरुद्ध अद्वितीय बहादुरी देखाएका थिए, जसको प्रशंसा स्वयं अङ्ग्रेजहरूले शिलापत्रमा गरेका छन्।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2075-2081)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Kharidar 2075, Gandaki PPSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which Malla king introduced standard silver coins known as 'Mahendramalli' in the Kathmandu Valley?",
    questionNe:
      "नेपालको इतिहासमा 'चाँदीको मोहर' (महेन्द्रमल्ली) चलाउने मल्ल राजा को हुन्?",
    optionAEn: "Mahendra Malla",
    optionANe: "महेन्द्र मल्ल",
    optionBEn: "Jayasthiti Malla",
    optionBNe: "जयस्थिति मल्ल",
    optionCEn: "Pratap Malla",
    optionCNe: "प्रताप मल्ल",
    optionDEn: "Yaksha Malla",
    optionDNe: "यक्ष मल्ल",
    correctOption: "A",
    explanationEn:
      "King Mahendra Malla of Kantipur introduced the famous silver coins called 'Mahendramalli', which circulated widely in Nepal and Tibet for trade.",
    explanationNe:
      "कान्तिपुरका राजा महेन्द्र मल्लले चाँदीको मुद्रा 'महेन्द्रमल्ली' प्रचलनमा ल्याएका थिए, जुन नेपाल र तिब्बतबीचको व्यापारमा प्रख्यात थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Koshi Province (2078-2082)",
    isPreviousYear: true,
    previousYearInfo: "Federal PSC Na.Su. 2078, Koshi Province 2082",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which is considered the first authentic written historical inscription discovered in Nepal?",
    questionNe:
      "नेपालको पहिलो प्रामाणिक अभिलेख कसको मानिन्छ?",
    optionAEn: "King Mandev's Changu Narayan Inscription (521 BS)",
    optionANe: "राजा मानदेव (चाँगुनारायणको अभिलेख)",
    optionBEn: "Amshuverma's Hadigaun Inscription",
    optionBNe: "अंशुवर्मा (हाँडीगाउँको अभिलेख)",
    optionCEn: "Basantadev's Balambu Inscription",
    optionCNe: "बसन्तदेव (बलम्बुको अभिलेख)",
    optionDEn: "Shivadev I Inscription",
    optionDNe: "शिवदेव प्रथम",
    correctOption: "A",
    explanationEn:
      "The stone pillar inscription erected by Lichchhavi King Mandev at the Changu Narayan temple in Samvat 386 (521 BS / 464 AD) written in Classical Sanskrit is recognized as Nepal's first authentic dated historical record.",
    explanationNe:
      "वि.सं. ५२१ (ई.सं. ४६४) मा लिच्छवि राजा मानदेवले चाँगुनारायणमा राखेको संस्कृत भाषाको गरुडध्वज स्तम्भ अभिलेख नेपालको इतिहासको पहिलो प्रामाणिक अभिलेख मानिन्छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Bagmati Province (2073-2083)",
    isPreviousYear: true,
    previousYearInfo: "Bagmati PPSC Na.Su. 2073, Federal PSC 2081",
    isImportant: true,
  },
  {
    topicSlug: "political-history",
    questionEn:
      "When and under whose leadership was 'Nepal Praja Parishad', the country's first organized political party, established against the Rana regime?",
    questionNe:
      "नेपालमा 'प्रजापरिषद्' को स्थापना कहिले र कसको अध्यक्षतामा भएको थियो?",
    optionAEn: "1993 Jestha 20 BS, Tanka Prasad Acharya",
    optionANe: "वि.सं. १९९३ जेठ २०, टङ्कप्रसाद आचार्य",
    optionBEn: "1997 BS, Dharma Bhakta Mathema",
    optionBNe: "वि.सं. १९९७, धर्मभक्त माथेमा",
    optionCEn: "2003 BS, BP Koirala",
    optionCNe: "वि.सं. २००३, बी.पी. कोइराला",
    optionDEn: "1988 BS, Shukraraj Shastri",
    optionDNe: "वि.सं. १९८८, शुक्रराज शास्त्री",
    correctOption: "A",
    explanationEn:
      "Nepal Praja Parishad was founded in secret on 1993 Jestha 20 BS (1936 AD) at the residence of Dharma Bhakta Mathema in Om Bahal, Kathmandu, under the presidency of Tanka Prasad Acharya.",
    explanationNe:
      "राणा शासन विरुद्ध लड्न नेपालको पहिलो राजनीतिक दल 'प्रजापरिषद्' को स्थापना वि.सं. १९९३ साल जेठ २० गते टङ्कप्रसाद आचार्यको अध्यक्षतामा ओमबहालमा भएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Gandaki Province (2074-2083)",
    isPreviousYear: true,
    previousYearInfo: "Gandaki PPSC Kharidar 2074, Federal PSC 2079",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "On which date did Prithvi Narayan Shah's Gorkhali forces finally conquer the hill fort of Kirtipur on their third attempt?",
    questionNe:
      "काठमाडौं उपत्यकाको एकीकरण अभियानमा कीर्तिपुरमाथि विजय कहिले हासिल भएको थियो?",
    optionAEn: "1822 Chaitra 3 BS",
    optionANe: "वि.सं. १८२२ चैत ३",
    optionBEn: "1821 Baisakh 15 BS",
    optionBNe: "वि.सं. १८२१",
    optionCEn: "1825 Ashoj 13 BS",
    optionCNe: "वि.सं. १८२५ असोज १३",
    optionDEn: "1826 BS",
    optionDNe: "वि.सं. १८२६",
    correctOption: "A",
    explanationEn:
      "After two unsuccessful assaults where Gorkhali commanders Kalu Pande was killed (1814 BS) and Surpratap Shah lost an eye (1821 BS), Kirtipur fell to Gorkhali forces on their third attempt on 1822 Chaitra 3 BS.",
    explanationNe:
      "पृथ्वीनारायण शाहको फौजले दुई पटकको पराजयपछि तेस्रो प्रयासमा वि.सं. १८२२ चैत ३ गते कीर्तिपुरमाथि विजय हासिल गरेको थियो।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fifth Level / Lumbini Province (2075-2083)",
    isPreviousYear: true,
    previousYearInfo: "Lumbini 5th Level 2075, Bagmati Province 2083",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "In which year was the abolition of slavery (Das Pratha Unmulan) formally proclaimed in Nepal by Prime Minister Chandra Shumsher?",
    questionNe:
      "नेपालमा 'दास प्रथा' को उन्मुलन कहिले भएको थियो?",
    optionAEn: "1981 BS (Chandra Shumsher)",
    optionANe: "वि.सं. १९८१ (चन्द्र शमशेर)",
    optionBEn: "1960 BS",
    optionBNe: "वि.सं. १९६०",
    optionCEn: "2007 BS",
    optionCNe: "वि.सं. २००७",
    optionDEn: "1990 BS",
    optionDNe: "वि.सं. १९९०",
    correctOption: "A",
    explanationEn:
      "Rana Prime Minister Chandra Shumsher delivered a landmark speech at Tundikhel on 1981 Mangsir 14 BS announcing the liberation of over 59,000 slaves, and slavery officially ended on 1981 Baisakh 1 BS (April 1925 AD) using treasury compensation funds.",
    explanationNe:
      "प्रधानमन्त्री चन्द्र शमशेरले वि.सं. १९८१ मङ्सिरमा घोषणा गरी पशुपतिनाथको गुठी कोषबाट क्षतिपूर्ति दिएर वि.सं. १९८१ बाट नेपालमा दास प्रथाको पूर्ण उन्मूलन गरेका थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Fourth Level / Karnali Province (2076-2083)",
    isPreviousYear: true,
    previousYearInfo: "Karnali 4th Level 2076, Federal PSC 2082",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Into how many sovereign principalities was the Kathmandu Valley divided among the sons and daughter of King Yaksha Malla following his demise in 1538 BS?",
    questionNe:
      "मल्लकालमा राजा यक्ष मल्लको निधनपछि उपत्यकालाई कति वटा राज्यमा विभाजित गरिएको थियो?",
    optionAEn: "3 kingdoms (Kantipur, Patan, Bhaktapur)",
    optionANe: "३ वटा (कान्तिपुर, पाटन, भक्तपुर)",
    optionBEn: "4 kingdoms",
    optionBNe: "४ वटा",
    optionCEn: "2 kingdoms",
    optionCNe: "२ वटा",
    optionDEn: "5 kingdoms",
    optionDNe: "५ वटा",
    correctOption: "A",
    explanationEn:
      "After the death of King Yaksha Malla in 1482 AD (1538 BS), the Kathmandu Valley was partitioned into three independent Malla kingdoms: Kantipur (Kathmandu), Lalitpur (Patan), and Bhadgaon (Bhaktapur).",
    explanationNe:
      "राजा यक्ष मल्लको निधनपछि काठमाडौं उपत्यकालाई कान्तिपुर (काठमाडौं), पाटन (ललितपुर) र भादगाउँ (भक्तपुर) गरी ३ वटा स्वतन्त्र राज्यमा विभाजन गरिएको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Sudurpashchim (2077-2083)",
    isPreviousYear: true,
    previousYearInfo: "Sudurpashchim Officer 2077, Koshi Province 2083",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which last Mahispal (Abhir Dynasty) king was defeated by Kirat leader Yalambar to establish Kirat rule in ancient Nepal?",
    questionNe:
      "किराँत वंशका प्रथम राजा यलम्बरले कसलाई पराजित गरी काठमाडौं उपत्यकामा किराँत शासन सुरु गरेका थिए?",
    optionAEn: "King Bhuwan Singh (Mahispal Dynasty)",
    optionANe: "महिषपाल (आभिर) वंशका भुवन सिंह",
    optionBEn: "Bhuktaman (Gopal Dynasty)",
    optionBNe: "गोपाल वंशका भुक्तमान",
    optionCEn: "Supushpa (Lichchhavi)",
    optionCNe: "सुपुष्प",
    optionDEn: "Bar Singh",
    optionDNe: "बरसिंह",
    correctOption: "A",
    explanationEn:
      "Kirat chief Yalambar defeated King Bhuwan Singh (the 3rd and last ruler of the Mahispal/Abhir dynasty) to establish the ancient Kirat Dynasty in Kathmandu Valley.",
    explanationNe:
      "किराँत वंशका प्रथम राजा यलम्बरले महिषपाल (आभिर) वंशका अन्तिम राजा भुवन सिंहलाई युद्धमा पराजित गरी काठमाडौं उपत्यकामा किराँत शासनको जग बसालेका थिए।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Model Practice Question (History of Nepal)",
    isPreviousYear: true,
    previousYearInfo: "Loksewa PSC Model Practice (History)",
    isImportant: true,
  },
];
