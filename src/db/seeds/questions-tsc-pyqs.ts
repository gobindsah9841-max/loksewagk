import { QuestionSeed } from "./questions-gk";

/**
 * Authentic Nepal Public Service Commission (PSC), Teacher Service Commission (TSC),
 * APF, Police, and Provincial PPSC past paper examination questions parsed and categorized
 * from the official past questions compilation (tsc 1st paper pyqs.pdf).
 */
export const TSC_PYQ_QUESTION_SEEDS: QuestionSeed[] = [
  // ==========================================
  // SECTION 1: DAILY GK CHALLENGE & CONTEMPORARY GK
  // ==========================================
  {
    topicSlug: "national-parks-and-conservation-areas",
    questionEn:
      "What percentage of Nepal's total land area is occupied by protected areas (national parks, wildlife reserves, and conservation areas)?",
    questionNe:
      "संरक्षित क्षेत्रले नेपालको कति प्रतिशत क्षेत्रफल ओगटेको छ?",
    optionAEn: "21.6%",
    optionANe: "२१.६%",
    optionBEn: "22.8%",
    optionBNe: "२२.८%",
    optionCEn: "23.4%",
    optionCNe: "२३.४%",
    optionDEn: "24.9%",
    optionDNe: "२४.९%",
    correctOption: "C",
    explanationEn:
      "Nepal's network of 12 national parks, 1 wildlife reserve, 1 hunting reserve, and 6 conservation areas covers approximately 23.39% (~23.4%) of the country's total land area.",
    explanationNe:
      "नेपालका १२ राष्ट्रिय निकुञ्ज, १ वन्यजन्तु आरक्ष, १ शिकार आरक्ष र ६ संरक्षण क्षेत्र गरी कुल संरक्षित क्षेत्रले नेपालको करिब २३.४ प्रतिशत भूभाग ओगटेको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Daily GK Challenge Day 39 / TSC 2081",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "currencies",
    questionEn:
      "Which was the last European country to formally adopt the Euro currency?",
    questionNe:
      "युरोपियन करेन्सी (Euro Currency) प्रयोग गर्ने पछिल्लो राष्ट्र कुन हो?",
    optionAEn: "Bulgaria",
    optionANe: "बुल्गेरिया",
    optionBEn: "Luxembourg",
    optionBNe: "लक्जम्बर्ग",
    optionCEn: "Croatia",
    optionCNe: "क्रोएसिया",
    optionDEn: "Cyprus",
    optionDNe: "साइप्रस",
    correctOption: "A",
    explanationEn:
      "Bulgaria completed accession requirements to join the Eurozone as the latest entrant following Croatia (which officially adopted it on January 1, 2023).",
    explanationNe:
      "क्रोएसियाले १ जनवरी २०२३ बाट युरो लागु गरेपछि बुल्गेरियाले युरो अपनाउने पछिल्लो प्रक्रिया पूरा गरेको हो।",
    difficulty: "hard",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Daily GK Challenge Day 39",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "culture-festivals-and-traditions",
    questionEn:
      "In which indigenous community of Nepal is the 'Satahi Bibaha' (Exchange Marriage) tradition practiced?",
    questionNe:
      "सटही विवाह कुन जातिमा प्रचलित रहेको छ?",
    optionAEn: "Bankariya caste",
    optionANe: "बनकरिया जाति",
    optionBEn: "Raji caste",
    optionBNe: "राजी जाति",
    optionCEn: "Rajbanshi caste",
    optionCNe: "राजवंशी जाति",
    optionDEn: "Jhangad caste",
    optionDNe: "झाङ्गड़ जाति",
    correctOption: "B",
    explanationEn:
      "In the endangered Raji indigenous community residing predominantly in Surkhet and Dang, marriage by exchange of brides (Satahi Bibaha) is traditionally practiced.",
    explanationNe:
      "दाङ र सुर्खेतमा बसोबास गर्ने लोपोन्मुख राजी समुदायमा दाजुबहिनी साटासाट गरी गरिने सटही विवाहको प्रचलन रहेको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Daily GK Challenge Day 39 / Nayab Subba",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "international-organizations",
    questionEn:
      "How many regional member countries are there in ICIMOD (International Centre for Integrated Mountain Development)?",
    questionNe:
      "ICIMOD का सदस्य राष्ट्रहरू कति वटा रहेका छन्?",
    optionAEn: "5 countries",
    optionANe: "५ वटा",
    optionBEn: "6 countries",
    optionBNe: "६ वटा",
    optionCEn: "7 countries",
    optionCNe: "७ वटा",
    optionDEn: "8 countries",
    optionDNe: "८ वटा",
    correctOption: "D",
    explanationEn:
      "Headquartered in Lalitpur, Nepal, ICIMOD comprises 8 regional member countries: Afghanistan, Bangladesh, Bhutan, China, India, Myanmar, Nepal, and Pakistan.",
    explanationNe:
      "ललितपुरको खुमलटारमा मुख्यालय रहेको इसिमोड (ICIMOD) मा हिन्दूकुश हिमालय क्षेत्रका ८ वटा राष्ट्रहरू (नेपाल, भारत, चीन, भुटान, पाकिस्तान, अफगानिस्तान, बंगलादेश र म्यानमार) सदस्य छन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Daily GK Challenge Day 39",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "According to the Economic Survey, how many public enterprises (PEs) in Nepal are currently operating at a net profit?",
    questionNe:
      "नेपालको आर्थिक सर्वेक्षण अनुसार कति वटा सार्वजनिक संस्थानहरू नाफामा रहेका छन्?",
    optionAEn: "26 PEs",
    optionANe: "२६ वटा",
    optionBEn: "27 PEs",
    optionBNe: "२७ वटा",
    optionCEn: "29 PEs",
    optionCNe: "२९ वटा",
    optionDEn: "30 PEs",
    optionDNe: "३० वटा",
    correctOption: "B",
    explanationEn:
      "Out of 44 public enterprises evaluated in Nepal, 27 are operating in net profit, while the remainder suffer net losses or are defunct.",
    explanationNe:
      "नेपालका अस्तित्वमा रहेका ४४ सार्वजनिक संस्थानहरूमध्ये २७ वटा संस्थान नाफामा सञ्चालित रहेका छन्।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "Economic Survey / Daily GK Challenge",
    isImportant: true,
    isDailyChallenge: true,
  },
  {
    topicSlug: "rivers-and-lakes",
    questionEn:
      "What is the name of the river that originates directly from Shey Phoksundo Lake in Dolpa?",
    questionNe:
      "शे-फोक्सुण्डो राष्ट्रिय निकुञ्जमा रहेको फोक्सुण्डो तालबाट उत्पत्ति भएको खोलाको नाम के हो?",
    optionAEn: "Suligad Khola",
    optionANe: "सुलिगड खोला",
    optionBEn: "Khatyad Khola",
    optionBNe: "खत्याड खोला",
    optionCEn: "Khaste Khola",
    optionCNe: "खास्टे खोला",
    optionDEn: "Naina Khola",
    optionDNe: "नैना खोला",
    correctOption: "A",
    explanationEn:
      "The outlet stream flowing out of Shey Phoksundo Lake is Suligad Khola, which forms the famous Phoksundo waterfall (one of Nepal's highest waterfalls). In contrast, Khatyad Khola originates from Rara Lake.",
    explanationNe:
      "फोक्सुण्डो तालबाट सुलिगड खोला उत्पत्ति हुन्छ जसले नेपालको प्रसिद्ध सुलिगड (छर्का) झरना बनाउँछ। रारा तालबाट खत्याड खोला निस्कन्छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / TSC",
    isPreviousYear: true,
    previousYearInfo: "Daily GK Challenge Day 39 / Kharidar",
    isImportant: true,
    isDailyChallenge: true,
  },

  // ==========================================
  // SECTION 2: CONSTITUTION & NATIONAL HERITAGE
  // ==========================================
  {
    topicSlug: "fundamental-rights",
    questionEn:
      "Which Article of the Constitution of Nepal (2072) guarantees the 'Right to Information' (सूचनाको हक)?",
    questionNe:
      "नेपालको संविधानको कुन धारामा सूचनाको हक सम्बन्धी व्यवस्था गरिएको छ?",
    optionAEn: "Article 26",
    optionANe: "धारा २६",
    optionBEn: "Article 27",
    optionBNe: "धारा २७",
    optionCEn: "Article 28",
    optionCNe: "धारा २८",
    optionDEn: "Article 29",
    optionDNe: "धारा २९",
    correctOption: "B",
    explanationEn:
      "Article 27 of the Constitution guarantees that every citizen shall have the right to demand and receive information on any matter of his or her interest or of public interest. Article 26 is Freedom of Religion, 28 is Right to Privacy, and 29 is Right against Exploitation.",
    explanationNe:
      "नेपालको संविधानको धारा २७ मा प्रत्येक नागरिकलाई आफ्नो वा सार्वजनिक सरोकारको कुनै पनि विषयको सूचना माग्ने र पाउने हक हुनेछ भनी सूचनाको हकको व्यवस्था गरिएको छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "Probable Questions 2081 / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "culture-festivals-and-traditions",
    questionEn:
      "In which district of Nepal is the traditional 'Ghodabheda Pratha' (घोडाभेडा प्रथा) practiced?",
    questionNe:
      "घोडाभेडा प्रथा नेपालको कुन जिल्लामा प्रचलित रहेको छ?",
    optionAEn: "Mugu",
    optionANe: "मुगु",
    optionBEn: "Dailekh",
    optionBNe: "दैलेख",
    optionCEn: "Achham",
    optionCNe: "अछाम",
    optionDEn: "Bajura",
    optionDNe: "बाजुरा",
    correctOption: "A",
    explanationEn:
      "Ghodabheda Pratha is a distinctive customary socio-cultural practice found primarily in Mugu district in Karnali Province.",
    explanationNe:
      "कर्णाली प्रदेशको दुर्गम हिमाली जिल्ला मुगुमा घोडाभेडा प्रथा परम्परागत रूपमा प्रचलित रहेको छ।",
    difficulty: "hard",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "Secondary Teacher / Officer",
    isPreviousYear: true,
    previousYearInfo: "Probable Questions 2081 / TSC",
    isImportant: true,
  },
  {
    topicSlug: "sports-and-tournaments",
    questionEn:
      "Who won the Golden Boot Award as the top goal scorer in the FIFA World Cup 2022?",
    questionNe:
      "फिफा विश्वकप २०२२ को गोल्डेन बुट अवार्ड (Golden Boot Award) जित्ने खेलाडी को हुन्?",
    optionAEn: "Lionel Messi",
    optionANe: "लियोनल मेस्सी",
    optionBEn: "Kylian Mbappé",
    optionBNe: "किलियन एम्बाप्पे",
    optionCEn: "Rodrigo",
    optionCNe: "रोड्रीगो",
    optionDEn: "Unai Simón",
    optionDNe: "उनाई सिमोन",
    correctOption: "B",
    explanationEn:
      "France's Kylian Mbappé won the 2022 FIFA World Cup Golden Boot by scoring 8 goals, including a memorable hat-trick in the final match.",
    explanationNe:
      "फ्रान्सका स्टार खेलाडी किलियन एम्बाप्पेले २०२२ को कतार विश्वकपमा सर्वाधिक ८ गोल गर्दै गोल्डेन बुट प्राप्त गरेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Loksewa General Knowledge 2080/81",
    isImportant: true,
  },
  {
    topicSlug: "heritage-sites",
    questionEn:
      "In which year was Chitwan National Park inscribed on the UNESCO World Natural Heritage List?",
    questionNe:
      "चितवन राष्ट्रिय निकुञ्ज विश्व सम्पदा सूचीमा कहिले सूचीकृत भएको थियो?",
    optionAEn: "1979 AD",
    optionANe: "सन् १९७९",
    optionBEn: "1984 AD",
    optionBNe: "सन् १९८४",
    optionCEn: "1992 AD",
    optionCNe: "सन् १९९२",
    optionDEn: "1997 AD",
    optionDNe: "सन् १९९७",
    correctOption: "B",
    explanationEn:
      "Chitwan National Park was inscribed as Nepal's first Natural World Heritage Site in 1984 AD. Sagarmatha National Park was inscribed earlier in 1979 AD.",
    explanationNe:
      "चितवन राष्ट्रिय निकुञ्जलाई सन् १९८४ मा युनेस्कोले प्राकृतिक विश्व सम्पदा सूचीमा सूचीकृत गरेको थियो। सगरमाथा राष्ट्रिय निकुञ्ज सन् १९७९ मा सूचीकृत भएको थियो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Nayab Subba",
    isPreviousYear: true,
    previousYearInfo: "TSC LSL / Loksewa 2080",
    isImportant: true,
  },
  {
    topicSlug: "const-constitution-of-nepal",
    questionEn:
      "On which date was Nepal historically declared a 'Secular State' (धर्मनिरपेक्ष राष्ट्र) by the reinstated House of Representatives?",
    questionNe:
      "पुनःस्थापित प्रतिनिधि सभाद्वारा नेपाललाई धर्मनिरपेक्ष राष्ट्र कहिले घोषणा गरियो?",
    optionAEn: "Jestha 4, 2063 BS",
    optionANe: "२०६३ जेठ ४",
    optionBEn: "Jestha 15, 2063 BS",
    optionBNe: "२०६३ जेठ १५",
    optionCEn: "Jestha 4, 2064 BS",
    optionCNe: "२०६४ जेठ ४",
    optionDEn: "Jestha 15, 2064 BS",
    optionDNe: "२०६४ जेठ १५",
    correctOption: "A",
    explanationEn:
      "On Jestha 4, 2063 BS (May 18, 2006), the reinstated Parliament passed the historic Declaration declaring Nepal a secular country and curtailing the monarch's powers.",
    explanationNe:
      "ऐतिहासिक प्रतिनिधि सभाको घोषणा मार्फत वि.सं. २०६३ जेठ ४ गते नेपाललाई विधिवत धर्मनिरपेक्ष राष्ट्र घोषणा गरिएको थियो। जेठ १५, २०६५ मा गणतन्त्र घोषणा भएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "Loksewa Officer / Nayab Subba",
    isImportant: true,
  },
  {
    topicSlug: "culture-festivals-and-traditions",
    questionEn:
      "Which was the first color feature film made in Nepal?",
    questionNe:
      "नेपालमा बनेको प्रथम रंगीन चलचित्र कुन हो?",
    optionAEn: "Maitighar",
    optionANe: "माईतीघर",
    optionBEn: "Kumari",
    optionBNe: "कुमारी",
    optionCEn: "Sindur",
    optionCNe: "सिन्दुर",
    optionDEn: "Kusume Rumal",
    optionDNe: "कुसुमे रुमाल",
    correctOption: "B",
    explanationEn:
      "Produced in 2039 BS and directed by Prem Bahadur Basnet, 'Kumari' was Nepal's first color feature film. 'Satya Harishchandra' was first Nepali film (made in India), and 'Aama' was first film produced within Nepal (black and white).",
    explanationNe:
      "वि.सं. २०३९ मा प्रेमबहादुर बस्नेतको निर्देशनमा बनेको 'कुमारी' नेपालको पहिलो रंगीन चलचित्र हो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Kharidar / TSC Pra.Sa.",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who introduced the royal tradition of displaying the sacred jewel-studded vest (Bhoto Jatra) of Rato Machhindranath in Jawalakhel?",
    questionNe:
      "रातो मच्छिन्द्रनाथको भोटो देखाउने जात्रा (भोटो जात्रा) को चलन चलाउने राजा को हुन्?",
    optionAEn: "Narendra Dev",
    optionANe: "नरेन्द्रदेव",
    optionBEn: "Varadev",
    optionBNe: "वरदेव",
    optionCEn: "Gunakamdev",
    optionCNe: "गुणकामदेव",
    optionDEn: "Prachanda Dev",
    optionDNe: "प्रचण्डदेव",
    correctOption: "A",
    explanationEn:
      "Lichchhavi King Narendra Dev, along with Tantrik Bandhudatta Acharya, brought Rato Machhindranath from Kamarupa (Assam) and instituted the annual chariot festival and Bhoto Jatra.",
    explanationNe:
      "लिच्छविकालिन राजा नरेन्द्रदेवले बन्धुदत्त आचार्य र रथचक्रको सहयोगमा आसामको कामरुप कामाख्याबाट मच्छिन्द्रनाथलाई ल्याएर रथयात्रा र भोटो जात्राको परम्परा बसालेका थिए।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC Pra.Sa. / Secondary Teacher",
    isPreviousYear: true,
    previousYearInfo: "Koshi Sahayak Ma.Vi.Ni. 2080 / TSC",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "What is Nepal's rank on the Sustainable Development Report (SDG Index)?",
    questionNe:
      "दिगो विकास सूचकांक (SDG Index) मा नेपाल कति औं स्थानमा रहेको छ?",
    optionAEn: "76th",
    optionANe: "७६ औं",
    optionBEn: "87th",
    optionBNe: "८७ औं",
    optionCEn: "90th",
    optionCNe: "९० औं",
    optionDEn: "92nd",
    optionDNe: "९२ औं",
    correctOption: "C",
    explanationEn:
      "In the Sustainable Development Report ranking countries on their progress toward the 17 UN SDGs, Nepal ranks 90th globally with a score above 66.5.",
    explanationNe:
      "दिगो विकास प्रतिवेदन अनुसार संयुक्त राष्ट्रसंघीय १७ दिगो विकास लक्ष्यहरूको प्रगतिमा नेपाल ९० औं स्थानमा रहेको छ।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "Probable Questions 2081 / Officer",
    isImportant: true,
  },

  // ==========================================
  // SECTION 3: GEOGRAPHY OF NEPAL (GURUMANTRA ACADEMY)
  // ==========================================
  {
    topicSlug: "geography-of-nepal",
    questionEn:
      "The Mechi River on the eastern border of Nepal delineates the international border with which Indian state?",
    questionNe:
      "नेपालको पूर्वमा मेची नदीले भारतको कुन प्रान्तसँग सीमाना बनाएको छ?",
    optionAEn: "West Bengal",
    optionANe: "पश्चिम बंगाल (West Bengal)",
    optionBEn: "Bihar",
    optionBNe: "बिहार",
    optionCEn: "Uttarakhand",
    optionCNe: "उत्तराखण्ड",
    optionDEn: "Sikkim",
    optionDNe: "सिक्किम",
    correctOption: "A",
    explanationEn:
      "The Mechi River demarcates the eastern border between Nepal (Jhapa district) and the Indian state of West Bengal.",
    explanationNe:
      "नेपालको पूर्वी सीमामा पर्ने मेची नदीले भारतको पश्चिम बंगाल राज्यसँग अन्तर्राष्ट्रिय सीमा छुट्याएको छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "geography-of-nepal",
    questionEn:
      "The Mahakali River on the western border of Nepal forms the boundary with which Indian state?",
    questionNe:
      "नेपालको पश्चिममा महाकाली नदीले भारतको कुन प्रान्तसँग सीमाना बनाएको छ?",
    optionAEn: "Himachal Pradesh",
    optionANe: "हिमाचल प्रदेश",
    optionBEn: "Uttarakhand",
    optionBNe: "उत्तराखण्ड (Uttarakhand)",
    optionCEn: "Bihar",
    optionCNe: "बिहार",
    optionDEn: "Uttar Pradesh",
    optionDNe: "उत्तर प्रदेश",
    correctOption: "B",
    explanationEn:
      "Under the Sugauli Treaty of 1816, the Mahakali River forms Nepal's western border with the Indian state of Uttarakhand (Pithoragarh and Champawat districts).",
    explanationNe:
      "सुगौली सन्धि अनुसार नेपालको पश्चिमी सीमा नदी महाकालीले भारतको उत्तराखण्ड राज्यसँग अन्तर्राष्ट्रिय सीमा निर्धारण गर्दछ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "geography-of-nepal",
    questionEn:
      "Which two Indian states border Nepal to the south?",
    questionNe:
      "नेपालको दक्षिणमा भारतका कुन-कुन राज्यहरू पर्दछन्?",
    optionAEn: "West Bengal and Assam",
    optionANe: "पश्चिम बंगाल र असम",
    optionBEn: "Sikkim and Meghalaya",
    optionBNe: "सिक्किम र मेघालय",
    optionCEn: "Uttar Pradesh and Bihar",
    optionCNe: "उत्तर प्रदेश र बिहार",
    optionDEn: "Uttarakhand and Punjab",
    optionDNe: "उत्तराखण्ड र पञ्जाब",
    correctOption: "C",
    explanationEn:
      "Nepal's southern Terai plain shares its contiguous southern border primarily with the Indian states of Uttar Pradesh and Bihar (as well as a small section with West Bengal in the south-east).",
    explanationNe:
      "नेपालको दक्षिणतर्फ भारतका दुई ठूला राज्यहरू उत्तर प्रदेश र बिहार अवस्थित रहेका छन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "geography-of-nepal",
    questionEn:
      "Which autonomous region of the People's Republic of China borders Nepal to the north along the Himalayas?",
    questionNe:
      "नेपालको उत्तरमा चीनको कुन स्वशासित क्षेत्र पर्दछ?",
    optionAEn: "Tibet",
    optionANe: "तिब्बत (Tibet)",
    optionBEn: "Sichuan",
    optionBNe: "सिचुआन",
    optionCEn: "Yunnan",
    optionCNe: "युन्नान",
    optionDEn: "Xinjiang",
    optionDNe: "सिन्जियाङ",
    correctOption: "A",
    explanationEn:
      "Nepal's entire northern Himalayan border of 1,236 km connects directly with the Tibet Autonomous Region (TAR) of China.",
    explanationNe:
      "नेपालको उत्तरतर्फको सम्पूर्ण १,२३६ किलोमिटर लामो हिमाली सीमा चीनको तिब्बत स्वशासित क्षेत्र (Tibet Autonomous Region) सँग जोडिएको छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "rivers-and-lakes",
    questionEn:
      "Which is the largest man-made water reservoir in Nepal?",
    questionNe:
      "नेपालको सबैभन्दा ठूलो मानव निर्मित जलाशय कुन हो?",
    optionAEn: "Indra Sarowar (Kulekhani, Makwanpur)",
    optionANe: "इन्द्र सरोवर (कुलेखानी, मकवानपुर)",
    optionBEn: "Ghodaghodi Tal",
    optionBNe: "घोडाघोडी",
    optionCEn: "Rupa Tal",
    optionCNe: "रूपा ताल",
    optionDEn: "Jagdishpur Reservoir",
    optionDNe: "जगदीशपुर",
    correctOption: "A",
    explanationEn:
      "Indra Sarowar (built for the Kulekhani Hydroelectric Project in Makwanpur district) is Nepal's largest man-made reservoir with a storage capacity of over 85 million cubic meters.",
    explanationNe:
      "मकवानपुर जिल्लामा कुलेखानी जलविद्युत आयोजना अन्तर्गत निर्माण गरिएको इन्द्र सरोवर नेपालको सबैभन्दा ठूलो मानव निर्मित जलाशय हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Nayab Subba",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "What percentage of Nepal's total geographical area is covered by the Chure (Siwalik) hill range?",
    questionNe:
      "चुरे क्षेत्रले नेपालको कुल भूभागको कति प्रतिशत क्षेत्रफल ओगटेको छ?",
    optionAEn: "Approximately 18%",
    optionANe: "करिब १८ प्रतिशत",
    optionBEn: "Approximately 15%",
    optionBNe: "करिब १५ प्रतिशत",
    optionCEn: "Approximately 8%",
    optionCNe: "करिब ८ प्रतिशत",
    optionDEn: "Approximately 12.78%",
    optionDNe: "करिब १२.७८ प्रतिशत",
    correctOption: "D",
    explanationEn:
      "The fragile Chure (Siwalik) mountain range spans 37 districts and accounts for approximately 12.78% of Nepal's land area, protected under the President Chure-Tarai Madhesh Conservation Board.",
    explanationNe:
      "चुरे (शिवालिक) क्षेत्रले नेपालको कुल भूभागको १२.७८ प्रतिशत क्षेत्रफल ओगटेको छ र यो ३७ जिल्लामा फैलिएको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "Which region in eastern Nepal is famously known as the 'Capital of Rhododendron' (गुराँसको राजधानी)?",
    questionNe:
      "नेपालको कुन ठाउँलाई 'गुराँसको राजधानी' भनेर चिनिन्छ?",
    optionAEn: "Tinjure-Milke-Jaljale (TMT - Tehrathum, Sankhuwasabha & Taplejung)",
    optionANe: "तीनजुरे-मिल्के-जलजले (TMT - तेह्रथुम, संखुवासभा र ताप्लेजुङ)",
    optionBEn: "Daman (Makwanpur)",
    optionBNe: "दामन",
    optionCEn: "Ghorepani (Myagdi)",
    optionCNe: "घोडेपानी",
    optionDEn: "Helambu (Sindhupalchok)",
    optionDNe: "हेलम्बु",
    correctOption: "A",
    explanationEn:
      "The Tinjure-Milke-Jaljale (TMT) ridge intersecting Tehrathum, Sankhuwasabha, and Taplejung is celebrated as the 'Rhododendron Capital' of Nepal because 28 out of Nepal's 32 rhododendron species thrive there naturally.",
    explanationNe:
      "तेह्रथुम, संखुवासभा र ताप्लेजुङको संगममा रहेको तीनजुरे-मिल्के-जलजले (TMT) क्षेत्रमा नेपालमा पाइने ३२ प्रजातिका गुराँसमध्ये २८ प्रजाति एकै ठाउँ पाइने हुनाले यसलाई गुराँसको राजधानी भनिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "How many species of Rhododendron (लालीगुराँस) are recorded in Nepal?",
    questionNe:
      "नेपालमा कति प्रजातिका लालीगुराँसहरू पाइन्छन्?",
    optionAEn: "35 species",
    optionANe: "३५ प्रजातिका",
    optionBEn: "32 species (28 found in TMT)",
    optionBNe: "३२ प्रजातिका (TMT क्षेत्रमा २८ प्रजाति पाइने)",
    optionCEn: "25 species",
    optionCNe: "२५ प्रजातिका",
    optionDEn: "20 species",
    optionDNe: "२० प्रजातिका",
    correctOption: "B",
    explanationEn:
      "Nepal is home to 32 species of Rhododendron. The national flower is the red tree rhododendron (Rhododendron arboreum / Lali Gurans).",
    explanationNe:
      "नेपालमा लालीगुराँसका कुल ३२ प्रजाति पाइन्छन्, जसमध्ये नेपालको राष्ट्रिय फूल 'रोडोड्रेन्ड्रन अर्बोरियम' (रातो लालीगुराँस) हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "At what elevation range does Nepal's national flower Rhododendron (Laligurans) primarily bloom?",
    questionNe:
      "नेपालको राष्ट्रिय फूल लालीगुराँस कति उचाइको क्षेत्रमा फुल्दछ?",
    optionAEn: "1,500 meters to 3,600 meters",
    optionANe: "१,५०० मिटरदेखि ३,६०० मिटरसम्म",
    optionBEn: "3,600 to 5,000 meters",
    optionBNe: "३,६०० देखि ५,००० मिटर",
    optionCEn: "800 to 1,500 meters",
    optionCNe: "८०० देखि १,५०० मिटर",
    optionDEn: "500 to 1,000 meters",
    optionDNe: "५०० देखि १,००० मिटर",
    correctOption: "A",
    explanationEn:
      "Rhododendron arboreum thrives in the temperate and subalpine zones between 1,500 meters and 3,600 meters across the Mahabharat and Himalayan middle belts.",
    explanationNe:
      "लालीगुराँस महाभारत र उच्च पहाडी क्षेत्रको १,५०० मिटरदेखि ३,६०० मिटरको उचाइमा प्रचुर मात्रामा फुल्दछ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "At what altitude are the high alpine meadows where Yarsagumba (Cordyceps sinensis) grows typically situated?",
    questionNe:
      "यार्सागुम्बा (Cordyceps sinensis) मुख्यतया कति उचाइको लेकाली घाँसे मैदानमा पाइन्छ?",
    optionAEn: "Above 5,500 meters",
    optionANe: "५,५०० मिटरभन्दा माथि",
    optionBEn: "2,000 to 3,000 meters",
    optionBNe: "२,००० देखि ३,००० मिटर",
    optionCEn: "3,000 to 5,000 meters",
    optionCNe: "३,००० देखि ५,००० मिटर उचाइमा",
    optionDEn: "1,500 to 2,500 meters",
    optionDNe: "१,५०० देखि २,५०० मिटर",
    correctOption: "C",
    explanationEn:
      "Yarsagumba (half-caterpillar, half-fungus) is harvested in the trans-Himalayan alpine pastures between 3,000 and 5,000 meters in districts like Dolpa, Darchula, and Jumla.",
    explanationNe:
      "यार्सागुम्बा हिमाली भेगका ३,००० देखि ५,००० मिटर उचाइका लेकाली घाँसे बुकी पाटनहरूमा पाइन्छ। डोल्पा यसको संकलनका लागि सबैभन्दा प्रख्यात जिल्ला हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Nayab Subba",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "Which district is the most famous commercial collection hub for Yarsagumba in Nepal?",
    questionNe:
      "नेपालमा यार्सागुम्बा संकलनका लागि सबैभन्दा प्रसिद्ध जिल्ला कुन हो?",
    optionAEn: "Mustang",
    optionANe: "मुस्ताङ",
    optionBEn: "Darchula",
    optionBNe: "दार्चुला",
    optionCEn: "Dolpa",
    optionCNe: "डोल्पा",
    optionDEn: "Jumla",
    optionDNe: "जुम्ला",
    correctOption: "C",
    explanationEn:
      "Dolpa district, particularly around Shey Phoksundo National Park's highlands, is Nepal's most prolific and renowned center for high-grade Yarsagumba harvesting.",
    explanationNe:
      "नेपालमा डोल्पा जिल्ला यार्सागुम्बाको सबैभन्दा ठूलो संकलन क्षेत्र तथा अन्तर्राष्ट्रिय व्यापारको केन्द्र मानिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district of Nepal is nicknamed the 'District of Suspension Bridges' (झोलुङ्गे पुलको जिल्ला)?",
    questionNe:
      "नेपालको कुन जिल्लालाई 'झोलुङ्गे पुलको जिल्ला' भनिन्छ?",
    optionAEn: "Myagdi",
    optionANe: "म्याग्दी",
    optionBEn: "Parbat",
    optionBNe: "पर्वत",
    optionCEn: "Baglung",
    optionCNe: "बागलुङ",
    optionDEn: "Gulmi",
    optionDNe: "गुल्मी",
    correctOption: "C",
    explanationEn:
      "Baglung is known as the 'District of Suspension Bridges' due to having hundreds of pedestrian suspension bridges crossing rivers and deep ravines throughout the district.",
    explanationNe:
      "धेरै संख्यामा झोलुङ्गे पुलहरू निर्माण गरिएको हुनाले बागलुङ जिल्लालाई 'झोलुङ्गे पुलको जिल्ला' उपनामले चिनिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "The 567-meter single-span pedestrian suspension bridge (one of the world's longest) connects which two districts across the Kaligandaki gorge?",
    questionNe:
      "विश्वकै दोस्रो लामो मानिएको ५६७ मिटर लामो सुपर स्प्यान झोलुङ्गे पुल कुन दुई जिल्ला जोड्न निर्माण गरिएको छ?",
    optionAEn: "Baglung and Parbat",
    optionANe: "बागलुङ र पर्वत (५६७ मिटर लामो)",
    optionBEn: "Myagdi and Baglung",
    optionBNe: "म्याग्दी र बागलुङ",
    optionCEn: "Gulmi and Palpa",
    optionCNe: "गुल्मी र पाल्पा",
    optionDEn: "Syangja and Palpa",
    optionDNe: "स्याङ्जा र पाल्पा",
    correctOption: "A",
    explanationEn:
      "The 567-meter suspension bridge crosses the Kaligandaki River, linking Baglung Municipality-1 (Ramrekha) directly to Kusma Municipality-1 (Aadhibikram) in Parbat.",
    explanationNe:
      "कालीगण्डकी नदीमाथि बनेको ५६७ मिटर लामो झोलुङ्गे पुलले बागलुङको रामरेखा र पर्वतको कुश्मालाई जोडेको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "Nepal's highest bungee jump platform ('The Cliff') is built over the gorge of which holy river in Kushma, Parbat?",
    questionNe:
      "नेपालको सबैभन्दा अग्लो बन्जी जम्प ('द क्लिफ') कुन नदीको खोँचमा अवस्थित छ?",
    optionAEn: "Marsyangdi River",
    optionANe: "मर्स्याङ्दी नदी",
    optionBEn: "Kaligandaki River (Kushma, Parbat)",
    optionBNe: "कालीगण्डकी नदी (कुश्मा, पर्वत)",
    optionCEn: "Bhote Koshi River",
    optionCNe: "भोटेकोशी नदी",
    optionDEn: "Trishuli River",
    optionDNe: "त्रिशूली नदी",
    correctOption: "B",
    explanationEn:
      "The Cliff bungee jump in Kushma, Parbat stands at 228 meters above the Kaligandaki River gorge, making it the highest in Nepal and second highest in the world.",
    explanationNe:
      "पर्वतको कुश्मामा कालीगण्डकी नदीको खोँचमाथि २२८ मिटर अग्लो स्थानबाट गरिने 'द क्लिफ' नेपालको सबैभन्दा अग्लो बन्जी जम्प हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Which religious pilgrimage site did Nepal's first cable car service connect?",
    questionNe:
      "नेपालको पहिलो केबलकार कुन मन्दिर दर्शनका लागि सञ्चालन गरिएको हो?",
    optionAEn: "Annapurna Cable Car",
    optionANe: "अन्नपूर्ण केबलकार",
    optionBEn: "Manakamana Cable Car (Kurintar, Chitwan to Gorkha)",
    optionBNe: "मनकामना केबलकार (चितवनको कुरिनटारदेखि गोरखा)",
    optionCEn: "Kalinchowk Cable Car",
    optionCNe: "कालिञ्चोक केबलकार",
    optionDEn: "Chandragiri Cable Car",
    optionDNe: "चन्द्रागिरि केबलकार",
    correctOption: "B",
    explanationEn:
      "Inaugurated on Mangsir 8, 2055 BS (November 24, 1998), Manakamana Cable Car was Nepal's first passenger ropeway, connecting Kurintar (Chitwan) to Manakamana Temple (Gorkha).",
    explanationNe:
      "वि.सं. २०५५ मंसिर ८ गतेबाट चितवनको कुरिनटारदेखि गोरखाको मनकामना मन्दिरसम्म सञ्चालन भएको मनकामना केबलकार नेपालको पहिलो केबलकार सेवा हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Which was historically the first vehicular tunnel constructed in Nepal?",
    questionNe:
      "नेपालको पहिलो सुरुङमार्ग कुन हो?",
    optionAEn: "Siddhababa Tunnel",
    optionANe: "सिद्धबाबा सुरुङमार्ग",
    optionBEn: "Thankot Tunnel",
    optionBNe: "थानकोट सुरुङमार्ग",
    optionCEn: "Nagdhunga Tunnel",
    optionCNe: "नागढुङ्गा सुरुङमार्ग",
    optionDEn: "Churiya Tunnel (Makwanpur, 1974 BS by Eng. Dilli Jung Thapa)",
    optionDNe: "चुरिया सुरुङमार्ग (मकवानपुर, वि.सं. १९७४ मा इन्जिनियर डिल्लीजङ्ग थापाद्वारा)",
    correctOption: "D",
    explanationEn:
      "Constructed in 1974 BS (1917 AD) under Prime Minister Chandra Shumsher by Chief Engineer Brigadier General Dilli Jung Thapa, the 500-meter Churiya Tunnel in Makwanpur was Nepal's first vehicular tunnel.",
    explanationNe:
      "वि.सं. १९७४ मा इन्जिनियर डिल्लीजङ्ग थापाको नेतृत्वमा मकवानपुरको चुरिया डाँडा काटेर बनाइएको चुरिया सुरुङमार्ग नेपालको पहिलो सुरुङमार्ग हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Which is Nepal's first modern state-of-the-art vehicular road tunnel?",
    questionNe:
      "नेपालको आधुनिक प्रविधिको पहिलो यातायात सुरुङमार्ग कुन हो?",
    optionAEn: "Toribari Tunnel",
    optionANe: "तोरीबारी सुरुङमार्ग",
    optionBEn: "Fast Track Tunnel",
    optionBNe: "फास्ट ट्र्याक सुरुङमार्ग",
    optionCEn: "Nagdhunga-Sisnekhola Tunnel (2.68 km)",
    optionCNe: "नागढुङ्गा-सिस्नेखोला सुरुङमार्ग (२.६८ किमी)",
    optionDEn: "Siddhababa Tunnel",
    optionDNe: "सिद्धबाबा सुरुङमार्ग",
    correctOption: "C",
    explanationEn:
      "The 2.68 km Nagdhunga-Sisnekhola Tunnel linking Kathmandu and Dhading is Nepal's first modern road tunnel, achieving its historic breakthrough in 2081 BS (2024 AD).",
    explanationNe:
      "काठमाडौँको नागढुङ्गा र धादिङको सिस्नेखोला जोड्ने २.६८ कि.मि. लामो सुरुङमार्ग नेपालको आधुनिक प्रविधिमा आधारित पहिलो सडक सुरुङमार्ग हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "What is the total planned length of the Kathmandu-Tarai Madhesh Fast Track (Expressway)?",
    questionNe:
      "काठमाडौँ-तराई मधेश द्रुतमार्ग (Fast Track) को लम्बाई कति रहेको छ?",
    optionAEn: "65 km",
    optionANe: "६५ किलोमिटर",
    optionBEn: "76 km",
    optionBNe: "७६ किलोमिटर",
    optionCEn: "82 km",
    optionCNe: "८२ किलोमिटर",
    optionDEn: "Approximately 70.977 km",
    optionDNe: "करिब ७०.९७७ किलोमिटर",
    correctOption: "D",
    explanationEn:
      "The Kathmandu-Tarai Madhesh Fast Track being constructed under Nepal Army management spans approximately 70.977 kilometers from Khokana (Lalitpur) to Nijgadh (Bara).",
    explanationNe:
      "नेपाली सेनाको व्यवस्थापनमा निर्माण भइरहेको काठमाडौँ-तराई मधेश द्रुतमार्गको कुल लम्बाइ करिब ७०.९७७ किलोमिटर रहेको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Which is the longest highway in Nepal?",
    questionNe:
      "नेपालको सबैभन्दा लामो राजमार्ग कुन हो?",
    optionAEn: "Madan Bhandari Highway",
    optionANe: "मदन भण्डारी राजमार्ग",
    optionBEn: "Mid-Hill Highway (Pushpalal)",
    optionBNe: "मध्यपहाडी लोकमार्ग",
    optionCEn: "Mahendra Highway (East-West Highway, 1,027.67 km)",
    optionCNe: "महेन्द्र राजमार्ग (पूर्व-पश्चिम राजमार्ग, १,०२७.६७ किमी)",
    optionDEn: "Postal Highway (Hulaki)",
    optionDNe: "हुलाकी राजमार्ग",
    correctOption: "C",
    explanationEn:
      "Mahendra Highway (NH01 / East-West Highway) spanning 1,027.67 km from Kakarbhitta in the east to Gaddachauki (Kanchanpur) in the west is currently Nepal's longest operating highway.",
    explanationNe:
      "काँकडभिट्टादेखि गड्डाचौकीसम्म फैलिएको महेन्द्र राजमार्ग (पूर्व-पश्चिम राजमार्ग) १,०२७.६७ किलोमिटर लम्बाइका साथ नेपालको सबैभन्दा लामो सञ्चालित राजमार्ग हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Which airport in Nepal is situated at the lowest altitude above sea level?",
    questionNe:
      "नेपालको सबैभन्दा होचो स्थानमा रहेको विमानस्थल कुन हो?",
    optionAEn: "Biratnagar Airport",
    optionANe: "विराटनगर विमानस्थल",
    optionBEn: "Janakpur Airport",
    optionBNe: "जनकपुर विमानस्थल",
    optionCEn: "Nepalgunj Airport",
    optionCNe: "नेपालगञ्ज विमानस्थल",
    optionDEn: "Bhadrapur Airport (Jhapa, ~91 meters)",
    optionDNe: "भद्रपुर विमानस्थल (झापा, समुद्र सतहबाट करिब ९१ मिटर)",
    correctOption: "D",
    explanationEn:
      "Bhadrapur Airport (Chandragadhi) in Jhapa is located at an altitude of approximately 91 meters (300 feet) above sea level, making it the lowest airport in Nepal.",
    explanationNe:
      "झापाको भद्रपुर (चन्द्रगढी) विमानस्थल समुद्र सतहबाट करिब ९१ मिटरको उचाइमा रहेको छ, जुन नेपालको सबैभन्दा होचो विमानस्थल हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "Where is Tenzing-Hillary Airport (Lukla), famous as one of the world's most extreme mountain airstrips, situated?",
    questionNe:
      "नेपाल तथा विश्वकै सबैभन्दा जोखिमपूर्ण र प्रसिद्ध हिमाली विमानस्थल तेन्जिङ-हिलारी विमानस्थल कहाँ छ?",
    optionAEn: "Lukla (Solukhumbu, 2,845 meters)",
    optionANe: "लुक्ला (सोलुखुम्बु, २,८४५ मिटर)",
    optionBEn: "Jomsom",
    optionBNe: "जोमसोम",
    optionCEn: "Simikot",
    optionCNe: "सिमिकोट",
    optionDEn: "Jumla",
    optionDNe: "जुम्ला",
    correctOption: "A",
    explanationEn:
      "Tenzing-Hillary Airport at Lukla in Solukhumbu sits at an altitude of 2,845 meters (9,334 ft) with a steep 12% uphill gradient runway terminating at a mountain wall.",
    explanationNe:
      "सोलुखुम्बुको लुक्लामा २,८४५ मिटरको उचाइमा अवस्थित तेन्जिङ-हिलारी विमानस्थल सगरमाथा आरोहणको मुख्य प्रवेशद्वार तथा विश्वकै चर्चित हिमाली विमानस्थल हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "economy-and-development",
    questionEn:
      "When was Nepal's second international airport, Gautam Buddha International Airport in Bhairahawa, formally inaugurated?",
    questionNe:
      "नेपालको दोस्रो अन्तर्राष्ट्रिय विमानस्थल 'गौतम बुद्ध अन्तर्राष्ट्रिय विमानस्थल' (भैरहवा) कहिले उद्घाटन गरियो?",
    optionAEn: "Baisakh 1, 2078 BS",
    optionANe: "वि.सं. २०७८ वैशाख १",
    optionBEn: "Poush 10, 2080 BS",
    optionBNe: "वि.सं. २०८० पुस १०",
    optionCEn: "Jestha 2, 2079 BS (16 May 2022 AD)",
    optionCNe: "वि.सं. २०७९ जेठ २ (१६ मे २०२२)",
    optionDEn: "Asar 15, 2079 BS",
    optionDNe: "वि.सं. २०७९ असार १५",
    correctOption: "C",
    explanationEn:
      "Gautam Buddha International Airport (GBIA) in Bhairahawa was officially inaugurated on the auspicious day of Buddha Jayanti on Jestha 2, 2079 BS (May 16, 2022).",
    explanationNe:
      "वि.सं. २०७९ जेठ २ गते (बुद्ध जयन्तीका दिन) भैरहवास्थित गौतम बुद्ध अन्तर्राष्ट्रिय विमानस्थलको औपचारिक उद्घाटन गरी व्यावसायिक उडान सुरु गरिएको थियो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },

  // ==========================================
  // SECTION 4: CLIMATE, VEGETATION & AGRICULTURE
  // ==========================================
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "At what elevation is the Alpine Climate (लेकाली वा अल्पाइन हावापानी) zone found in Nepal?",
    questionNe:
      "लेकाली वा अल्पाइन हावापानी (Alpine Climate) कति उचाइमा पाइन्छ?",
    optionAEn: "Above 5,000 meters",
    optionANe: "५,००० मिटरभन्दा माथि",
    optionBEn: "2,100 to 3,300 meters",
    optionBNe: "२,१०० देखि ३,३०० मिटर",
    optionCEn: "3,300 meters to 5,000 meters",
    optionCNe: "३,३०० मिटरदेखि ५,००० मिटर उचाइसम्म",
    optionDEn: "1,500 to 3,000 meters",
    optionDNe: "१,५०० देखि ३,००० मिटर",
    correctOption: "C",
    explanationEn:
      "The Alpine climatic belt in Nepal extends from 3,300 meters up to 5,000 meters (the snowline), characterized by short cool summers and severely cold winters with stunted shrubs and alpine grasses.",
    explanationNe:
      "नेपालमा ३,३०० मिटरदेखि ५,००० मिटर (हिउँरेखा) सम्मको उचाइमा लेकाली वा अल्पाइन हावापानी पाइन्छ। ५,००० मिटरभन्दा माथि टुन्ड्रा (ध्रुवीय) हावापानी पाइन्छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "What is the average permanent snow line (हिउँ रेखा) altitude in the Himalayas of Nepal?",
    questionNe:
      "उच्च हिमाली क्षेत्रमा बाह्रै महिना हिउँ जम्ने सीमा (Snow Line) नेपालमा कति उचाइमा रहेको छ?",
    optionAEn: "6,000 meters",
    optionANe: "६,००० मिटर माथि",
    optionBEn: "Snow line at approximately 5,000 meters",
    optionBNe: "हिउँ रेखा (Snow Line, नेपालमा करिब ५,००० मिटर)",
    optionCEn: "4,000 meters",
    optionCNe: "४,००० मिटर माथि",
    optionDEn: "3,300 meters",
    optionDNe: "३,३०० मिटर माथि",
    correctOption: "B",
    explanationEn:
      "In Nepal's Himalayas, the permanent snowline (above which snow remains all 12 months) lies around 5,000 meters on southern slopes.",
    explanationNe:
      "नेपालको हिमालय पर्वतमालामा बाह्रै महिना हिउँ रहने रेखा (Snow Line) औसत करिब ५,००० मिटरको उचाइमा अवस्थित छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "What is the average annual rainfall recorded across Nepal?",
    questionNe:
      "नेपालको औसत वार्षिक वर्षा कति मिलिमिटर रहेको छ?",
    optionAEn: "2,000 mm",
    optionANe: "२,००० मिलिमिटर",
    optionBEn: "Around 1,500 to 1,600 mm",
    optionBNe: "करिब १,५०० देखि १,६०० मिलिमिटर",
    optionCEn: "800 mm",
    optionCNe: "८०० मिलिमिटर",
    optionDEn: "1,000 mm",
    optionDNe: "१,००० मिलिमिटर",
    correctOption: "B",
    explanationEn:
      "Nepal receives an average annual precipitation of approximately 1,500 to 1,600 mm, with roughly 80% falling during the summer monsoon (June-September).",
    explanationNe:
      "नेपालमा औसत वार्षिक वर्षा करिब १,५०० देखि १,६०० मिलिमिटर हुने गर्दछ। कुल वर्षाको करिब ८० प्रतिशत वर्षा ग्रीष्मकालीन मनसुनमा हुन्छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "Which place in Nepal records the highest annual rainfall (Cherrapunji of Nepal)?",
    questionNe:
      "नेपालमा सबैभन्दा धेरै पानी पर्ने ठाउँ कुन हो?",
    optionAEn: "Pokhara",
    optionANe: "पोखरा",
    optionBEn: "Lumle (Kaski, ~5,500 mm annually)",
    optionBNe: "लुम्ले (कास्की, वार्षिक करिब ५,५०० मिमी)",
    optionCEn: "Dharan",
    optionCNe: "धरान",
    optionDEn: "Jiri",
    optionDNe: "जिरी",
    correctOption: "B",
    explanationEn:
      "Lumle in Kaski district receives the highest annual rainfall in Nepal (over 5,500 mm), earning it the moniker 'Cherrapunji of Nepal'.",
    explanationNe:
      "कास्की जिल्लाको लुम्लेमा वार्षिक ५,५०० मिलिमिटरभन्दा बढी वर्षा हुने हुनाले यसलाई नेपालको सबैभन्दा धेरै पानी पर्ने ठाउँ मानिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "Which place in Nepal receives the lowest annual rainfall (Rain Shadow zone)?",
    questionNe:
      "नेपालमा सबैभन्दा कम पानी पर्ने ठाउँ कुन हो?",
    optionAEn: "Jumla",
    optionANe: "जुम्ला",
    optionBEn: "Lomanthang (Mustang, 150-250 mm annually)",
    optionBNe: "लोमान्थाङ (मुस्ताङ, वार्षिक १५०-२५० मिमी)",
    optionCEn: "Manang",
    optionCNe: "मनाङ",
    optionDEn: "Dolpa",
    optionDNe: "डोल्पा",
    correctOption: "B",
    explanationEn:
      "Located in the rain shadow of the Dhaulagiri and Annapurna ranges, Lomanthang in Upper Mustang receives the lowest annual precipitation in Nepal (150–250 mm).",
    explanationNe:
      "धौलागिरी र अन्नपूर्ण हिमालको वृष्टि छाया (Rain Shadow) मा पर्ने उपल्लो मुस्ताङको लोमान्थाङमा वार्षिक जम्मा १५० देखि २५० मिलिमिटर मात्र वर्षा हुन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "From which direction does the summer monsoon normally enter Nepal?",
    questionNe:
      "नेपालमा मनसुन सर्वप्रथम कुन दिशाबाट प्रवेश गर्दछ?",
    optionAEn: "Gandaki (West)",
    optionANe: "गण्डकी",
    optionBEn: "Sudurpashchim (North-West)",
    optionBNe: "सुदूरपश्चिम",
    optionCEn: "Lumbini (South)",
    optionCNe: "लुम्बिनी",
    optionDEn: "South-East Nepal (Koshi Province / Jhapa)",
    optionDNe: "दक्षिण-पूर्वी नेपाल (कोशी प्रदेश/झापा)",
    correctOption: "D",
    explanationEn:
      "The summer monsoon originates in the Bay of Bengal and enters Nepal from the south-east (Koshi Province/Jhapa), generally around June 13.",
    explanationNe:
      "बंगालको खाडीबाट आउने ग्रीष्मकालीन मनसुन नेपालको दक्षिण-पूर्वी भाग (कोशी प्रदेशको झापा इलाम) बाट सर्वप्रथम प्रवेश गर्दछ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "What is the primary atmospheric cause of winter rainfall (हिउँदे वर्षा) in western Nepal?",
    questionNe:
      "नेपालमा हिउँदमा वर्षा गराउने मुख्य कारक कुन हो?",
    optionAEn: "Western Disturbance / Mediterranean winds (पश्चिमी वायु)",
    optionANe: "पश्चिमी वायु (Western Disturbance / भूमध्यसागरीय वायु)",
    optionBEn: "Local convection winds",
    optionBNe: "स्थानीय वायु",
    optionCEn: "Bay of Bengal monsoon",
    optionCNe: "बंगालको खाडीको मनसुन",
    optionDEn: "South-Eastern monsoon",
    optionDNe: "दक्षिण-पूर्वी मनसुन",
    correctOption: "A",
    explanationEn:
      "Winter precipitation in Nepal (often bringing rain to western valleys and snow to the high mountains) is brought by the Western Disturbance originating over the Mediterranean Sea.",
    explanationNe:
      "भूमध्यसागरबाट उत्पन्न हुने पश्चिमी वायु (Western Disturbance) ले नेपालमा हिउँदे वर्षा तथा उच्च हिमाली भेगमा हिमपात गराउँछ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "climate-vegetation",
    questionEn:
      "What is the hot, dry summer afternoon wind that blows across the Terai plains called?",
    questionNe:
      "नेपालको तराई क्षेत्रमा गर्मी याममा चल्ने तातो र सुख्खा हावालाई के भनिन्छ?",
    optionAEn: "Loo (लु)",
    optionANe: "लु (Loo)",
    optionBEn: "Simoom",
    optionBNe: "सिमूम",
    optionCEn: "Chinook",
    optionCNe: "चिनुक",
    optionDEn: "Harmattan",
    optionDNe: "हर्माट्टन",
    correctOption: "A",
    explanationEn:
      "In the months of Baisakh and Jestha, strong, hot, and dry westerly winds blow across the northern plains of the Indian subcontinent and Nepal's Terai, known locally as 'Loo'.",
    explanationNe:
      "तराई क्षेत्रमा वैशाख-जेठको प्रचण्ड गर्मीमा चल्ने तातो र शुष्क हावालाई 'लु' भनिन्छ जसले मानिसमा लु लाग्ने (heatstroke) जोखिम निम्त्याउँछ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "Which districts of eastern Nepal are renowned as the hub for industrial Jute cultivation?",
    questionNe:
      "नेपालको प्रसिद्ध औद्योगिक कच्चा पदार्थ 'जुट' मुख्यतया कुन जिल्लामा उत्पादन हुन्छ?",
    optionAEn: "Chitwan and Nawalpur",
    optionANe: "चितवन र नवलपुर",
    optionBEn: "Dhanusha and Mahottari",
    optionBNe: "धनुषा र महोत्तरी",
    optionCEn: "Kailali and Kanchanpur",
    optionCNe: "कैलाली र कञ्चनपुर",
    optionDEn: "Jhapa, Morang and Sunsari",
    optionDNe: "झापा, मोरङ र सुनसरी",
    correctOption: "D",
    explanationEn:
      "The eastern Terai districts of Jhapa, Morang, and Sunsari possess the ideal humid climate and alluvial soil for commercial Jute farming in Nepal.",
    explanationNe:
      "झापा, मोरङ र सुनसरी जिल्ला नेपालमा जुट (पार्ट) खेती र जुट उद्योगका लागि मुख्य केन्द्र हुन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "natural-resources",
    questionEn:
      "From which animal's fine undercoat hair is raw Cashmere/Pashmina wool harvested in Nepal?",
    questionNe:
      "पश्मिना उद्योगका लागि कच्चा पदार्थ कुन जनावरको रौँबाट प्राप्त हुन्छ?",
    optionAEn: "Yak",
    optionANe: "याक",
    optionBEn: "Sheep",
    optionBNe: "भेडा",
    optionCEn: "Chyangra (Himalayan mountain goat)",
    optionCNe: "च्याङ्ग्रा (Chyangra)",
    optionDEn: "Chauri",
    optionDNe: "चौंरी",
    correctOption: "C",
    explanationEn:
      "Authentic Nepali Pashmina is spun from the ultra-fine winter undercoat fleece of the mountain goat called Chyangra (Capra hircus), reared above 3,000 meters in Mustang and Manang.",
    explanationNe:
      "नेपालको प्रसिद्ध पश्मिना च्याङ्ग्राको भित्री नरम भुत्ला (रौँ) बाट उत्पादन गरिन्छ। यसलाई 'च्याङ्ग्रा पश्मिना' ब्रान्डका रूपमा निर्यात गरिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },

  // ==========================================
  // SECTION 5: PROVINCES, DISTRICTS & CENSUS
  // ==========================================
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "On which date did Nepal officially transition from 75 to 77 administrative districts by splitting Nawalparasi and Rukum?",
    questionNe:
      "नेपालमा ७७ जिल्ला कायम कहिले गरिएको हो?",
    optionAEn: "Poush 10, 2073 BS",
    optionANe: "वि.सं. २०७३ पुस १०",
    optionBEn: "Bhadra 5, 2074 BS",
    optionBNe: "वि.सं. २०७४ भदौ ५",
    optionCEn: "Asoj 3, 2072 BS",
    optionCNe: "वि.सं. २०७२ असोज ३",
    optionDEn: "Baisakh 1, 2075 BS",
    optionDNe: "वि.सं. २०७५ वैशाख १",
    correctOption: "B",
    explanationEn:
      "On Bhadra 5, 2074 BS, the Government of Nepal officially gazetted 77 administrative districts by dividing Nawalparasi into Parasi and Bardaghat Susta East (Nawalpur), and Rukum into Rukum East and Rukum West.",
    explanationNe:
      "वि.सं. २०७४ भदौ ५ गते नेपाल सरकारले नवलपरासी र रुकुमलाई दुई-दुई जिल्लामा विभाजन गरी नेपालमा औपचारिक रूपमा ७७ जिल्ला कायम गरेको हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Nayab Subba",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa 2080",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many districts of Nepal share international borders ONLY with China?",
    questionNe:
      "चीनसँग मात्र सीमा जोडिएका नेपालका कतिवटा जिल्लाहरू छन्?",
    optionAEn: "13 districts",
    optionANe: "१३ वटा",
    optionBEn: "15 districts",
    optionBNe: "१५ वटा",
    optionCEn: "25 districts",
    optionCNe: "२५ वटा",
    optionDEn: "14 districts",
    optionDNe: "१४ वटा",
    correctOption: "A",
    explanationEn:
      "There are 13 districts that border China exclusively. In total, 15 districts touch China (13 exclusive + 2 that touch both India and China: Taplejung and Darchula).",
    explanationNe:
      "चीनसँग मात्र सिमाना जोडिएका जिल्ला १३ वटा छन्। ताप्लेजुङ र दार्चुला दुवै देशसँग जोडिएकाले चीन छुने कुल जिल्ला १५ वटा हुन्।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many districts of Nepal share international borders ONLY with India?",
    questionNe:
      "भारतसँग मात्र सीमा जोडिएका नेपालका कतिवटा जिल्लाहरू छन्?",
    optionAEn: "25 districts",
    optionANe: "२५ वटा",
    optionBEn: "24 districts",
    optionBNe: "२४ वटा",
    optionCEn: "27 districts",
    optionCNe: "२७ वटा",
    optionDEn: "26 districts",
    optionDNe: "२६ वटा",
    correctOption: "A",
    explanationEn:
      "There are 25 districts that border India exclusively. Including Taplejung and Darchula (which border both India and China), a total of 27 districts touch India.",
    explanationNe:
      "भारतसँग मात्र सिमाना जोडिएका जिल्ला २५ वटा छन्। दुवै देश छुने ताप्लेजुङ र दार्चुला जोड्दा भारतको सिमाना छुने कुल जिल्ला २७ वटा हुन्।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which two districts of Nepal share international borders with both India and China?",
    questionNe:
      "चीन र भारत दुवै देशसँग सीमा जोडिएका नेपालका जिल्लाहरू कुन-कुन हुन्?",
    optionAEn: "Taplejung and Darchula",
    optionANe: "ताप्लेजुङ र दार्चुला (२ वटा)",
    optionBEn: "Humla and Rasuwa",
    optionBNe: "हुम्ला र रसुवा",
    optionCEn: "Jhapa and Kanchanpur",
    optionCNe: "झापा र कञ्चनपुर",
    optionDEn: "Sankhuwasabha and Baitadi",
    optionDNe: "संखुवासभा र बैतडी",
    correctOption: "A",
    explanationEn:
      "Taplejung in the far east and Darchula in the far west are the only two districts in Nepal that share borders with both China and India.",
    explanationNe:
      "नेपालको पूर्वमा रहेको ताप्लेजुङ र सुदूरपश्चिममा रहेको दार्चुला गरी २ वटा जिल्लाले भारत र चीन दुवै देशको सिमाना छुन्छन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many inland/internal districts in Nepal touch neither the Indian nor the Chinese international border?",
    questionNe:
      "चीन वा भारत कुनै पनि देशसँग सीमा नजोडिएका (भित्री/अन्तरवर्ती) जिल्लाहरू कतिवटा छन्?",
    optionAEn: "35 districts",
    optionANe: "३५ वटा",
    optionBEn: "36 districts",
    optionBNe: "३६ वटा",
    optionCEn: "38 districts",
    optionCNe: "३८ वटा",
    optionDEn: "37 districts",
    optionDNe: "३७ वटा",
    correctOption: "D",
    explanationEn:
      "Out of 77 districts: 15 touch China and 27 touch India (with 2 overlapping, meaning 40 touch foreign borders). Thus, 77 - 40 = 37 districts are completely landlocked internally.",
    explanationNe:
      "नेपालका ७७ जिल्लामध्ये विदेशी सीमा नछुने भित्री (अन्तरवर्ती) जिल्लाहरूको संख्या ३७ वटा रहेको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the largest district of Nepal in terms of geographical surface area?",
    questionNe:
      "क्षेत्रफलको आधारमा नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?",
    optionAEn: "Taplejung",
    optionANe: "ताप्लेजुङ",
    optionBEn: "Dolpa (7,889 sq. km)",
    optionBNe: "डोल्पा (७,८८९ वर्ग किमी)",
    optionCEn: "Humla",
    optionCNe: "हुम्ला",
    optionDEn: "Mugu",
    optionDNe: "मुगु",
    correctOption: "B",
    explanationEn:
      "Dolpa in Karnali Province is Nepal's largest district, covering an area of 7,889 square kilometers (about 5.36% of the country).",
    explanationNe:
      "कर्णाली प्रदेशमा पर्ने डोल्पा जिल्ला ७,८८९ वर्ग किलोमिटर क्षेत्रफलका साथ नेपालको सबैभन्दा ठूलो जिल्ला हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the smallest district of Nepal in terms of geographical surface area?",
    questionNe:
      "क्षेत्रफलको आधारमा नेपालको सबैभन्दा सानो जिल्ला कुन हो?",
    optionAEn: "Bhaktapur (119 sq. km)",
    optionANe: "भक्तपुर (११९ वर्ग किमी)",
    optionBEn: "Lalitpur",
    optionBNe: "ललितपुर",
    optionCEn: "Kathmandu",
    optionCNe: "काठमाडौँ",
    optionDEn: "Parbat",
    optionDNe: "पर्वत",
    correctOption: "A",
    explanationEn:
      "Bhaktapur in Kathmandu Valley is Nepal's smallest district, covering an area of just 119 square kilometers.",
    explanationNe:
      "काठमाडौँ उपत्यकामा रहेको भक्तपुर जिल्ला ११९ वर्ग किलोमिटर क्षेत्रफलका साथ नेपालको सबैभन्दा सानो जिल्ला हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the largest province of Nepal by geographical area?",
    questionNe:
      "क्षेत्रफलको आधारमा नेपालको सबैभन्दा ठूलो प्रदेश कुन हो?",
    optionAEn: "Koshi Province",
    optionANe: "कोशी प्रदेश",
    optionBEn: "Karnali Province (27,984 sq. km, 18.97%)",
    optionBNe: "कर्णाली प्रदेश (२७,९८४ वर्ग किमी, १८.९७%)",
    optionCEn: "Gandaki Province",
    optionCNe: "गण्डकी प्रदेश",
    optionDEn: "Sudurpashchim Province",
    optionDNe: "सुदूरपश्चिम प्रदेश",
    correctOption: "B",
    explanationEn:
      "Karnali Province covers 27,984 sq. km (18.97% of Nepal's land area), making it the country's geographically largest province.",
    explanationNe:
      "नेपालको कुल भूभागको १८.९७ प्रतिशत (२७,९८४ वर्ग कि.मी.) क्षेत्रफल ओगटेको कर्णाली प्रदेश क्षेत्रफलका आधारमा सबैभन्दा ठूलो प्रदेश हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the smallest province of Nepal by geographical area?",
    questionNe:
      "क्षेत्रफलको आधारमा नेपालको सबैभन्दा सानो प्रदेश कुन हो?",
    optionAEn: "Madhesh Province (9,661 sq. km, 6.56%)",
    optionANe: "मधेश प्रदेश (९,६६१ वर्ग किमी, ६.५६%)",
    optionBEn: "Bagmati Province",
    optionBNe: "बागमती प्रदेश",
    optionCEn: "Gandaki Province",
    optionCNe: "गण्डकी प्रदेश",
    optionDEn: "Lumbini Province",
    optionDNe: "लुम्बिनी प्रदेश",
    correctOption: "A",
    explanationEn:
      "Comprising 8 Terai districts, Madhesh Province covers 9,661 sq. km (6.56% of Nepal), making it the smallest province by land area.",
    explanationNe:
      "मधेश प्रदेश ९,६६१ वर्ग किलोमिटर (६.५६ प्रतिशत) क्षेत्रफलका साथ नेपालको सबैभन्दा सानो प्रदेश हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "According to the National Population Census 2078 (2021), which province has the largest population in Nepal?",
    questionNe:
      "राष्ट्रिय जनगणना २०७८ अनुसार जनसंख्याको आधारमा नेपालको सबैभन्दा ठूलो प्रदेश कुन हो?",
    optionAEn: "Madhesh Province",
    optionANe: "मधेश प्रदेश",
    optionBEn: "Koshi Province",
    optionBNe: "कोशी प्रदेश",
    optionCEn: "Bagmati Province (20.97% of total population)",
    optionCNe: "बागमती प्रदेश (राष्ट्रिय जनगणना २०७८ अनुसार २०.९७%)",
    optionDEn: "Lumbini Province",
    optionDNe: "लुम्बिनी प्रदेश",
    correctOption: "C",
    explanationEn:
      "According to Census 2078, Bagmati Province houses 6,116,866 people (20.97% of total), making it the most populous province. Madhesh is second with 20.94%.",
    explanationNe:
      "जनगणना २०७८ अनुसार ६१ लाख १६ हजार ८६६ (२०.९७%) जनसंख्यासहित बागमती प्रदेश सबैभन्दा बढी जनसंख्या भएको प्रदेश हो। मधेश प्रदेश २०.९४% सहित दोस्रोमा छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many total Local Levels (स्थानीय तह) exist in Nepal under the federal structure?",
    questionNe:
      "नेपालमा स्थानीय तहको कुल संख्या कति रहेको छ?",
    optionAEn: "750",
    optionANe: "७५० वटा",
    optionBEn: "753 local levels",
    optionBNe: "७५३ वटा",
    optionCEn: "760",
    optionCNe: "७६० वटा",
    optionDEn: "744",
    optionDNe: "७४४ वटा",
    correctOption: "B",
    explanationEn:
      "Nepal has 753 local governments: 6 Metropolitan Cities, 11 Sub-Metropolitan Cities, 276 Municipalities, and 460 Rural Municipalities.",
    explanationNe:
      "नेपालको संघीय संरचनामा ६ महानगरपालिका, ११ उपमहानगरपालिका, २७६ नगरपालिका र ४६० गाउँपालिका गरी कुल ७५३ स्थानीय तहहरू छन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many total Metropolitan Cities (महानगरपालिका) are there in Nepal?",
    questionNe:
      "नेपालमा कतिवटा महानगरपालिकाहरू रहेका छन्?",
    optionAEn: "11",
    optionANe: "११ वटा",
    optionBEn: "6 metropolitan cities",
    optionBNe: "६ वटा",
    optionCEn: "8",
    optionCNe: "८ वटा",
    optionDEn: "4",
    optionDNe: "४ वटा",
    correctOption: "B",
    explanationEn:
      "The 6 Metropolitan Cities of Nepal are: Kathmandu, Lalitpur, Pokhara, Bharatpur, Biratnagar, and Birgunj.",
    explanationNe:
      "नेपालमा काठमाडौँ, ललितपुर, पोखरा, भरतपुर, विराटनगर र वीरगन्ज गरी ६ वटा महानगरपालिका रहेका छन्।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "How many total ward units (वडा) exist across all 753 local levels in Nepal?",
    questionNe:
      "नेपालमा कुल कतिवटा वडाहरू रहेका छन्?",
    optionAEn: "6,680 wards",
    optionANe: "६,६८० वटा",
    optionBEn: "6,500 wards",
    optionBNe: "६,५०० वटा",
    optionCEn: "6,743 wards",
    optionCNe: "६,७४३ वटा",
    optionDEn: "6,800 wards",
    optionDNe: "६,८०० वटा",
    correctOption: "C",
    explanationEn:
      "Across Nepal's 753 municipalities and rural municipalities, there are exactly 6,743 administrative wards.",
    explanationNe:
      "नेपालका ७५३ स्थानीय तहहरू अन्तर्गत कुल ६,७४३ वटा वडाहरू रहेका छन्।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the largest Metropolitan City in Nepal by surface area?",
    questionNe:
      "क्षेत्रफलको आधारमा सबैभन्दा ठूलो महानगरपालिका कुन हो?",
    optionAEn: "Bharatpur Metropolitan City",
    optionANe: "भरतपुर महानगरपालिका",
    optionBEn: "Kathmandu Metropolitan City",
    optionBNe: "काठमाडौँ महानगरपालिका",
    optionCEn: "Lalitpur Metropolitan City",
    optionCNe: "ललितपुर महानगरपालिका",
    optionDEn: "Pokhara Metropolitan City (464.24 sq. km)",
    optionDNe: "पोखरा महानगरपालिका (४६४.२४ वर्ग किमी)",
    correctOption: "D",
    explanationEn:
      "Pokhara Metropolitan City in Kaski covers 464.24 square kilometers, making it Nepal's largest metropolitan city by area.",
    explanationNe:
      "कास्कीको पोखरा महानगरपालिका ४६४.२४ वर्ग किलोमिटर क्षेत्रफलका साथ नेपालको सबैभन्दा ठूलो महानगरपालिका हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which is the smallest Metropolitan City in Nepal by surface area?",
    questionNe:
      "क्षेत्रफलको आधारमा सबैभन्दा सानो महानगरपालिका कुन हो?",
    optionAEn: "Kathmandu Metropolitan City",
    optionANe: "काठमाडौँ महानगरपालिका",
    optionBEn: "Birgunj Metropolitan City",
    optionBNe: "वीरगन्ज महानगरपालिका",
    optionCEn: "Lalitpur Metropolitan City (36.12 sq. km)",
    optionCNe: "ललितपुर महानगरपालिका (३६.१२ वर्ग किमी)",
    optionDEn: "Biratnagar Metropolitan City",
    optionDNe: "विराटनगर महानगरपालिका",
    correctOption: "C",
    explanationEn:
      "Lalitpur Metropolitan City covers only 36.12 square kilometers, making it the smallest metropolitan city in terms of area.",
    explanationNe:
      "ललितपुर महानगरपालिका ३६.१२ वर्ग किलोमिटर क्षेत्रफलसहित क्षेत्रफलको आधारमा नेपालको सबैभन्दा सानो महानगरपालिका हो।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "What is the final official total population of Nepal according to National Census 2078?",
    questionNe:
      "नेपालको राष्ट्रिय जनगणना २०७८ अनुसार नेपालको कुल जनसङ्ख्या कति रहेको छ?",
    optionAEn: "2,95,00,000",
    optionANe: "२,९५,००,०००",
    optionBEn: "2,80,00,000",
    optionBNe: "२,८०,००,०००",
    optionCEn: "2,64,94,504",
    optionCNe: "२,६४,९४,५०४",
    optionDEn: "2,91,64,578",
    optionDNe: "२,९१,६४,५७८",
    correctOption: "D",
    explanationEn:
      "The official final results of National Population and Housing Census 2078 reported Nepal's total population as 2,91,64,578 (Females: 51.02%, Males: 48.98%).",
    explanationNe:
      "राष्ट्रिय जनगणना २०७८ को अन्तिम नतिजा अनुसार नेपालको कुल जनसंख्या २ करोड ९१ लाख ६४ हजार ५७८ (महिला ५१.०२% र पुरुष ४८.९८%) रहेको छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "What was the annual population growth rate of Nepal recorded in Census 2078?",
    questionNe:
      "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको जनसङ्ख्या वृद्धिदर कति रहेको छ?",
    optionAEn: "0.85% per year",
    optionANe: "०.८५ प्रतिशत",
    optionBEn: "0.92% per year",
    optionBNe: "०.९२ प्रतिशत प्रतिवर्ष",
    optionCEn: "1.05% per year",
    optionCNe: "१.०५ प्रतिशत",
    optionDEn: "1.35% per year",
    optionDNe: "१.३५ प्रतिशत",
    correctOption: "B",
    explanationEn:
      "The average annual population growth rate between 2068 and 2078 BS was 0.92% per annum (down from 1.35% in 2068 BS).",
    explanationNe:
      "वि.सं. २०६८ देखि २०७८ सम्मको दशकमा नेपालको वार्षिक औसत जनसंख्या वृद्धिदर ०.९२ प्रतिशत प्रतिवर्ष रहेको छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "What is the population density of Nepal according to Census 2078?",
    questionNe:
      "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको जनघनत्व कति पुगेको छ?",
    optionAEn: "198 persons per sq. km",
    optionANe: "१९८ जना प्रति वर्ग किलोमिटर",
    optionBEn: "205 persons per sq. km",
    optionBNe: "२०५ जना",
    optionCEn: "180 persons per sq. km",
    optionCNe: "१८० जना",
    optionDEn: "190 persons per sq. km",
    optionDNe: "१९० जना",
    correctOption: "A",
    explanationEn:
      "According to Census 2078, the population density of Nepal increased from 180 (in 2068) to 198 persons per square kilometer.",
    explanationNe:
      "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको जनघनत्व १९८ जना प्रति वर्ग किलोमिटर रहेको छ (२०६८ मा १८० जना थियो)।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "Which district has the highest population density in Nepal (5,108 persons per sq. km)?",
    questionNe:
      "नेपालमा सबैभन्दा बढी जनघनत्व भएको जिल्ला कुन हो?",
    optionAEn: "Lalitpur",
    optionANe: "ललितपुर",
    optionBEn: "Kathmandu (5,108 persons/sq. km)",
    optionBNe: "काठमाडौँ (५,१०८ जना/वर्ग किमी)",
    optionCEn: "Bhaktapur (3,361 persons/sq. km)",
    optionCNe: "भक्तपुर (३,३६१)",
    optionDEn: "Dhanusha",
    optionDNe: "धनुषा",
    correctOption: "B",
    explanationEn:
      "Kathmandu district has the highest population density in Nepal with 5,108 people per square kilometer, followed by Bhaktapur with 3,361.",
    explanationNe:
      "काठमाडौँ जिल्ला प्रति वर्ग किलोमिटर ५,१०८ जना जनघनत्वका साथ नेपालको सबैभन्दा बढी जनघनत्व भएको जिल्ला हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "population-and-census",
    questionEn:
      "Which district has the lowest population density in Nepal (3 persons per sq. km)?",
    questionNe:
      "नेपालमा सबैभन्दा कम जनघनत्व भएको जिल्ला कुन हो?",
    optionAEn: "Dolpa",
    optionANe: "डोल्पा",
    optionBEn: "Manang (3 persons/sq. km)",
    optionBNe: "मनाङ (३ जना प्रति वर्ग किलोमिटर)",
    optionCEn: "Mustang",
    optionCNe: "मुस्ताङ",
    optionDEn: "Humla",
    optionDNe: "हुम्ला",
    correctOption: "B",
    explanationEn:
      "Manang has the lowest population density in Nepal with only 3 persons per square kilometer (followed by Mustang with around 4).",
    explanationNe:
      "मनाङ जिल्लामा प्रति वर्ग किलोमिटर ३ जना मात्र बसोबास गर्दछन्, जुन नेपालको सबैभन्दा कम जनघनत्व हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district of Nepal is known for having a geographical outline resembling a plough (हलो आकार)?",
    questionNe:
      "नेपालको कुन जिल्लालाई 'हलो आकारको जिल्ला' भनिन्छ?",
    optionAEn: "Ramechhap",
    optionANe: "रामेछाप",
    optionBEn: "Baglung",
    optionBNe: "बागलुङ",
    optionCEn: "Dolakha",
    optionCNe: "दोलखा",
    optionDEn: "Parbat",
    optionDNe: "पर्वत",
    correctOption: "A",
    explanationEn:
      "Due to its distinctive contour on map projections, Ramechhap is famously referred to as the plough-shaped district (हलो आकारको जिल्ला).",
    explanationNe:
      "नक्सामा हेर्दा हलोको जस्तो आकार देखिने हुनाले रामेछाप जिल्लालाई 'हलो आकारको जिल्ला' भनिन्छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district's geographic boundary resembles the map of Nepal itself?",
    questionNe:
      "नेपालको कुन जिल्लालाई 'नेपालको नक्सा आकारको जिल्ला' भनिन्छ?",
    optionAEn: "Baglung",
    optionANe: "बागलुङ",
    optionBEn: "Myagdi",
    optionBNe: "म्याग्दी",
    optionCEn: "Chitwan",
    optionCNe: "चितवन",
    optionDEn: "Surkhet",
    optionDNe: "सुर्खेत",
    correctOption: "A",
    explanationEn:
      "Baglung district's boundary lines closely resemble the horizontal elongated contour map of Nepal.",
    explanationNe:
      "बागलुङ जिल्लाको बाह्य नक्सा दुरुस्त नेपालको नक्सासँग मिल्दोजुल्दो आकारको देखिन्छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district in Nepal is popularly known as the 'Egg Basket' (अण्डाको बास्केट)?",
    questionNe:
      "नेपालको 'एग बास्केट' (Egg Basket) उपनामले चिनिने जिल्ला कुन हो?",
    optionAEn: "Makwanpur",
    optionANe: "मकवानपुर",
    optionBEn: "Jhapa",
    optionBNe: "झापा",
    optionCEn: "Chitwan",
    optionCNe: "चितवन",
    optionDEn: "Kavre",
    optionDNe: "काभ्रे",
    correctOption: "C",
    explanationEn:
      "Chitwan produces the highest volume of poultry and eggs in Nepal, earning it the title 'Egg Basket of Nepal'.",
    explanationNe:
      "कुखुरापालन तथा अण्डा उत्पादनमा देशकै अग्रणी रहेकाले चितवन जिल्लालाई नेपालको 'एग बास्केट' भनिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district of Nepal is celebrated as the primary 'Coffee District' (कफीको जिल्ला)?",
    questionNe:
      "नेपालको 'कफीको जिल्ला' भनेर कुन जिल्लालाई चिनिन्छ?",
    optionAEn: "Gulmi",
    optionANe: "गुल्मी",
    optionBEn: "Syangja",
    optionBNe: "स्याङ्जा",
    optionCEn: "Kaski",
    optionCNe: "कास्की",
    optionDEn: "Palpa",
    optionDNe: "पाल्पा",
    correctOption: "A",
    explanationEn:
      "Gulmi (especially Aapchaur, where Hira Giri planted the first coffee sapling brought from Burma in 1995 BS) is renowned as the cradle and coffee district of Nepal.",
    explanationNe:
      "वि.सं. १९९५ मा हीरा गिरीले बर्माबाट कफीको बिउ ल्याएर गुल्मीको आँपचौरमा रोपेका थिए। त्यसैले गुल्मीलाई नेपालको कफीको जिल्ला भनिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "provinces-and-districts",
    questionEn:
      "Which district is officially revered as the 'Capital of Tea' (चियाको राजधानी) in Nepal?",
    questionNe:
      "नेपालको 'चियाको राजधानी' भनेर कुन जिल्लालाई चिनिन्छ?",
    optionAEn: "Panchthar",
    optionANe: "पाँचथर",
    optionBEn: "Dhankuta",
    optionBNe: "धनकुटा",
    optionCEn: "Ilam",
    optionCNe: "इलाम",
    optionDEn: "Jhapa",
    optionDNe: "झापा",
    correctOption: "C",
    explanationEn:
      "Ilam in Koshi Province is celebrated as the tea capital of Nepal, where tea plantation first began in 1920 BS during Badahakim Jung Bahadur Rana's son-in-law Gajraj Singh Thapa.",
    explanationNe:
      "वि.सं. १९२० मा तत्कालीन बडाहाकिम गजराज सिंह थापाले चिया रोपेर सुरुआत गरेको इलाम जिल्लालाई नेपालको चियाको राजधानी मानिन्छ।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC First Paper / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "Gurumantra Academy TSC / Loksewa",
    isImportant: true,
  },

  // ==========================================
  // SECTION 6: WORLD GEOGRAPHY (APF, POLICE & TSC PAST PAPERS)
  // ==========================================
  {
    topicSlug: "world-geography",
    questionEn:
      "Which body of water separates the continents of Asia and Africa?",
    questionNe:
      "एसिया र अफ्रिका महादेशलाई कुन सागरले छुट्याएको छ?",
    optionAEn: "Red Sea (लाल सागर)",
    optionANe: "लाल सागर",
    optionBEn: "Caspian Sea",
    optionBNe: "क्यास्पियन सागर",
    optionCEn: "Dead Sea",
    optionCNe: "मृत सागर",
    optionDEn: "None of the above",
    optionDNe: "कुनै पनि होइनन्",
    correctOption: "A",
    explanationEn:
      "The Red Sea (together with the Suez Canal and Gulf of Suez) separates the northeastern corner of Africa from the Arabian Peninsula of southwest Asia.",
    explanationNe:
      "लाल सागर (Red Sea) र स्वेज नहरले एसिया र अफ्रिका महादेशको सिमाना छुट्याएका छन्।",
    difficulty: "easy",
    commission: "APF (सशस्त्र प्रहरी बल)",
    examLevel: "APF ASI / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "APF ASI 2080 / TSC First Paper",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which is the saltiest lake in the world?",
    questionNe:
      "विश्वको सबैभन्दा नुनिलो पानीको ताल कुन हो?",
    optionAEn: "South China Sea",
    optionANe: "साउथ चाइना सि",
    optionBEn: "Dead Sea (मृत सागर)",
    optionBNe: "मृत सागर",
    optionCEn: "Caspian Sea",
    optionCNe: "क्यास्पियन सागर",
    optionDEn: "Lake Superior",
    optionDNe: "सुपेरियर ताल",
    correctOption: "B",
    explanationEn:
      "The Dead Sea bordering Jordan, Israel, and Palestine has a salinity of over 34%, making it one of the hypersaline bodies of water where humans float effortlessly.",
    explanationNe:
      "मृत सागर (Dead Sea) विश्वको अत्यधिक नुनिलो पानीको ताल हो जहाँ नुनको मात्रा अत्यधिक भएकाले मानिस पानीमा सजिलै तैरिन्छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / TSC",
    isPreviousYear: true,
    previousYearInfo: "Kharidar 2072 / TSC LSL",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which continent is known by the moniker 'Continent of Diversities' (विषमताको महादेश)?",
    questionNe:
      "विषमताको महादेशको उपनामले चिनिने महादेश कुन हो?",
    optionAEn: "North America",
    optionANe: "उत्तर अमेरिका",
    optionBEn: "South America",
    optionBNe: "दक्षिण अमेरिका",
    optionCEn: "Asia (एसिया)",
    optionCNe: "एसिया",
    optionDEn: "Australia",
    optionDNe: "अष्ट्रेलिया",
    correctOption: "C",
    explanationEn:
      "Asia is called the 'Continent of Diversities' because it contains the world's highest peak (Everest), lowest land point (Dead Sea), extreme climates, and diverse cultures and languages.",
    explanationNe:
      "विश्वको सबैभन्दा अग्लो चुचुरो सगरमाथादेखि होचो भूभाग मृत सागर, चरम हावापानी र सांस्कृतिक विविधताका कारण एसियालाई 'विषमताको महादेश' भनिन्छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "ASI / TSC",
    isPreviousYear: true,
    previousYearInfo: "ASI 2075 / TSC First Paper",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "How many landlocked countries (भूपरिवेष्ठित राष्ट्र) are there in the continent of Asia?",
    questionNe:
      "एसिया महादेशमा कतिवटा भूपरिवेष्ठित राष्ट्र छन्?",
    optionAEn: "10 countries",
    optionANe: "१० वटा",
    optionBEn: "11 countries",
    optionBNe: "११ वटा",
    optionCEn: "12 countries",
    optionCNe: "१२ वटा",
    optionDEn: "16 countries",
    optionDNe: "१६ वटा",
    correctOption: "C",
    explanationEn:
      "Asia has 12 landlocked nations: Nepal, Bhutan, Afghanistan, Mongolia, Laos, Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan, Armenia, and Azerbaijan.",
    explanationNe:
      "एसिया महादेशमा नेपाल, भुटान, अफगानिस्तान, मंगोलिया, लाओस, कजाकिस्तान, उज्वेकिस्तान, किर्गिस्तान, ताजिकिस्तान, तुर्कमेनिस्तान, आर्मेनिया र अजरबैजान गरी कुल १२ वटा भूपरिवेष्ठित देशहरू रहेका छन्।",
    difficulty: "medium",
    commission: "Koshi PPSC",
    examLevel: "Fifth Level / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "Koshi 5th 2080 / Kharidar 2081",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which is the deepest oceanic trench in the world, located in the Pacific Ocean?",
    questionNe:
      "तल दिइएका मध्ये प्रशान्त महासागरको सबैभन्दा गहिरो भाग कुन हो?",
    optionAEn: "Java Trench",
    optionANe: "जाभा ट्रेन्च",
    optionBEn: "Mariana Trench (मारियाना ट्रेन्च)",
    optionBNe: "मारियाना ट्रेन्च",
    optionCEn: "Bermuda Trench",
    optionCNe: "बर्मुडा ट्रेन्च",
    optionDEn: "Puerto Rico Trench",
    optionDNe: "पोटोरिको ट्रेन्च",
    correctOption: "B",
    explanationEn:
      "The Mariana Trench in the western Pacific Ocean reaches a depth of approximately 11,034 meters (Challenger Deep), making it the deepest point on Earth.",
    explanationNe:
      "प्रशान्त महासागरमा रहेको मारियाना ट्रेन्च (च्यालेन्जर डिप, करिब ११,०३४ मिटर गहिरो) पृथ्वीको सबैभन्दा गहिरो स्थान हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC Primary / Lower Secondary",
    isPreviousYear: true,
    previousYearInfo: "TSC PL 2078 / TSC LSL 2080",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which sea touches the coastlines of three continents (Europe, Asia, and Africa)?",
    questionNe:
      "कुन समुन्द्रको सिमानाले तीनवटा महादेशलाई छोएको छ?",
    optionAEn: "Caribbean Sea",
    optionANe: "क्यारेबियन सागर",
    optionBEn: "Mediterranean Sea (मेडेिटेरियन सागर)",
    optionBNe: "मेडिटेरियन सागर",
    optionCEn: "Caspian Sea",
    optionCNe: "क्यास्पियन सागर",
    optionDEn: "Black Sea",
    optionDNe: "ब्ल्याक सागर",
    correctOption: "B",
    explanationEn:
      "The Mediterranean Sea is bounded by Europe to the north, Africa to the south, and Asia to the east.",
    explanationNe:
      "भूमध्य सागर (Mediterranean Sea) ले उत्तरमा युरोप, दक्षिणमा अफ्रिका र पूर्वमा एसिया गरी तीन महादेशलाई छोएको छ।",
    difficulty: "medium",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC Secondary Level (मा.वि.)",
    isPreviousYear: true,
    previousYearInfo: "TSC SL 2080 / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which is the second largest continent in the world by surface area?",
    questionNe:
      "तलका मध्ये क्षेत्रफलका हिसाबले दोस्रो ठूलो महादेश कुन हो?",
    optionAEn: "North America",
    optionANe: "उत्तर अमेरिका",
    optionBEn: "South America",
    optionBNe: "दक्षिण अमेरिका",
    optionCEn: "Asia",
    optionCNe: "एसिया",
    optionDEn: "Africa (अफ्रिका)",
    optionDNe: "अफ्रिका",
    correctOption: "D",
    explanationEn:
      "Africa is the second largest continent by land area (approx. 30.37 million sq. km) after Asia.",
    explanationNe:
      "एसियापछिको दोस्रो ठूलो महादेश अफ्रिका हो, जसले पृथ्वीको कुल जमिनको करिब २० प्रतिशत भूभाग ओगटेको छ।",
    difficulty: "easy",
    commission: "APF (सशस्त्र प्रहरी बल)",
    examLevel: "APF ASI / Military Cadet",
    isPreviousYear: true,
    previousYearInfo: "APF ASI 2071 / CADET 2077",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which continent is traditionally referred to as the 'Dark Continent' (अन्धकार वा कालो अध्यारो महादेश)?",
    questionNe:
      "अन्धकार/कालो अध्यारो महादेश भनेर कुन महादेशलाई भनिन्छ?",
    optionAEn: "Australia",
    optionANe: "अष्ट्रेलिया",
    optionBEn: "South America",
    optionBNe: "दक्षिण अमेरिका",
    optionCEn: "Africa (अफ्रिका)",
    optionCNe: "अफ्रिका",
    optionDEn: "Europe",
    optionDNe: "युरोप",
    correctOption: "C",
    explanationEn:
      "Africa was historically dubbed the 'Dark Continent' by 19th-century Europeans because its interior geography and civilizations remained largely unknown to the Western world.",
    explanationNe:
      "१९औँ शताब्दीसम्म युरोपेलीहरूका लागि यसको भित्री भूगोल अज्ञात रहेकाले अफ्रिकालाई 'अन्धकारको महादेश' भनिएको थियो।",
    difficulty: "easy",
    commission: "APF (सशस्त्र प्रहरी बल)",
    examLevel: "APF ASI / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "APF ASI 2071/2080",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Through the central middle part of which continent does the Equator (भूमध्य रेखा) pass?",
    questionNe:
      "कुन महादेशलाई भूमध्य रेखाले बीच भागमा काटेको छ?",
    optionAEn: "North America",
    optionANe: "उत्तर अमेरिका",
    optionBEn: "Africa (अफ्रिका)",
    optionBNe: "अफ्रिका",
    optionCEn: "Europe",
    optionCNe: "युरोप",
    optionDEn: "Asia",
    optionDNe: "एसिया",
    correctOption: "B",
    explanationEn:
      "The Equator cuts directly across the central belly of Africa, making it the only continent spanning across both the Tropic of Cancer and Tropic of Capricorn equally.",
    explanationNe:
      "भूमध्य रेखाले अफ्रिका महादेशलाई लगभग दुई बराबर भागमा काटेर गएको छ। यो कर्कट रेखा, मकर रेखा र भूमध्य रेखा तीनवटै पार हुने एकमात्र महादेश हो।",
    difficulty: "easy",
    commission: "Nepal Police / APF",
    examLevel: "Inspector / Subba",
    isPreviousYear: true,
    previousYearInfo: "APF Inspector 2082 / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which is the smallest landlocked country in the continent of Africa?",
    questionNe:
      "तलका मध्ये अफ्रिका महादेशको सबैभन्दा सानो भूपरिवेष्ठित देश कुन हो?",
    optionAEn: "Guinea",
    optionANe: "Guinea",
    optionBEn: "Togo",
    optionBNe: "Togo",
    optionCEn: "Djibouti",
    optionCNe: "Djibouti",
    optionDEn: "Eswatini (Swaziland)",
    optionDNe: "Eswatini",
    correctOption: "D",
    explanationEn:
      "The Kingdom of Eswatini (formerly Swaziland), landlocked between South Africa and Mozambique, is Africa's smallest landlocked nation with an area of just 17,364 sq. km.",
    explanationNe:
      "अफ्रिका महादेशको सबैभन्दा सानो भूपरिवेष्ठित देश एस्वातिनी (Eswatini, पहिले स्वाजिल्याण्ड भनिने) हो।",
    difficulty: "hard",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba",
    isPreviousYear: true,
    previousYearInfo: "NASU 2080 / TSC First Paper",
    isImportant: true,
  },
  {
    topicSlug: "world-geography",
    questionEn:
      "Which continent is known by the historical title 'New World' (नयाँ संसार)?",
    questionNe:
      "'नयाँ संसार' (New World) उपनामले चिनिने महादेश कुन हो?",
    optionAEn: "North America (उत्तर अमेरिका)",
    optionANe: "उत्तर अमेरिका",
    optionBEn: "Antarctica",
    optionBNe: "अन्टार्कटिका",
    optionCEn: "South America",
    optionCNe: "दक्षिण अमेरिका",
    optionDEn: "Australia",
    optionDNe: "अस्ट्रेलिया",
    correctOption: "A",
    explanationEn:
      "Following Christopher Columbus's voyage across the Atlantic in 1492, North America (the Americas) was widely proclaimed by Europeans as the 'New World'.",
    explanationNe:
      "सन् १४९२ मा क्रिस्टोफर कोलम्बसले पत्ता लगाएपछि उत्तर अमेरिकालाई 'नयाँ संसार' (New World) भनिन थालियो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC Primary / Banking",
    isPreviousYear: true,
    previousYearInfo: "TSC PL 2081 / RBCL 4th 2082",
    isImportant: true,
  },

  // ==========================================
  // SECTION 7: ANCIENT & MEDIEVAL HISTORY OF NEPAL
  // ==========================================
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "What was Nepal called during the Dwapar Yuga according to ancient Hindu scriptures?",
    questionNe:
      "द्वापर युगमा नेपाललाई के भनिन्थ्यो?",
    optionAEn: "Muktisopan (मुक्तिसोपान)",
    optionANe: "मुक्तिसोपान",
    optionBEn: "Satyawati",
    optionBNe: "सत्यवती",
    optionCEn: "Tapovan",
    optionCNe: "तपोवन",
    optionDEn: "Nepal",
    optionDNe: "नेपाल",
    correctOption: "A",
    explanationEn:
      "According to Hindu scriptures: in Satya Yuga Nepal was called Satyawati; in Treta Yuga, Tapovan; in Dwapar Yuga, Muktisopan; and in Kali Yuga, Nepal.",
    explanationNe:
      "पौराणिक धार्मिक ग्रन्थ अनुसार सत्य युगमा सत्यवती, त्रेता युगमा तपोवन, द्वापर युगमा मुक्तिसोपान र कलि युगमा नेपाल भनिन्छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nepal Electricity Authority 4th",
    isPreviousYear: true,
    previousYearInfo: "ने.वि.प्रा. चौथो २०७५ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which was the very first recorded dynasty to establish a ruling monarchy in Nepal?",
    questionNe:
      "सर्वप्रथम नेपालमा कुन वंशका राजाहरूले राज्य गरेका थिए?",
    optionAEn: "Gopal Dynasty (गोपालवंश)",
    optionANe: "गोपालवंश",
    optionBEn: "Som Dynasty",
    optionBNe: "सोमवंश",
    optionCEn: "Kirat Dynasty",
    optionCNe: "किराँतवंश",
    optionDEn: "Lichchhavi Dynasty",
    optionDNe: "लिच्छविवंश",
    correctOption: "A",
    explanationEn:
      "The cowherd Gopal dynasty (with Bhuktaman as their first king) was the first documented dynasty to rule the Kathmandu Valley for 8 generations (521 years).",
    explanationNe:
      "काठमाडौँ उपत्यकामा सर्वप्रथम गाई पाल्ने गोपाल वंशका ८ जना राजाहरूले ५२१ वर्ष शासन गरेका थिए। पहिलो राजा भुक्तमान (भूमिगुप्त) थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Nayab Subba / CTEVT Officer",
    isPreviousYear: true,
    previousYearInfo: "Nayab Subba 2069 / CTEVT 2079",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "For how many total years did the Mahispal (Abhir / Buffalo-herder) dynasty rule over Nepal?",
    questionNe:
      "नेपालमा महिषपाल वंशले कति वर्ष शासन गरे?",
    optionAEn: "111 years (३ जना राजा)",
    optionANe: "१११ वर्ष",
    optionBEn: "121 years",
    optionBNe: "१२१ वर्ष",
    optionCEn: "521 years",
    optionCNe: "५२१ वर्ष",
    optionDEn: "1500 years",
    optionDNe: "१५०० वर्ष",
    correctOption: "A",
    explanationEn:
      "The Mahispal (Abhir) dynasty ruled for 111 years with 3 successive kings: Bar Singh, Jaya Singh, and Bhuwan Singh before being overthrown by Yalambar.",
    explanationNe:
      "महिषपाल (आभिर/भैंसी पाल्ने) वंशका ३ जना राजाहरू (बरसिंह, जयसिंह र भुवनसिंह) ले जम्मा १११ वर्ष नेपालमा शासन गरेका थिए।",
    difficulty: "medium",
    commission: "Nepal Telecom",
    examLevel: "NTC Technician 4th Level",
    isPreviousYear: true,
    previousYearInfo: "Nepal Telecom 2080 / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who was the last king of the Kirat dynasty in Nepal?",
    questionNe:
      "नेपालका अन्तिम किराँती राजा को थिए?",
    optionAEn: "Bhupati",
    optionANe: "भूपति",
    optionBEn: "Yalambar",
    optionBNe: "यलम्बर",
    optionCEn: "Gasti (गस्ती)",
    optionCNe: "गस्ती",
    optionDEn: "Jitedasti",
    optionDNe: "जितेदास्ती",
    correctOption: "C",
    explanationEn:
      "King Gasti was the 29th and final Kirati monarch, defeated by the Som dynasty / Nimish. King Yalambar was the first Kirati monarch.",
    explanationNe:
      "किराँत वंशका प्रथम राजा यलम्बर हुन् भने २९औँ तथा अन्तिम राजा गस्ती हुन्।",
    difficulty: "easy",
    commission: "Rastriya Banijya Bank",
    examLevel: "RBB 6th Level",
    isPreviousYear: true,
    previousYearInfo: "रा.बा.क.लि. छैटौं २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "During the reign of which Kirat king did the Mauryan Emperor Ashoka visit Kathmandu and Lumbini?",
    questionNe:
      "सम्राट अशोक नेपालको लुम्बिनी र काठमाडौँ कुन किराँत राजाको पालामा आएका थिए?",
    optionAEn: "Humati",
    optionANe: "हुमती",
    optionBEn: "Sthunko (स्थुंको)",
    optionBNe: "स्थुंको",
    optionCEn: "Jitedasti",
    optionCNe: "जितेदास्ती",
    optionDEn: "Yalung",
    optionDNe: "यलुङ",
    correctOption: "B",
    explanationEn:
      "Emperor Ashoka visited Kathmandu Valley and Lumbini during the reign of the 14th Kirat King Sthunko, erecting four Buddhist stupas in Patan and the Ashoka Pillar in Lumbini.",
    explanationNe:
      "१४औँ किराँती राजा स्थुंकोको पालामा मौर्य सम्राट अशोक नेपाल आएका थिए र उनले पाटनमा चारवटा थुर (अशोक स्तूप) निर्माण गराएका थिए।",
    difficulty: "medium",
    commission: "Nepal Bank Limited",
    examLevel: "NBL Assistant 2nd / NTC 2080",
    isPreviousYear: true,
    previousYearInfo: "ने.बैं.लि. २०७५ / नेपाल टेलिकम २०८०",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "The Lichchhavi kings of Nepal historically belonged to which solar royal lineage?",
    questionNe:
      "लिच्छवि शासकहरू मूलतः कुन वंशीय राजाका रूपमा चिनिन्छन्?",
    optionAEn: "Chandravanshi (Lunar dynasty)",
    optionANe: "चन्द्रवंशी",
    optionBEn: "Suryavanshi (Solar dynasty)",
    optionBNe: "सूर्यवंशी",
    optionCEn: "Yaduvanshi",
    optionCNe: "यदुवंशी",
    optionDEn: "Dharmavanshi",
    optionDNe: "धर्मवंशी",
    correctOption: "B",
    explanationEn:
      "The Lichchhavis traced their genealogy to the Suryavanshi (Solar lineage) of Ayodhya, claiming descent from King Raghu and Rama.",
    explanationNe:
      "लिच्छवि राजाहरू मूलतः अयोध्याका सूर्यवंशी क्षत्रिय राजाका रूपमा परिचित थिए।",
    difficulty: "medium",
    commission: "National News Agency (RSS)",
    examLevel: "RSS 4th Level",
    isPreviousYear: true,
    previousYearInfo: "रासस चौथो २०७८ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "In which year did the documented reign of King Mandev I, the first authentic historical king of Nepal, begin?",
    questionNe:
      "लिच्छवि राजा मानदेवको शासन कहिले देखि सुरु भएको मानिन्छ?",
    optionAEn: "520 BS",
    optionANe: "वि.सं. ५२०",
    optionBEn: "521 BS (464 AD)",
    optionBNe: "वि.सं. ५२१",
    optionCEn: "522 BS",
    optionCNe: "वि.सं. ५२२",
    optionDEn: "523 BS",
    optionDNe: "वि.सं. ५२३",
    correctOption: "B",
    explanationEn:
      "King Mandev I's Changu Narayan stone pillar inscription dates back to Saka Samvat 386 (521 BS / 464 AD), marking the commencement of Nepal's recorded epigraphic history.",
    explanationNe:
      "चाँगुनारायणको अभिलेख अनुसार वि.सं. ५२१ (शक संवत् ३८६) मा राजा मानदेवको शासनकालको प्रमाण भेटिन्छ, जहाँबाट नेपालको प्रमाणित इतिहास सुरु हुन्छ।",
    difficulty: "medium",
    commission: "Press Council Nepal",
    examLevel: "Officer 4th Level",
    isPreviousYear: true,
    previousYearInfo: "प्रेस काउन्सिल नेपाल २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which famous Lichchhavi ruler introduced the 'Gupta Samvat' calendar era in Nepal?",
    questionNe:
      "गुप्त सम्वत् कुन लिच्छविकालिन शासकले चलाएका थिए?",
    optionAEn: "Mandev",
    optionANe: "मानदेव",
    optionBEn: "Amshuverma (अंशुवर्मा)",
    optionBNe: "अंशुवर्मा",
    optionCEn: "Gunakamdev",
    optionCNe: "गुणकामदेव",
    optionDEn: "Narendra Dev",
    optionDNe: "नरेन्द्रदेव",
    correctOption: "B",
    explanationEn:
      "Mahasamanta Amshuverma (who ruled during the Lichchhavi golden age) introduced his own calendar era (Amshuverma Samvat / Gupta Samvat).",
    explanationNe:
      "महाविभूति अंशुवर्माले वि.सं. ६६३ तिर पुरानो शक सम्वत् हटाई आफ्नै नयाँ सम्वत् (गुप्त सम्वत्) प्रचलनमा ल्याएका थिए।",
    difficulty: "medium",
    commission: "National News Agency (RSS)",
    examLevel: "RSS 4th Level",
    isPreviousYear: true,
    previousYearInfo: "रासस चौथो २०७८ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "What was the name of Mahasamanta Amshuverma's sister, whose marriage cemented political alliances in Lichchhavi Nepal?",
    questionNe:
      "अंशुवर्माकी बहिनीको नाम के थियो?",
    optionAEn: "Jayadevi",
    optionANe: "जयदेवी",
    optionBEn: "Rajyadevi",
    optionBNe: "राज्यदेवी",
    optionCEn: "Bhogdevi (भोगदेवी)",
    optionCNe: "भोगदेवी",
    optionDEn: "Manadevi",
    optionDNe: "मानदेवी",
    correctOption: "C",
    explanationEn:
      "Amshuverma's sister Bhogdevi was married to the Indian Surasena king Rajaputra Shurashsen, while his daughter Bhrikuti was married to Tibetan King Songtsen Gampo.",
    explanationNe:
      "अंशुवर्माकी बहिनीको नाम भोगदेवी थियो, जसको विवाह भारतीय सूरसेन वंशका राजकुमार शूरसेनसँग गरिएको थियो। छोरी भृकुटीको विवाह तिब्बती राजा सङ्चन गम्पोसँग भएको थियो।",
    difficulty: "hard",
    commission: "Shahid Gangalal Heart Centre",
    examLevel: "5th Level / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "सहिद गंगालाल रा.हृ.के. २०७९ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "During the reign of which king was the national calendar era 'Nepal Samvat' instituted in 879 AD (936 BS)?",
    questionNe:
      "नेपाल सम्वत् कुन राजाको पालादेखि प्रचलनमा आएको हो?",
    optionAEn: "Amshuverma",
    optionANe: "अंशुवर्मा",
    optionBEn: "Raghavdev (राघवदेव)",
    optionBNe: "राघवदेव",
    optionCEn: "Narendra Dev",
    optionCNe: "नरेन्द्रदेव",
    optionDEn: "Ram Shah",
    optionDNe: "राम शाह",
    correctOption: "B",
    explanationEn:
      "Nepal Samvat was founded by merchant Shankhadhar Sakhwa on October 20, 879 AD (Kartik Shukla Pratipada, 936 BS) during the reign of King Raghavdev.",
    explanationNe:
      "वि.सं. ९३६ (सन् ८७९) मा शंखधर साख्वाले जनताको ऋण मोचन गरी राजा राघवदेवको पालामा नेपाल सम्वत्को थालनी गरेका थिए।",
    difficulty: "easy",
    commission: "Nepal Telecom",
    examLevel: "NTC 4th Level Technician",
    isPreviousYear: true,
    previousYearInfo: "नेपाल टेलिकम २०७९ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which Lichchhavi king was famously praised as the 'Full Moon of the Lichchhavi Sky' (लिच्छविकालिन आकाशको पूर्णचन्द्र)?",
    questionNe:
      "लिच्छविकालिन आकाशको पूर्णचन्द्र भनी चिनिने राजा को हुन्?",
    optionAEn: "Narendra Dev (नरेन्द्रदेव)",
    optionANe: "नरेन्द्रदेव",
    optionBEn: "Amshuverma",
    optionBNe: "अंशुवर्मा",
    optionCEn: "Mandev",
    optionCNe: "मानदेव",
    optionDEn: "Shivadev I",
    optionDNe: "शिवदेव प्रथम",
    correctOption: "A",
    explanationEn:
      "King Narendra Dev was celebrated for regaining the throne with Tibetan support, establishing the Bhadraniwas palace, introducing Pan and Puran coins, and promoting trade, earning the title 'Full Moon of the Lichchhavi Sky'.",
    explanationNe:
      "भद्राधिवास भवन निर्माण, भोटो जात्रा सञ्चालन र पण तथा पुराण मुद्रा चलाएका राजा नरेन्द्रदेवलाई लिच्छविकालिन आकाशको पूर्णचन्द्र भनिन्छ।",
    difficulty: "medium",
    commission: "Nepal Food Corporation (खाद्य संस्थान)",
    examLevel: "4th Level / Loksewa",
    isPreviousYear: true,
    previousYearInfo: "नेपाल खाद्य संस्थान २०७५ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who was the author of 'Manav Nyayashastra', the first comprehensive codification of legal and social laws in medieval Nepal?",
    questionNe:
      "नेपालको पहिलो लिखित कानुन मानिने 'मानव न्यायशास्त्र' का लेखक/प्रणेता को हुन्?",
    optionAEn: "Pratap Malla",
    optionANe: "प्रताप मल्ल",
    optionBEn: "Siddhi Narsingh Malla",
    optionBNe: "सिद्धिनरसिंह मल्ल",
    optionCEn: "Amshuverma",
    optionCNe: "अंशुवर्मा",
    optionDEn: "Jayasthiti Malla (जयस्थिति मल्ल)",
    optionDNe: "जयस्थिति मल्ल",
    correctOption: "D",
    explanationEn:
      "King Jayasthiti Malla commissioned Indian scholars (including Kirtinath Upadhyaya) to write 'Manav Nyayashastra' in 1436 BS, establishing codified laws, land classification, and caste duties.",
    explanationNe:
      "वि.सं. १४३६ मा राजा जयस्थिति मल्लले विद्वानहरूको सहयोगमा तयार पारेको 'मानव न्यायशास्त्र' नेपालको पहिलो लिखित कानुनी तथा सामाजिक संहिता हो।",
    difficulty: "easy",
    commission: "CTEVT",
    examLevel: "CTEVT Assistant 1st / Officer",
    isPreviousYear: true,
    previousYearInfo: "CTEVT २०७९ / Loksewa",
    isImportant: true,
  },

  // ==========================================
  // SECTION 8: ANGLO-NEPAL WAR & UNIFICATION
  // ==========================================
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "When did the Anglo-Nepal War (अंग्रेज-नेपाल युद्ध) formally end?",
    questionNe:
      "नेपाल-अंग्रेज युद्ध कहिले समाप्त भएको थियो?",
    optionAEn: "February 1816",
    optionANe: "फेब्रुअरी, १८१६",
    optionBEn: "March 1816 (4 March 1816)",
    optionBNe: "मार्च, १८१६",
    optionCEn: "December 1815",
    optionCNe: "डिसेम्बर, १८१५",
    optionDEn: "September 1815",
    optionDNe: "सेप्टेम्बर, १८१५",
    correctOption: "B",
    explanationEn:
      "The Anglo-Nepal War ended on March 4, 1816, when the Sugauli Treaty was ratified and exchanged after hostilities ceased.",
    explanationNe:
      "नेपाल-अंग्रेज युद्ध सुगौली सन्धिको आदानप्रदान भएसँगै सन् १८१६ मार्च ४ मा औपचारिक रूपमा समाप्त भएको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer Cadet",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०७८ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "What was the exact historical duration of the Anglo-Nepal War?",
    questionNe:
      "नेपाल-अंग्रेज युद्धको वास्तविक समयावधि कुन हो?",
    optionAEn: "1 November 1814 – 4 March 1816",
    optionANe: "1 Nov 1814 – 4 March 1816",
    optionBEn: "1 December 1814 – 4 March 1816",
    optionBNe: "1 Dec 1814 – 4 March 1816",
    optionCEn: "1 September 1814 – 4 March 1816",
    optionCNe: "1 Sep 1814 – 4 March 1816",
    optionDEn: "1 October 1818 – 4 March 1816",
    optionDNe: "1 Oct 1818 – 4 March 1816",
    correctOption: "A",
    explanationEn:
      "Lord Hastings formally declared war against Nepal on November 1, 1814, and hostilities formally concluded with the treaty exchange on March 4, 1816.",
    explanationNe:
      "अंग्रेज गभर्नर लर्ड हेस्टिङ्सले १ नोभेम्बर १८१४ मा युद्ध घोषणा गरेका थिए र ४ मार्च १८१६ मा सुगौली सन्धि प्रमाणीकरणसँगै युद्ध सकिएको थियो।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०७९ / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who signed the historic Treaty of Sugauli on behalf of the Government of Nepal?",
    questionNe:
      "सुगौली सन्धिमा नेपालको तर्फबाट हस्ताक्षर कसले गरेका थिए?",
    optionAEn: "Kaji Amar Singh Thapa and Bhaktavar Singh Thapa",
    optionANe: "काजी अमरसिंह थापा र कर्णेल भक्तवरसिंह थापा",
    optionBEn: "Ranganath Pandit and Dalbhanjan Pande",
    optionBNe: "रङ्गनाथ पण्डित र दलभञ्जन पाँडे",
    optionCEn: "Pandit Gajaraj Mishra and Chandra Shekhar Upadhyaya",
    optionCNe: "पण्डित गजराज मिश्र र चन्द्रशेखर उपाध्याय",
    optionDEn: "Bhimsen Thapa and Ranodhoj Thapa",
    optionDNe: "भीमसेन थापा र रणध्वज थापा",
    correctOption: "C",
    explanationEn:
      "The Sugauli Treaty was signed on behalf of Nepal by Royal Preceptor Pandit Gajaraj Mishra and Chandra Shekhar Upadhyaya, and by Lieutenant Colonel Paris Bradshaw for the British East India Company.",
    explanationNe:
      "सुगौली सन्धिमा नेपालको तर्फबाट राजगुरु गजराज मिश्र र चन्द्रशेखर उपाध्यायले हस्ताक्षर गरेका थिए भने इस्ट इन्डिया कम्पनीका तर्फबाट पेरिस ब्राडशाले हस्ताक्षर गरेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०८० / Loksewa 2081",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who was the reigning King of Nepal when the Sugauli Treaty was concluded in 1816 AD?",
    questionNe:
      "नेपाल र अंग्रेजबीच सुगौली सन्धि हुँदा नेपालका राजा को थिए?",
    optionAEn: "Rajendra Bikram Shah",
    optionANe: "राजेन्द्रविक्रम शाह",
    optionBEn: "Surendra Bikram Shah",
    optionBNe: "सुरेन्द्रविक्रम शाह",
    optionCEn: "Ran Bahadur Shah",
    optionCNe: "रणबहादुर शाह",
    optionDEn: "Girvanyuddha Bikram Shah (गीर्वाणयुद्धविक्रम शाह)",
    optionDNe: "गीर्वाणयुद्धविक्रम शाह",
    correctOption: "D",
    explanationEn:
      "King Girvanyuddha Bikram Shah was on the throne during the Anglo-Nepal War and Sugauli Treaty, while Mukhtiyar Bhimsen Thapa administered state affairs.",
    explanationNe:
      "सन् १८१४-१८१६ को सुगौली सन्धि हुँदा नेपालका राजा गीर्वाणयुद्धविक्रम शाह थिए र मुख्तियार भीमसेन थापा थिए।",
    difficulty: "easy",
    commission: "Armed Police Force (APF)",
    examLevel: "APF Inspector / Koshi 4th",
    isPreviousYear: true,
    previousYearInfo: "सशस्त्र प्रहरी निरीक्षक २०७८ / कोशी चौथो २०७९",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Who was the Supreme Commander of the Gorkhali Army on the Western Front during the Anglo-Nepal War?",
    questionNe:
      "महाकाली नदीको पश्चिम क्षेत्रमा रक्षात्मक कारबाहीका लागि नेपालको तर्फबाट कसलाई कमाण्डर तोकिएको थियो?",
    optionAEn: "Ranajor Singh Thapa",
    optionANe: "रणजोरसिंह थापा",
    optionBEn: "Bhakti Thapa",
    optionBNe: "भक्ति थापा",
    optionCEn: "Ujir Singh Thapa",
    optionCNe: "उजीरसिंह थापा",
    optionDEn: "Bada Kaji Amar Singh Thapa (अमरसिंह थापा)",
    optionDNe: "अमरसिंह थापा",
    correctOption: "D",
    explanationEn:
      "Bada Kaji Amar Singh Thapa was the overall Supreme Commander of the western front extending beyond the Mahakali across Garhwal and Kumaon up to the Sutlej.",
    explanationNe:
      "महाकाली पश्चिमको सतलजसम्मको पश्चिमी युद्धमोर्चामा नेपाली फौजको सर्वोच्च कमाण्ड बडाकाजी अमरसिंह थापाले सम्हालेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer Cadet",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "In which battle of the Anglo-Nepal War did 73-year-old warrior Sardar Bhakti Thapa attain heroic martyrdom?",
    questionNe:
      "नेपाल-अंग्रेज युद्धका दौरान ७३ वर्षीय सरदार भक्ति थापाले कुन लडाइँमा वीरगति प्राप्त गरेका थिए?",
    optionAEn: "Battle of Kangra",
    optionANe: "काँगडा",
    optionBEn: "Battle of Nalapani",
    optionBNe: "नालापानी",
    optionCEn: "Battle of Deuthal (देउथलको लडाइँ)",
    optionCNe: "देउथल",
    optionDEn: "Battle of Tibet",
    optionDNe: "तिब्बत",
    correctOption: "C",
    explanationEn:
      "Sardar Bhakti Thapa, despite being 73 years of age, led a valiant counter-charge against British cannon positions at the Battle of Deuthal (Malaun) on April 16, 1815, where he was martyred.",
    explanationNe:
      "वि.सं. १८७२ वैशाख ६ (१६ अप्रिल १८१५) मा मलाउँको देउथल किल्लामा अंग्रेज तोपका अगाडि छाती थापेर बहादुरीपूर्वक लड्दै सरदार भक्ति थापाले वीरगति प्राप्त गरेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / TSC Teacher",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०७८ / मा.वि. शिक्षक २०७९",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Captain Balbhadra Kunwar led the epic resistance against British General Gillespie in which historic fortress battle?",
    questionNe:
      "वीर बलभद्र कुँवरले कुन युद्धमा अंग्रेज सेनापति गिलेस्पी विरुद्ध वीरतापूर्वक नेतृत्व गरेका थिए?",
    optionAEn: "Sindhuligadhi",
    optionANe: "सिन्धुलीगढी",
    optionBEn: "Kalapani",
    optionBNe: "कालापानी",
    optionCEn: "Kangra",
    optionCNe: "काँगडा",
    optionDEn: "Nalapani (Khalanga Fort, Dehradun)",
    optionDNe: "नालापानी",
    correctOption: "D",
    explanationEn:
      "Balbhadra Kunwar with only 600 men, women, and children fought off over 4,000 British troops at the Nalapani (Khalanga) Fort in Dehradun in October-November 1814.",
    explanationNe:
      "देहरादुनको नालापानी (खलङ्गा) किल्लामा ६०० नेपाली (महिला र बालबालिकासहित) का साथ अंग्रेज मेजर जनरल गिलेस्पीको विशाल फौज विरुद्ध बलभद्र कुँवरले अद्वितीय लडाइँ लडेका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer Cadet",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which legendary Nepali commander was acclaimed by British historians as 'The Living Lion of Nepal' (नेपालको जीवित शेर)?",
    questionNe:
      "'The living lion of Nepal' वा 'नेपालको जीवित शेर' भनेर कसलाई चिनिन्छ?",
    optionAEn: "Balbhadra Kunwar",
    optionANe: "बलभद्र कुँवर",
    optionBEn: "Bhimsen Thapa",
    optionBNe: "भीमसेन थापा",
    optionCEn: "Bada Kaji Amar Singh Thapa",
    optionCNe: "अमरसिंह थापा",
    optionDEn: "Lakhan Thapa",
    optionDNe: "लखन थापा",
    correctOption: "C",
    explanationEn:
      "Bada Kaji Amar Singh Thapa's iron will and military chivalry against British forces in the Western Himalayas earned him the admiring epithet 'The Living Lion of Nepal'.",
    explanationNe:
      "अदम्य साहस, वीरता र स्वाभिमानका धनी बडाकाजी अमरसिंह थापालाई अंग्रेजहरूले समेत सम्मानपूर्वक 'The Living Lion of Nepal' (नेपालको जीवित सिंह) उपनाम दिएका थिए।",
    difficulty: "easy",
    commission: "National News Agency (RSS)",
    examLevel: "RSS 4th / Officer",
    isPreviousYear: true,
    previousYearInfo: "रासस चौथो २०७८ / अधिकृत क्याडेट २०७९",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "What was the original birth name of Jung Bahadur Rana, founder of the 104-year Rana autocracy in Nepal?",
    questionNe:
      "जंगबहादुर राणाको जन्म हुँदाको वास्तविक नाम के थियो?",
    optionAEn: "Bal Narsingh Kunwar",
    optionANe: "बाल नरसिंह कुँवर",
    optionBEn: "Bir Narsingh Kunwar (वीर नरसिंह कुँवर)",
    optionBNe: "वीर नरसिंह कुँवर",
    optionCEn: "Ranajit Kunwar",
    optionCNe: "रणजीत कुँवर",
    optionDEn: "Badri Narsingh Kunwar",
    optionDNe: "बद्री नरसिंह कुँवर",
    correctOption: "B",
    explanationEn:
      "Jung Bahadur's birth name given by his parents (Bal Narsingh Kunwar and Ganesh Kumari) was Bir Narsingh Kunwar. His maternal uncle Mathbar Singh Thapa affectionately gave him the name 'Jung Bahadur' due to his bold nature.",
    explanationNe:
      "जंगबहादुर राणाको न्वारानको नाम वीर नरसिंह कुँवर थियो। निडर स्वभावका कारण उनका मामा माथवरसिंह थापाले उनलाई 'जंगबहादुर' नाम राखिदिएका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Section Officer / Fifth Level",
    isPreviousYear: true,
    previousYearInfo: "अधिकृत क्याडेट २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which Rana Prime Minister famously introduced the publication of Nepal's first government newspaper 'Gorkhapatra' in 1958 BS?",
    questionNe:
      "नेपालको पहिलो सरकारी पत्रिका 'गोरखापत्र' को प्रकाशन वि.सं. १९५८ मा कुन राणा प्रधानमन्त्रीको पालामा सुरु भएको थियो?",
    optionAEn: "Bir Shumsher",
    optionANe: "वीर शमशेर",
    optionBEn: "Chandra Shumsher",
    optionBNe: "चन्द्र शमशेर",
    optionCEn: "Dev Shumsher (देव शमशेर)",
    optionCNe: "देव शमशेर",
    optionDEn: "Bhim Shumsher",
    optionDNe: "भीम शमशेर",
    correctOption: "C",
    explanationEn:
      "Reformist Rana Prime Minister Dev Shumsher began the publication of Gorkhapatra on Baisakh 24, 1958 BS, alongside establishing Bhasha Pathshalas throughout the country.",
    explanationNe:
      "उदारवादी राणा प्रधानमन्त्री देव शमशेरले वि.सं. १९५८ वैशाख २४ गते गोरखापत्रको प्रकाशन सुरु गराएका थिए।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / TSC",
    isPreviousYear: true,
    previousYearInfo: "खरिदार २०७९ / TSC Pra.Sa.",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which Rana Prime Minister enacted the abolition of the Sati system (सती प्रथा उन्मूलन) in Nepal in 1977 BS (1920 AD)?",
    questionNe:
      "नेपालमा वि.सं. १९७७ मा सती प्रथाको पूर्ण उन्मूलन गर्ने राणा प्रधानमन्त्री को हुन्?",
    optionAEn: "Dev Shumsher",
    optionANe: "देव शमशेर",
    optionBEn: "Chandra Shumsher (चन्द्र शमशेर)",
    optionBNe: "चन्द्र शमशेर",
    optionCEn: "Padma Shumsher",
    optionCNe: "पद्म शमशेर",
    optionDEn: "Jung Bahadur Rana",
    optionDNe: "जंग बहादुर राणा",
    correctOption: "B",
    explanationEn:
      "Rana Prime Minister Chandra Shumsher legally outlawed the barbaric Sati practice on Ashar 25, 1977 BS (1920 AD) and later abolished slavery (कमारा कमारी प्रथा) in 1981 BS.",
    explanationNe:
      "चन्द्र शमशेरले वि.सं. १९७७ असार २५ गते नेपालबाट सती प्रथाको कानुनी रूपमा पूर्ण उन्मूलन गरेका थिए भने १९८१ मा दासप्रथा अन्त्य गरेका थिए।",
    difficulty: "easy",
    commission: "Koshi PPSC",
    examLevel: "Koshi 5th Level / Kharidar",
    isPreviousYear: true,
    previousYearInfo: "कोशी पाँचौ २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "During the tenure of which Prime Minister did Mahakavi Laxmi Prasad Devkota serve as the Minister of Education in Nepal?",
    questionNe:
      "नेपालका कुन प्रधानमन्त्रीको मन्त्रिपरिषद्मा महाकवि लक्ष्मीप्रसाद देवकोटा शिक्षा मन्त्री बनेका थिए?",
    optionAEn: "Dr. K.I. Singh (डा. के.आई. सिंह)",
    optionANe: "डा. के.आई. सिंह",
    optionBEn: "Tanka Prasad Acharya",
    optionBNe: "टंकप्रसाद आचार्य",
    optionCEn: "Matrika Prasad Koirala",
    optionCNe: "मातृकाप्रसाद कोइराला",
    optionDEn: "B.P. Koirala",
    optionDNe: "विश्वेश्वरप्रसाद कोइराला",
    correctOption: "A",
    explanationEn:
      "In 2014 BS (1957 AD), Mahakavi Laxmi Prasad Devkota served as the Education and Autonomous Governance Minister in the 110-day cabinet headed by Prime Minister Dr. K.I. Singh.",
    explanationNe:
      "वि.सं. २०१४ साउन ११ गते गठित डा. के.आई. सिंहको ११० दिने मन्त्रिपरिषद्मा महाकवि लक्ष्मीप्रसाद देवकोटा शिक्षा तथा स्वायत्त शासन मन्त्री बनेका थिए। उनैले त्रिभुवन विश्वविद्यालय स्थापनाको प्रारम्भिक योजना बनाएका थिए।",
    difficulty: "medium",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / TSC Pra.Sa.",
    isPreviousYear: true,
    previousYearInfo: "खरिदार २०७९ / TSC Pra.Sa.",
    isImportant: true,
  },
  {
    topicSlug: "awards-and-honours",
    questionEn:
      "Who was declared Nepal's 18th National Luminary (राष्ट्रिय विभूति) by the Government of Nepal in Ashar 2079 BS?",
    questionNe:
      "वि.सं. २०७९ असार ६ गते नेपाल सरकारले नेपालको १८ औँ राष्ट्रिय विभूति कसलाई घोषणा गरेको थियो?",
    optionAEn: "Bhakti Thapa",
    optionANe: "भक्ति थापा",
    optionBEn: "Jay Prithvi Bahadur Singh (जयपृथ्वीबहादुर सिंह)",
    optionBNe: "जयपृथ्वीबहादुर सिंह",
    optionCEn: "Shankhadhar Sakhwa",
    optionCNe: "शंखधर साख्वा",
    optionDEn: "Pasang Lhamu Sherpa",
    optionDNe: "पासाङ ल्हामु शेर्पा",
    correctOption: "B",
    explanationEn:
      "King of Bajhang and educational pioneer Jay Prithvi Bahadur Singh (author of 'Akshharanka Shiksha') was designated as Nepal's 18th National Luminary on Ashar 6, 2079 BS. Bhakti Thapa had been declared the 17th earlier in 2078 BS.",
    explanationNe:
      "बझाङ्गी राजा तथा 'अक्षराङ्क शिक्षा' का लेखक, शिक्षाप्रेमी जयपृथ्वीबहादुर सिंहलाई नेपाल सरकारले वि.सं. २०७९ असार ६ गते १८ औँ राष्ट्रिय विभूति घोषणा गरेको थियो।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Kharidar / Officer",
    isPreviousYear: true,
    previousYearInfo: "खरिदार २०७९ / अधिकृत २०८०",
    isImportant: true,
  },
  {
    topicSlug: "awards-and-honours",
    questionEn:
      "Who was the first Nepali woman mountaineer to scale Mount Everest, posthumously honored as a National Luminary?",
    questionNe:
      "सगरमाथाको सफल आरोहण गर्ने पहिलो नेपाली महिला पर्वतारोही तथा राष्ट्रिय विभूति को हुन्?",
    optionAEn: "Junko Tabei",
    optionANe: "जुन्को ताबेई",
    optionBEn: "Pasang Lhamu Sherpa (पासाङ ल्हामु शेर्पा)",
    optionBNe: "पासाङ ल्हामु शेर्पा",
    optionCEn: "Santosh Yadav",
    optionCNe: "सन्तोष यादव",
    optionDEn: "Lhakpa Sherpa",
    optionDNe: "ल्हाक्पा शेर्पा",
    correctOption: "B",
    explanationEn:
      "On Baisakh 10, 2050 BS (April 22, 1993), Pasang Lhamu Sherpa became the first Nepali woman to summit Mount Everest, honored with the title of National Luminary and Nepal Tara.",
    explanationNe:
      "वि.सं. २०५० वैशाख १० गते सगरमाथाको सफल आरोहण गर्ने प्रथम नेपाली महिला पासाङ ल्हामु शेर्पालाई नेपाल सरकारले राष्ट्रिय विभूति तथा 'नेपाल तारा' ले सम्मानित गरेको छ।",
    difficulty: "easy",
    commission: "Federal (Loksewa Aayog)",
    examLevel: "Armed Police Sub-Inspector / Subba",
    isPreviousYear: true,
    previousYearInfo: "सशस्त्र प्र.स.नि. २०८० / Loksewa",
    isImportant: true,
  },
  {
    topicSlug: "history-of-nepal",
    questionEn:
      "Which is the oldest discovered stone pillar inscription (शिलालेख) in the authentic history of Nepal?",
    questionNe:
      "नेपालको इतिहासमा हालसम्म भेटिएको सबैभन्दा पुरानो प्रामाणिक शिलालेख कुन हो?",
    optionAEn: "Changu Narayan Inscription of Mandev (चाँगुनारायणको शिलालेख, वि.सं. ५२१)",
    optionANe: "चाँगुनारायणको शिलालेख (मानदेव)",
    optionBEn: "Pashupatinath Inscription",
    optionBNe: "पशुपतिनाथको शिलालेख",
    optionCEn: "Budhanilkantha Inscription",
    optionCNe: "बुढानीलकण्ठको शिलालेख",
    optionDEn: "Dakshinkali Inscription",
    optionDNe: "दक्षिणकालीको शिलालेख",
    correctOption: "A",
    explanationEn:
      "The Garuda pillar stone inscription at Changu Narayan Temple erected by Lichchhavi King Mandev in Saka Samvat 386 (521 BS / 464 AD) is the oldest dated historical stone inscription in Nepal.",
    explanationNe:
      "भक्तपुरको चाँगुनारायण मन्दिर परिसरमा राजा मानदेवले वि.सं. ५२१ मा स्थापना गरेको गरुडध्वज स्तम्भको शिलालेख नेपालको इतिहासको सबैभन्दा पुरानो प्रामाणिक शिलालेख हो।",
    difficulty: "easy",
    commission: "TSC (शिक्षक सेवा आयोग)",
    examLevel: "TSC Pra.Sa. / Teacher",
    isPreviousYear: true,
    previousYearInfo: "प्र.स.नि. २०७२ / TSC",
    isImportant: true,
  },
];
