// SajiloHealth — Bilingual copy (EN + NE)
// Tone: confident, calm, long-term, infrastructure-focused. Not hypey.

export const copy = {
  en: {
    nav: {
      patients: "Patients",
      doctors: "Doctors",
      clinics: "Clinics",
      trust: "Security",
      roadmap: "Roadmap",
      beta: "Request Access",
    },
    hero: {
      eyebrow: "Healthcare Infrastructure for Nepal",
      headline: "The operating system for healthcare in Nepal.",
      subheadline:
        "A unified platform connecting patients, doctors, and clinics — from appointment to record, from prescription to payment.",
      paragraph:
        "SajiloHealth is the underlying infrastructure Nepali healthcare has been missing — appointments, EMR, pharmacy, labs, billing, and QR payments in one secure system.",
      primaryCta: "Request Early Access",
      secondaryCta: "For Clinics",
      status: "Limited Beta · 50 early partners",
    },
    investorStrip: [
      "Healthcare Infrastructure",
      "Encrypted by Design",
      "NepalPay · ConnectIPS",
      "Limited Beta · 50 Partners",
      "Built in Kathmandu",
      "Roadmap to Stable Release",
    ],
    what: {
      label: "Platform Overview",
      headline:
        "Not a booking app. A unified healthcare operating system.",
      body:
        "SajiloHealth is built as long-term infrastructure for Nepal — a single secure platform that runs the day-to-day of clinics and gives patients a calm, modern way to receive care. Every module is designed to work together: appointments, electronic records, pharmacy, labs, billing, and payments operate as one system, not stitched-together tools.",
      pillars: [
        { title: "Unified", body: "One platform across patients, doctors, and clinics." },
        { title: "Secure", body: "Encrypted in transit and at rest. Role-based access by default." },
        { title: "Local-first", body: "Designed around how care is actually delivered in Nepal." },
        { title: "Long-term", body: "Built to scale from a single clinic to a national network." },
      ],
    },
    patients: {
      label: "For Patients",
      headline: "Care that respects your time.",
      sub: "Find doctors, hold records, attend video visits, and settle bills — without juggling apps.",
      items: [
        {
          title: "Book verified doctors",
          body: "Find specialists across Nepal and confirm appointments in seconds.",
        },
        {
          title: "Secure video consultations",
          body: "Talk to your doctor from home over reliable, end-to-end encrypted video.",
        },
        {
          title: "Your records, always with you",
          body: "Prescriptions, lab reports, and visit history available across every clinic.",
        },
        {
          title: "Pay the way you already do",
          body: "Settle bills instantly through NepalPay, ConnectIPS, and bank QR.",
        },
      ],
    },
    doctors: {
      label: "For Doctors",
      headline: "More medicine. Less administration.",
      sub: "A focused clinical workspace with the scheduling, records, and payments you need.",
      items: [
        {
          title: "A schedule designed for clinical work",
          body: "Set availability across in-person and remote visits with intelligent no-show controls.",
        },
        {
          title: "Clean, structured records",
          body: "Write prescriptions and notes in an EMR built around clinical workflow, not data entry.",
        },
        {
          title: "Reach patients beyond your clinic",
          body: "Be discoverable on the SajiloHealth marketplace and offer remote consultations.",
        },
        {
          title: "Consultations paid faster",
          body: "Direct settlement, clear statements, and predictable payouts.",
        },
      ],
    },
    clinics: {
      label: "For Clinics",
      headline: "One platform to run the entire clinic.",
      sub: "Front desk to financials. Replace disconnected tools with a single, audited system.",
      items: [
        {
          title: "Electronic Medical Records",
          body: "Structured patient histories, prescriptions, and visit notes across every department.",
        },
        {
          title: "Billing & Invoicing",
          body: "Generate invoices, manage receivables, and reconcile payments without spreadsheets.",
        },
        {
          title: "Pharmacy & Inventory",
          body: "Track stock, expiry, and dispensing in real time — linked to consultations.",
        },
        {
          title: "Tax-ready Financial Reports",
          body: "Daily, monthly, and year-end reports prepared for audit and tax filing in Nepal.",
        },
        {
          title: "QR Payments built in",
          body: "Accept NepalPay, ConnectIPS, and bank QR at the counter and online.",
        },
      ],
    },
    trust: {
      label: "Security & Trust",
      headline: "Built like infrastructure. Operated with discipline.",
      sub: "Healthcare data is sensitive. We treat it that way at every layer.",
      points: [
        {
          title: "Encryption end-to-end",
          body: "TLS 1.2+ in transit, AES-256 at rest, and segregated environments for production data.",
        },
        {
          title: "Role-based access control",
          body: "Granular permissions per role, action audit trails, and session-level integrity checks.",
        },
        {
          title: "Designed around Nepali workflows",
          body: "Built with clinicians, clinic owners, and pharmacy operators across multiple cities.",
        },
        {
          title: "Regulatory-aware architecture",
          body: "We follow established standards for healthcare data handling and engage proactively with applicable regulations.",
        },
      ],
      stats: [
        { value: "256-bit", label: "Encryption at rest" },
        { value: "99.9%", label: "Target uptime" },
        { value: "RBAC", label: "Role-based access" },
        { value: "Audit", label: "Action-level trails" },
      ],
    },
    roadmap: {
      label: "Roadmap",
      headline: "A measured path to nationwide adoption.",
      sub: "We are building SajiloHealth in disciplined phases — every stage validated with real clinics before the next opens.",
      steps: [
        {
          phase: "Phase 01",
          title: "Private Beta",
          status: "Active",
          body: "Closed pilot with 50 partner clinics and doctors. Hands-on onboarding and weekly product reviews.",
        },
        {
          phase: "Phase 02",
          title: "Public Beta",
          status: "Q2",
          body: "Open beta for verified clinics and independent practitioners across Kathmandu Valley.",
        },
        {
          phase: "Phase 03",
          title: "Stable Release",
          status: "Q3–Q4",
          body: "GA across all modules with a published SLA, formal data processing agreements, and partner support.",
        },
        {
          phase: "Phase 04",
          title: "Nationwide",
          status: "Year 2",
          body: "Expansion across provinces with regional infrastructure partners and multi-clinic networks.",
        },
      ],
    },
    beta: {
      label: "Early Access",
      headline: "Limited Beta is opening soon.",
      sub: "50 partner clinics. A small group of doctors. A focused cohort of patients.",
      paragraph:
        "We are inviting a small group to shape SajiloHealth before public release. Add your details below — we will reach out as access opens for your role.",
      seatsNote: "50 partner seats. Selected applicants are contacted in order.",
      emailLabel: "Work or personal email",
      emailPlaceholder: "you@domain.com",
      roleLabel: "I am a",
      roles: {
        patient: "Patient",
        doctor: "Doctor",
        clinic: "Clinic / Hospital",
      },
      submit: "Request Early Access",
      submitting: "Submitting…",
      success: "You are on the list",
      successDesc:
        "Thank you. We will be in touch when your role is invited.",
      invalidEmail: "Please enter a valid email address.",
      selectRole: "Please choose what describes you best.",
    },
    footer: {
      tagline: "Healthcare infrastructure for Nepal.",
      built: "Designed and engineered in Kathmandu.",
      rights: "All rights reserved.",
      sections: {
        platform: "Platform",
        company: "Company",
        legal: "Legal",
      },
      links: {
        patients: "For Patients",
        doctors: "For Doctors",
        clinics: "For Clinics",
        security: "Security",
        roadmap: "Roadmap",
        beta: "Request Access",
        contact: "Contact",
        privacy: "Privacy",
        terms: "Terms",
      },
    },
  },

  ne: {
    nav: {
      patients: "बिरामी",
      doctors: "डाक्टर",
      clinics: "क्लिनिक",
      trust: "सुरक्षा",
      roadmap: "रोडम्याप",
      beta: "पहुँच अनुरोध",
    },
    hero: {
      eyebrow: "नेपालका लागि स्वास्थ्य पूर्वाधार",
      headline: "नेपालको स्वास्थ्य सेवाको लागि अपरेटिङ सिस्टम।",
      subheadline:
        "बिरामी, डाक्टर र क्लिनिकलाई जोड्ने एकीकृत प्लेटफर्म — अपोइन्टमेन्टदेखि रेकर्डसम्म, प्रिस्क्रिप्सनदेखि भुक्तानीसम्म।",
      paragraph:
        "SajiloHealth नेपाली स्वास्थ्य सेवामा कमी रहेको आधारभूत पूर्वाधार हो — अपोइन्टमेन्ट, EMR, फार्मेसी, ल्याब, बिलिङ र QR भुक्तानी एउटै सुरक्षित प्रणालीमा।",
      primaryCta: "प्रारम्भिक पहुँच अनुरोध",
      secondaryCta: "क्लिनिकहरूका लागि",
      status: "सीमित बिटा · ५० प्रारम्भिक साझेदार",
    },
    investorStrip: [
      "स्वास्थ्य पूर्वाधार",
      "डिजाइनदेखि नै इन्क्रिप्टेड",
      "NepalPay · ConnectIPS",
      "सीमित बिटा · ५० साझेदार",
      "काठमाडौंमा निर्मित",
      "स्थिर रिलिजसम्म रोडम्याप",
    ],
    what: {
      label: "प्लेटफर्म परिचय",
      headline: "बुकिङ एप होइन। एकीकृत स्वास्थ्य अपरेटिङ सिस्टम।",
      body:
        "SajiloHealth नेपालका लागि दीर्घकालीन पूर्वाधारको रूपमा बनाइएको हो — एउटै सुरक्षित प्लेटफर्म जसले क्लिनिकको दैनिक कार्य चलाउँछ र बिरामीहरूलाई आधुनिक तरिकाले हेरचाह प्राप्त गर्ने सजिलो बनाउँछ। हरेक मोड्युल एकसाथ काम गर्न डिजाइन गरिएको: अपोइन्टमेन्ट, इलेक्ट्रोनिक रेकर्ड, फार्मेसी, ल्याब, बिलिङ र भुक्तानी एउटै प्रणालीको रूपमा काम गर्छन्।",
      pillars: [
        { title: "एकीकृत", body: "बिरामी, डाक्टर र क्लिनिकहरूमा एउटै प्लेटफर्म।" },
        { title: "सुरक्षित", body: "ट्रान्जिट र स्टोरेज दुवैमा एन्क्रिप्टेड। भूमिका-आधारित पहुँच।" },
        { title: "स्थानीय-पहिलो", body: "नेपालमा हेरचाह कसरी प्रदान गरिन्छ त्यसैको वरिपरि डिजाइन।" },
        { title: "दीर्घकालीन", body: "एउटा क्लिनिकदेखि राष्ट्रिय नेटवर्कसम्म स्केल गर्न निर्मित।" },
      ],
    },
    patients: {
      label: "बिरामीहरूका लागि",
      headline: "तपाईंको समयको सम्मान गर्ने हेरचाह।",
      sub: "डाक्टर भेट्टाउनुहोस्, रेकर्ड राख्नुहोस्, भिडियो भिजिट गर्नुहोस् र बिल चुक्ता गर्नुहोस् — एप जुगिङबिनै।",
      items: [
        {
          title: "प्रमाणित डाक्टर बुक गर्नुहोस्",
          body: "नेपालभरका विशेषज्ञ भेट्टाउनुहोस् र सेकेन्डमै अपोइन्टमेन्ट पक्का गर्नुहोस्।",
        },
        {
          title: "सुरक्षित भिडियो परामर्श",
          body: "एन्ड-टु-एन्ड एन्क्रिप्टेड भिडियो मार्फत घरबाटै डाक्टरसँग कुरा गर्नुहोस्।",
        },
        {
          title: "तपाईंका रेकर्ड, सधैं तपाईंसँग",
          body: "हरेक क्लिनिकमा प्रिस्क्रिप्सन, ल्याब रिपोर्ट र भिजिट इतिहास उपलब्ध।",
        },
        {
          title: "तपाईं गर्ने तरिकामै भुक्तानी",
          body: "NepalPay, ConnectIPS र बैंक QR मार्फत तुरुन्तै बिल चुक्ता।",
        },
      ],
    },
    doctors: {
      label: "डाक्टरहरूका लागि",
      headline: "धेरै औषधि। कम प्रशासन।",
      sub: "तालिका, रेकर्ड र भुक्तानीसहितको केन्द्रित क्लिनिकल कार्यस्थल।",
      items: [
        {
          title: "क्लिनिकल कामका लागि डिजाइन गरिएको तालिका",
          body: "इन-पर्सन र रिमोट दुवैको लागि उपलब्धता तय गर्नुहोस्, बुद्धिमत्तापूर्वक नो-शो घटाउनुहोस्।",
        },
        {
          title: "स्वच्छ, संरचित रेकर्ड",
          body: "क्लिनिकल कार्यप्रवाह वरिपरि डिजाइन गरिएको EMR मा प्रिस्क्रिप्सन र नोट लेख्नुहोस्।",
        },
        {
          title: "क्लिनिकभन्दा बाहिर पनि बिरामीसम्म",
          body: "SajiloHealth मार्केटप्लेसमा देखिनुहोस् र रिमोट परामर्श प्रदान गर्नुहोस्।",
        },
        {
          title: "छिटो भुक्तानी",
          body: "प्रत्यक्ष निष्पादन, स्पष्ट विवरण र पूर्वानुमानयोग्य भुक्तानी।",
        },
      ],
    },
    clinics: {
      label: "क्लिनिकहरूका लागि",
      headline: "सम्पूर्ण क्लिनिक चलाउन एउटै प्लेटफर्म।",
      sub: "फ्रन्ट डेस्कदेखि वित्तसम्म। बिखरिएका उपकरणहरू एकीकृत प्रणालीले प्रतिस्थापन।",
      items: [
        {
          title: "इलेक्ट्रोनिक मेडिकल रेकर्ड",
          body: "हरेक विभागमा संरचित बिरामी इतिहास, प्रिस्क्रिप्सन र भिजिट नोटहरू।",
        },
        {
          title: "बिलिङ र इनभ्वाइसिङ",
          body: "इनभ्वाइस तयार, प्राप्य व्यवस्थापन र भुक्तानी मिलान — स्प्रेडसिटबिनै।",
        },
        {
          title: "फार्मेसी र इन्भेन्टरी",
          body: "स्टक, म्याद र वितरण रियल टाइममा — परामर्शसँग जोडिएको।",
        },
        {
          title: "कर-तयार वित्तीय रिपोर्ट",
          body: "नेपालमा अडिट र कर दाखिलाको लागि दैनिक, मासिक र वार्षिक रिपोर्ट।",
        },
        {
          title: "QR भुक्तानी समेटिएको",
          body: "काउन्टर र अनलाइनमा NepalPay, ConnectIPS र बैंक QR।",
        },
      ],
    },
    trust: {
      label: "सुरक्षा र विश्वास",
      headline: "पूर्वाधार जस्तै निर्मित। अनुशासनसहित सञ्चालन।",
      sub: "स्वास्थ्य डाटा संवेदनशील हुन्छ। हामी हरेक तहमा त्यसरी नै व्यवहार गर्छौं।",
      points: [
        {
          title: "एन्ड-टु-एन्ड एन्क्रिप्सन",
          body: "ट्रान्जिटमा TLS 1.2+, स्टोरेजमा AES-256 र प्रोडक्सन डाटाका लागि छुट्टै वातावरण।",
        },
        {
          title: "भूमिका-आधारित पहुँच नियन्त्रण",
          body: "प्रति भूमिका विस्तृत अनुमति, कार्य अडिट ट्रेल र सेसन-स्तर अखण्डता जाँच।",
        },
        {
          title: "नेपाली कार्यप्रवाहमा डिजाइन",
          body: "विभिन्न सहरका चिकित्सक, क्लिनिक सञ्चालक र फार्मेसी अपरेटरसँग मिलेर निर्माण।",
        },
        {
          title: "नियामक-सचेत आर्किटेक्चर",
          body: "स्वास्थ्य डाटा व्यवस्थापनका स्थापित मापदण्ड पालना र विकसित नियमसँग सक्रिय संलग्नता।",
        },
      ],
      stats: [
        { value: "२५६-बिट", label: "स्टोरेजमा एन्क्रिप्सन" },
        { value: "९९.९%", label: "लक्षित अपटाइम" },
        { value: "RBAC", label: "भूमिका-आधारित पहुँच" },
        { value: "अडिट", label: "कार्य-स्तर ट्रेल" },
      ],
    },
    roadmap: {
      label: "रोडम्याप",
      headline: "राष्ट्रिय अपनाउने तर्फको सोचविचार युक्त बाटो।",
      sub: "हामी SajiloHealth लाई अनुशासित चरणमा बनाउँदैछौं — हरेक चरण अर्को खुल्नुअघि वास्तविक क्लिनिकहरूसँग प्रमाणित।",
      steps: [
        {
          phase: "चरण ०१",
          title: "निजी बिटा",
          status: "सक्रिय",
          body: "५० साझेदार क्लिनिक र डाक्टरहरूसँग बन्द पाइलट। प्रत्यक्ष अनबोर्डिङ र साप्ताहिक उत्पादन समीक्षा।",
        },
        {
          phase: "चरण ०२",
          title: "सार्वजनिक बिटा",
          status: "Q2",
          body: "काठमाडौं उपत्यकाभरि प्रमाणित क्लिनिक र स्वतन्त्र चिकित्सकहरूका लागि खुला बिटा।",
        },
        {
          phase: "चरण ०३",
          title: "स्थिर रिलिज",
          status: "Q3–Q4",
          body: "प्रकाशित SLA, औपचारिक डाटा प्रसोधन सम्झौता र साझेदार समर्थनसहित सबै मोड्युलमा GA।",
        },
        {
          phase: "चरण ०४",
          title: "राष्ट्रिय",
          status: "वर्ष २",
          body: "क्षेत्रीय पूर्वाधार साझेदार र बहु-क्लिनिक नेटवर्कसहित प्रदेशभर विस्तार।",
        },
      ],
    },
    beta: {
      label: "प्रारम्भिक पहुँच",
      headline: "सीमित बिटा चाँडै खुल्दैछ।",
      sub: "५० साझेदार क्लिनिक। डाक्टरहरूको सानो समूह। बिरामीहरूको केन्द्रित समूह।",
      paragraph:
        "सार्वजनिक रिलिज अघि SajiloHealth लाई आकार दिन हामी सानो समूहलाई आमन्त्रित गर्दैछौं। तल आफ्नो विवरण थप्नुहोस् — तपाईंको भूमिकाका लागि पहुँच खुलेपछि सम्पर्क गर्नेछौं।",
      seatsNote: "५० साझेदार सिट। चयनित आवेदकहरूलाई क्रमशः सम्पर्क गरिनेछ।",
      emailLabel: "कार्यालय वा व्यक्तिगत इमेल",
      emailPlaceholder: "tapai@domain.com",
      roleLabel: "म एक हुँ",
      roles: {
        patient: "बिरामी",
        doctor: "डाक्टर",
        clinic: "क्लिनिक / अस्पताल",
      },
      submit: "प्रारम्भिक पहुँच अनुरोध",
      submitting: "पठाइँदै…",
      success: "तपाईं सूचीमा हुनुहुन्छ",
      successDesc: "धन्यवाद। तपाईंको भूमिका आमन्त्रित हुनेबित्तिकै सम्पर्क गर्नेछौं।",
      invalidEmail: "कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्।",
      selectRole: "कृपया तपाईंलाई के राम्रो वर्णन गर्छ छनोट गर्नुहोस्।",
    },
    footer: {
      tagline: "नेपालका लागि स्वास्थ्य पूर्वाधार।",
      built: "काठमाडौंमा डिजाइन र इन्जिनियर।",
      rights: "सर्वाधिकार सुरक्षित।",
      sections: {
        platform: "प्लेटफर्म",
        company: "कम्पनी",
        legal: "कानुनी",
      },
      links: {
        patients: "बिरामीहरूका लागि",
        doctors: "डाक्टरहरूका लागि",
        clinics: "क्लिनिकहरूका लागि",
        security: "सुरक्षा",
        roadmap: "रोडम्याप",
        beta: "पहुँच अनुरोध",
        contact: "सम्पर्क",
        privacy: "गोपनीयता",
        terms: "सर्तहरू",
      },
    },
  },
};
