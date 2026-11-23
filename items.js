const itemsData = {
  // القطط
  CAT1: {
    ar: {
      name: "قط شيرازي",
      priceLYD: "2,200 د.ل",
      priceUSD: "200$",
      description: "قط شيرازي أليف وهادئ يتميز بفراء ناعم وكثيف وملامح لطيفة مناسبة جداً للتربية المنزلية.",
      features: ["الطباع: هادئ وودود", "الفراء: ناعم وكثيف", "مناسب للمنازل والشقق"]
    },
    en: {
      name: "Persian Cat",
      priceLYD: "2,200 LYD",
      priceUSD: "$200",
      description: "A calm and affectionate Persian cat with a soft, thick coat and gentle features well suited for indoor living.",
      features: ["Temperament: Calm & friendly", "Coat: Soft & dense", "Great for houses & apartments"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6.avif"
  },
  CAT2: {
    ar: {
      name: "قط بريتش",
      priceLYD: "3,500 د.ل",
      priceUSD: "320$",
      description: "قط بريتش شorthair متوازن ومحبوب، يجمع بين الهدوء والجاذبية مع بنية قوية وفراء مريح.",
      features: ["الطباع: هادئ ومتوازن", "الفراء: كثيف وسهل العناية", "مناسب للعائلات"]
    },
    en: {
      name: "British Shorthair",
      priceLYD: "3,500 LYD",
      priceUSD: "$320",
      description: "A well-balanced, endearing British Shorthair combining calm charm with a sturdy build and plush coat.",
      features: ["Temperament: Calm & balanced", "Coat: Plush & easy to groom", "Family-friendly"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6 (1).avif"
  },
  CAT3: {
    ar: {
      name: "قط سكوتش فولد",
      priceLYD: "4,000 د.ل",
      priceUSD: "365$",
      description: "يتميز بأذنيه المطويتين ووجهه المستدير اللطيف، ذكي واجتماعي ويتأقلم بسرعة مع محيطه.",
      features: ["الطباع: ذكي واجتماعي", "المظهر: أذنان مطويتان مميزتان", "سهل الألفة"]
    },
    en: {
      name: "Scottish Fold",
      priceLYD: "4,000 LYD",
      priceUSD: "$365",
      description: "Known for its folded ears and sweet round face, intelligent, social, and quick to adapt to its surroundings.",
      features: ["Temperament: Smart & social", "Appearance: Signature folded ears", "Adapts easily"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6 (2).avif"
  },
  CAT4: {
    ar: {
      name: "قط سيامي",
      priceLYD: "2,800 د.ل",
      priceUSD: "255$",
      description: "قط نشيط وذكي بعيون جذابة وأطراف مميزة، يحب التفاعل واللعب مع أصحابه.",
      features: ["الطباع: نشيط وذكي", "العيون: واضحة ومميزة", "محب للتفاعل"]
    },
    en: {
      name: "Siamese Cat",
      priceLYD: "2,800 LYD",
      priceUSD: "$255",
      description: "An active, clever cat with striking eyes and distinct points that loves interacting and playing with its owners.",
      features: ["Temperament: Active & smart", "Eyes: Clear & distinctive", "Loves interaction"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6 (3).avif"
  },
  CAT5: {
    ar: {
      name: "قط ماين كون",
      priceLYD: "11,000 د.ل",
      priceUSD: "1,000$",
      description: "يُعرف بحجمه المميز وطباعه اللطيفة والودودة، يجمع بين الحضور القوي والهدوء مع الأسرة.",
      features: ["الطباع: ودود ولطيف", "الحجم: كبير وقوي", "فراء كثيف"]
    },
    en: {
      name: "Maine Coon",
      priceLYD: "11,000 LYD",
      priceUSD: "$1,000",
      description: "Famous for its impressive size and gentle, friendly nature, pairing strong presence with a calm family bond.",
      features: ["Temperament: Friendly & gentle", "Size: Large & sturdy", "Dense coat"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6 (4).avif"
  },
  CAT6: {
    ar: {
      name: "قط بنغالي",
      priceLYD: "6,500 د.ل",
      priceUSD: "595$",
      description: "يتمتع بنقشة مميزة وطاقة حيوية عالية وذكاء واضح، مناسب لمحبي القطط النشطة والمرحة.",
      features: ["المظهر: نقشة مميزة", "الطباع: حيوي وذكي", "فراء قصير لامع"]
    },
    en: {
      name: "Bengal Cat",
      priceLYD: "6,500 LYD",
      priceUSD: "$595",
      description: "Features a bold coat pattern, high energy, and sharp intelligence—ideal for fans of active, playful cats.",
      features: ["Appearance: Distinctive pattern", "Temperament: Energetic & smart", "Glossy short coat"]
    },
    image: "Gemini_Generated_Image_tip6aqtip6aqtip6 (5).avif"
  },

  // الكلاب
  DOG1: {
    ar: {
      name: "جولدن ريتريفر (Golden Retriever)",
      priceLYD: "4,800 د.ل",
      priceUSD: "440$",
      description: "ودود وصبور جداً مع العائلة، سهل التدريب، ومناسب للتربية المنزلية والحدائق.",
      features: ["الطباع: ودود واجتماعي", "التدريب: سريع الاستجابة", "مناسب للعائلات"]
    },
    en: {
      name: "Golden Retriever",
      priceLYD: "4,800 LYD",
      priceUSD: "$440",
      description: "Very friendly and patient with family, easy to train, and well suited for homes and yards.",
      features: ["Temperament: Friendly & social", "Training: Quick to respond", "Family-friendly"]
    },
    image: "Screenshot 2026-11-23 8.10.10 PM.avif"
  },
  DOG2: {
    ar: {
      name: "جيرمن شيبرد (German Shepherd)",
      priceLYD: "5,500 د.ل",
      priceUSD: "500$",
      description: "ذكي، يقظ، ووفيّ للغاية؛ مثالي للحراسة والتدريب اليومي والأنشطة الحركية.",
      features: ["الطباع: ذكي ومخلص", "النشاط: عالٍ ويحب المهام", "بنية قوية"]
    },
    en: {
      name: "German Shepherd",
      priceLYD: "5,500 LYD",
      priceUSD: "$500",
      description: "Intelligent, alert, and deeply loyal; ideal for protection, daily training, and active routines.",
      features: ["Temperament: Smart & loyal", "Activity: High & task-driven", "Strong build"]
    },
    image: "Screenshot 2026-11-23 8.14.23 PM.avif"
  },
  DOG3: {
    ar: {
      name: "هاسكي سيبيري (Siberian Husky)",
      priceLYD: "6,200 د.ل",
      priceUSD: "565$",
      description: "نشيط، اجتماعي، وذو مظهر لافت؛ يحتاج إلى مساحة حركة واهتمام مستمر.",
      features: ["المظهر: فراء كثيف وعيون مميزة", "الطباع: مرح واجتماعي", "يحتاج حركة يومية"]
    },
    en: {
      name: "Siberian Husky",
      priceLYD: "6,200 LYD",
      priceUSD: "$565",
      description: "Energetic, outgoing, and eye-catching; needs room to move and consistent engagement.",
      features: ["Appearance: Thick coat & striking eyes", "Temperament: Playful & social", "Needs daily exercise"]
    },
    image: "Screenshot 2026-11-23 8.16.58 PM.avif"
  },
  DOG4: {
    ar: {
      name: "بوميرانيان (Pomeranian)",
      priceLYD: "3,900 د.ل",
      priceUSD: "355$",
      description: "صغير الحجم، مرح، وبفراء كثيف منفوش؛ مناسب جداً للشقق والغرف.",
      features: ["الحجم: صغير ومناسب للشقق", "الطباع: حيوي ومحب للانتباه", "فراء كثيف"]
    },
    en: {
      name: "Pomeranian",
      priceLYD: "3,900 LYD",
      priceUSD: "$355",
      description: "Compact, playful, and fluffy-coated; a great fit for apartments and indoor spaces.",
      features: ["Size: Small & apartment-friendly", "Temperament: Lively & attention-loving", "Fluffy coat"]
    },
    image: "GOGY.avif"
  },
  DOG5: {
    ar: {
      name: "فرينش بولدوج (French Bulldog)",
      priceLYD: "5,200 د.ل",
      priceUSD: "475$",
      description: "هادئ نسبياً، قليل النباح، ومحب للرفقة؛ يفضّل الأجواء المعتدلة.",
      features: ["الطباع: هادئ ومحب للرفقة", "الصوت: قليل النباح", "مناسب للمنازل"]
    },
    en: {
      name: "French Bulldog",
      priceLYD: "5,200 LYD",
      priceUSD: "$475",
      description: "Relatively calm, quiet, and affectionate; prefers moderate temperatures.",
      features: ["Temperament: Calm & companionable", "Barking: Low", "Home-friendly"]
    },
    image: "Screenshot 2026-11-23 8.24.59 PM.avif"
  },
  DOG6: {
    ar: {
      name: "لابرادور ريتريفر (Labrador Retriever)",
      priceLYD: "4,500 د.ل",
      priceUSD: "410$",
      description: "لطيف، نشيط، ومحب للعب والماء؛ يرتبط بسرعة بأفراد المنزل.",
      features: ["الطباع: لطيف وودود", "النشاط: يحب اللعب والحركة", "سهل الألفة"]
    },
    en: {
      name: "Labrador Retriever",
      priceLYD: "4,500 LYD",
      priceUSD: "$410",
      description: "Gentle, energetic, and fond of play and water; bonds quickly with household members.",
      features: ["Temperament: Gentle & friendly", "Activity: Loves play & movement", "Easygoing"]
    },
    image: "Screenshot 2026-11-23 8.25.56 PM.avif"
  },

  // الأسماك
  FISH1: {
    ar: {
      name: "سمك بيتا (Betta Fish)",
      priceLYD: "65 د.ل",
      priceUSD: "6$",
      description: "ألوان زاهية وزعانف انسيابية؛ مناسب للأحواض الصغيرة الفردية وسهل العناية.",
      features: ["المظهر: ألوان وزعانف مميزة", "الحوض: مناسب للأحواض الفردية", "العناية: سهلة"]
    },
    en: {
      name: "Betta Fish",
      priceLYD: "65 LYD",
      priceUSD: "$6",
      description: "Vibrant colors and flowing fins; suited to solo small tanks and easy to care for.",
      features: ["Appearance: Vivid colors & fins", "Tank: Best for solo setups", "Care: Easy"]
    },
    image: "Screenshot 2026-11-23 10.36.23 PM.avif"
  },
  FISH2: {
    ar: {
      name: "سمك جولدفيش (Goldfish)",
      priceLYD: "50 د.ل",
      priceUSD: "5$",
      description: "كلاسيكي، هادئ، ومحبوب للمبتدئين؛ يفضّل حوضاً واسعاً مع تهوية جيدة.",
      features: ["الطباع: هادئ ومسالم", "المستوى: مناسب للمبتدئين", "يحتاج مساحة وتهوية"]
    },
    en: {
      name: "Goldfish",
      priceLYD: "50 LYD",
      priceUSD: "$5",
      description: "Classic, calm, and popular with beginners; prefers a roomy tank with good aeration.",
      features: ["Temperament: Calm & peaceful", "Level: Beginner-friendly", "Needs space & aeration"]
    },
    image: "Screenshot 2026-11-23 10.37.28 PM.avif"
  },
  FISH3: {
    ar: {
      name: "نيون تترا (Neon Tetra)",
      priceLYD: "35 د.ل",
      priceUSD: "3$",
      description: "صغير، مسالم، ويتحرك في جماعات بلمعة زرقاء وحمراء جذابة داخل الحوض.",
      features: ["الحركة: يفضّل العيش في مجموعات", "الطباع: مسالم جداً", "المظهر: إضاءة لونية جذابة"]
    },
    en: {
      name: "Neon Tetra",
      priceLYD: "35 LYD",
      priceUSD: "$3",
      description: "Small and peaceful, schooling in the tank with eye-catching blue and red highlights.",
      features: ["Behavior: Prefers schooling", "Temperament: Very peaceful", "Appearance: Bright color accents"]
    },
    image: "Screenshot 2026-11-23 10.37.44 PM.avif"
  },
  FISH4: {
    ar: {
      name: "سمك أنجل (Angelfish)",
      priceLYD: "90 د.ل",
      priceUSD: "8$",
      description: "شكل هندسي أنيق وزعانف طويلة؛ يضفي حركة راقية في الأحواض المتوسطة.",
      features: ["المظهر: شكل انسيابي مميز", "الحوض: أحواض متوسطة إلى كبيرة", "حركة هادئة"]
    },
    en: {
      name: "Angelfish",
      priceLYD: "90 LYD",
      priceUSD: "$8",
      description: "Graceful silhouette and long fins; brings serene movement to medium and larger tanks.",
      features: ["Appearance: Distinct graceful shape", "Tank: Medium to large aquariums", "Calm movement"]
    },
    image: "DAN.avif"
  },
  FISH5: {
    ar: {
      name: "سمك جوبي (Guppy)",
      priceLYD: "30 د.ل",
      priceUSD: "3$",
      description: "نشيط، ملون، وسريع التكيف؛ مثالي للأحواض المجتمعية الهادئة.",
      features: ["الطباع: نشيط ومسالم", "المظهر: ألوان متنوعة", "سهل التكيف"]
    },
    en: {
      name: "Guppy",
      priceLYD: "30 LYD",
      priceUSD: "$3",
      description: "Active, colorful, and adaptable; well suited for peaceful community aquariums.",
      features: ["Temperament: Active & peaceful", "Appearance: Varied colors", "Adaptable"]
    },
    image: "GOOO.avif"
  },
  FISH6: {
    ar: {
      name: "سمك ديسكس (Discus)",
      priceLYD: "240 د.ل",
      priceUSD: "22$",
      description: "يُلقب بملك أحواض المياه العذبة؛ ألوانه غنية ويحتاج لاستقرار حرارة وجودة الماء.",
      features: ["المظهر: ألوان غنية وشكل دائري", "العناية: يحتاج استقرار الماء", "مناسب للأحواض المتقدمة"]
    },
    en: {
      name: "Discus",
      priceLYD: "240 LYD",
      priceUSD: "$22",
      description: "Often called a centerpiece of freshwater tanks, with rich coloration requiring stable water quality and temperature.",
      features: ["Appearance: Rich colors & disc shape", "Care: Needs stable water parameters", "Best for experienced setups"]
    },
    image: "fishh.avif"
  },

  // الطيور
  BIRD1: {
    ar: {
      name: "ببغاء الكوكاتيل (Cockatiel)",
      priceLYD: "450 د.ل",
      priceUSD: "41$",
      description: "أليف، يصفّر بلطف، ويتميز بعُرف رأسه وبقع الخدود البرتقالية.",
      features: ["الطباع: أليف وودود", "الصوت: تصفير لطيف", "مظهر مميز"]
    },
    en: {
      name: "Cockatiel",
      priceLYD: "450 LYD",
      priceUSD: "$41",
      description: "Affectionate and softly whistling, recognized by its head crest and orange cheek patches.",
      features: ["Temperament: Tame & friendly", "Sound: Gentle whistles", "Distinctive look"]
    },
    image: "Screenshot 2026-11-23 10.56.56 PM.avif"
  },
  BIRD2: {
    ar: {
      name: "طائر البادجي / الدرة (Budgerigar)",
      priceLYD: "120 د.ل",
      priceUSD: "11$",
      description: "صغير، نشيط، وسهل الألفة؛ يتوفر بألوان متعددة ومناسب للمبتدئين.",
      features: ["الطباع: نشيط ومرح", "المستوى: مناسب للمبتدئين", "ألوان متعددة"]
    },
    en: {
      name: "Budgerigar (Budgie)",
      priceLYD: "120 LYD",
      priceUSD: "$11",
      description: "Small, lively, and easy to tame; comes in many color varieties and suits beginners.",
      features: ["Temperament: Active & playful", "Level: Beginner-friendly", "Multiple colors"]
    },
    image: "Screenshot 2026-11-23 10.57.53 PM.avif"
  },
  BIRD3: {
    ar: {
      name: "طائر الحب (Lovebird)",
      priceLYD: "220 د.ل",
      priceUSD: "20$",
      description: "حيوي، اجتماعي، وشديد النشاط؛ يفضّل التفاعل اليومي أو وجود رفيق.",
      features: ["الطباع: حيوي واجتماعي", "النشاط: عالٍ ومحب للاستكشاف", "يحب التفاعل"]
    },
    en: {
      name: "Lovebird",
      priceLYD: "220 LYD",
      priceUSD: "$20",
      description: "Spirited, social, and full of energy; enjoys daily interaction or a companion.",
      features: ["Temperament: Lively & social", "Activity: High & curious", "Loves interaction"]
    },
    image: "Screenshot 2026-11-23 10.58.58 PM.avif"
  },
  BIRD4: {
    ar: {
      name: "طائر الكناري (Canary)",
      priceLYD: "380 د.ل",
      priceUSD: "35$",
      description: "معروف بتغريده العذب والهادئ؛ مثالي لمن يبحث عن صوت جميل داخل المنزل.",
      features: ["الصوت: تغريد عذب", "الطباع: هادئ", "مناسب للتربية المنزلية"]
    },
    en: {
      name: "Canary",
      priceLYD: "380 LYD",
      priceUSD: "$35",
      description: "Known for a melodic, pleasant song; ideal for bringing gentle birdsong indoors.",
      features: ["Sound: Melodic singing", "Temperament: Calm", "Great for indoor cages"]
    },
    image: "Screenshot 2026-11-23 10.59.38 PM.avif"
  },
  BIRD5: {
    ar: {
      name: "ببغاء الكونيور (Conure)",
      priceLYD: "950 د.ل",
      priceUSD: "87$",
      description: "مرح، ذكي، ومتعلق بصاحبه؛ يتميز بألوان زاهية وحركة مستمرة.",
      features: ["الطباع: مرح وذكي", "المظهر: ألوان زاهية", "اجتماعي جداً"]
    },
    en: {
      name: "Conure",
      priceLYD: "950 LYD",
      priceUSD: "$87",
      description: "Playful, clever, and bonds closely with its owner, with bright feathers and steady activity.",
      features: ["Temperament: Playful & smart", "Appearance: Bright plumage", "Very social"]
    },
    image: "Screenshot 2026-11-23 11.00.33 PM.avif"
  },
  BIRD6: {
    ar: {
      name: "طائر الزيبرا فينش (Zebra Finch)",
      priceLYD: "80 د.ل",
      priceUSD: "7$",
      description: "صغير، هادئ، وسريع التأقلم؛ جميل في الأقفاص المزودة بأغصان وألعاب بسيطة.",
      features: ["الطباع: هادئ ونشيط", "الحجم: صغير", "سهل التأقلم"]
    },
    en: {
      name: "Zebra Finch",
      priceLYD: "80 LYD",
      priceUSD: "$7",
      description: "Small, calm, and quick to settle in; lovely in cages with perches and simple toys.",
      features: ["Temperament: Calm & lively", "Size: Small", "Easy to adapt"]
    },
    image: "Screenshot 2026-11-23 11.00.53 PM.avif"
  }
};

const uiLabels = {
  ar: {
    backToGallery: "→ رجوع إلى صفحة المعرض",
    productCode: "رمز المنتج",
    featuresTitle: "أبرز المميزات",
    orderWhatsapp: "اطلب الآن عبر واتساب",
    whatsappMessage: (name, id, price) => `مرحباً، أود الاستفسار عن ${name} (${id}) - السعر: ${price}`
  },
  en: {
    backToGallery: "← Back to gallery",
    productCode: "Item ID",
    featuresTitle: "Key Highlights",
    orderWhatsapp: "Order via WhatsApp",
    whatsappMessage: (name, id, price) => `Hello, I would like to ask about ${name} (${id}) - Price: ${price}`
  }
};

const STORAGE_KEY = "site_lang";
let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("translations.json");
    translations = await response.json();
  } catch (err) {
    console.warn("Could not load translations.json:", err);
  }

  const savedLang = localStorage.getItem(STORAGE_KEY) || "ar";
  applyLanguage(savedLang);
}

function applyLanguage(lang) {
  const dict = translations[lang] || {};
  const isArabic = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) {
      el.setAttribute("alt", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = isArabic ? "English" : "العربية";
  }

  localStorage.setItem(STORAGE_KEY, lang);
  document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentLang = document.documentElement.lang || "ar";
      const nextLang = currentLang === "ar" ? "en" : "ar";
      applyLanguage(nextLang);
    });
  }

  loadTranslations();

  const preloader = document.getElementById("preloader");
  const emojiEl = document.getElementById("preloader-emoji");
  const progressBar = document.getElementById("preloader-progress-bar");
  const percentText = document.getElementById("preloader-percent");

  const petEmojis = ["🐱", "🐶", "🐟", "🐦"];
  let emojiIndex = 0;
  let emojiTimer = null;
  let preloaderHidden = false;
  let displayedPercent = 0;

  function cyclePetEmoji() {
    if (!emojiEl || preloaderHidden) return;
    emojiIndex = (emojiIndex + 1) % petEmojis.length;
    emojiEl.classList.remove("is-morphing");
    void emojiEl.offsetWidth;
    emojiEl.textContent = petEmojis[emojiIndex];
    emojiEl.classList.add("is-morphing");
  }

  function updateProgressUI(targetPercent) {
    const clamped = Math.max(0, Math.min(100, Math.round(targetPercent)));
    if (clamped < displayedPercent && !preloaderHidden) return;
    displayedPercent = clamped;

    if (progressBar) progressBar.style.width = `${displayedPercent}%`;
    if (percentText) percentText.textContent = `${displayedPercent}%`;
  }

  function trackRealImageProgress() {
    const imgs = Array.from(document.querySelectorAll("img"));
    if (!imgs.length) {
      updateProgressUI(100);
      return;
    }

    let loadedCount = 0;

    const recalculate = () => {
      const ratio = (loadedCount / imgs.length) * 100;
      updateProgressUI(document.readyState === "complete" ? 100 : Math.min(95, ratio));
    };

    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount += 1;
      } else {
        const onDone = () => {
          loadedCount += 1;
          recalculate();
        };
        img.addEventListener("load", onDone, { once: true });
        img.addEventListener("error", onDone, { once: true });
      }
    });

    recalculate();
  }

  function hidePreloader() {
    if (!preloader || preloaderHidden) return;
    preloaderHidden = true;

    clearInterval(emojiTimer);
    updateProgressUI(100);

    setTimeout(() => {
      preloader.classList.add("is-hidden");
      setTimeout(() => {
        preloader.remove();
      }, 400);
    }, 180);
  }

  if (preloader) {
    if (emojiEl) {
      emojiEl.textContent = petEmojis[0];
      emojiEl.classList.add("is-morphing");
    }

    trackRealImageProgress();
    emojiTimer = setInterval(cyclePetEmoji, 950);

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
      setTimeout(hidePreloader, 5000);
    }
  }

  const thingsContainer = document.querySelector(".Things");
  const arrowBtn = document.querySelector(".big-arrow-btn");
  const cards = document.querySelectorAll(".Things .cards");

  if (!thingsContainer || !cards.length) return;

  let activeItemId = null;

  const fullPageView = document.createElement("main");
  fullPageView.id = "standalone-product-page";
  fullPageView.className = "product-detail-page";

  fullPageView.innerHTML = `
    <div class="product-detail-card">
      <div class="product-detail-header">
        <button type="button" id="back-to-main-page" class="product-back-btn"></button>
        <span id="product-code-badge" class="product-code-badge"></span>
      </div>

      <div class="product-detail-grid">
        <div class="product-media-box">
          <img id="full-cat-img" src="" alt="" class="product-detail-img" />
        </div>

        <div class="product-info-box">
          <h1 id="full-cat-name" class="product-detail-title"></h1>

          <div class="product-price-box">
            <span id="full-cat-lyd" class="product-price-lyd"></span>
            <span class="product-price-sep">•</span>
            <span id="full-cat-usd" class="product-price-usd"></span>
          </div>

          <p id="full-cat-desc" class="product-detail-desc"></p>

          <div class="product-features-wrap">
            <h2 id="product-features-heading" class="product-features-heading"></h2>
            <ul id="full-cat-features" class="product-features-list"></ul>
          </div>

          <a id="full-cat-whatsapp" href="#" target="_blank" rel="noopener" class="product-whatsapp-btn"></a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(fullPageView);

  const originalTitle = document.title;
  const backBtn = document.getElementById("back-to-main-page");

  function getCurrentLang() {
    return document.documentElement.lang === "en" ? "en" : "ar";
  }

  function renderProductDetails(itemId) {
    const entry = itemsData[itemId];
    if (!entry) return;

    const lang = getCurrentLang();
    const item = entry[lang] || entry.ar;
    const labels = uiLabels[lang] || uiLabels.ar;

    document.title = `${item.name} | ${originalTitle}`;
    document.getElementById("product-code-badge").textContent = `${labels.productCode}: ${itemId}`;
    document.getElementById("product-features-heading").textContent = labels.featuresTitle;
    backBtn.textContent = labels.backToGallery;

    const imgEl = document.getElementById("full-cat-img");
    imgEl.src = entry.image;
    imgEl.alt = item.name;

    document.getElementById("full-cat-name").textContent = item.name;
    document.getElementById("full-cat-lyd").textContent = item.priceLYD;
    document.getElementById("full-cat-usd").textContent = item.priceUSD;
    document.getElementById("full-cat-desc").textContent = item.description;
    document.getElementById("full-cat-features").innerHTML = (item.features || [])
      .map((f) => `<li class="product-feature-chip">${f}</li>`)
      .join("");

    const waBtn = document.getElementById("full-cat-whatsapp");
    waBtn.textContent = labels.orderWhatsapp;

    const phone = "218911020908";
    const msg = encodeURIComponent(labels.whatsappMessage(item.name, itemId, item.priceLYD));
    waBtn.href = `https://wa.me/${phone}?text=${msg}`;
  }

  function openStandaloneProductPage(itemId, updateHash = true) {
    if (!itemsData[itemId]) return;

    activeItemId = itemId;
    renderProductDetails(itemId);

    thingsContainer.style.display = "none";
    if (arrowBtn) arrowBtn.style.display = "none";
    fullPageView.style.display = "block";

    if (updateHash) {
      window.location.hash = itemId;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function returnToMainPage(clearHash = true) {
    activeItemId = null;
    document.title = originalTitle;
    fullPageView.style.display = "none";
    thingsContainer.style.display = "";
    if (arrowBtn) arrowBtn.style.display = "";

    if (clearHash && window.location.hash) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  document.addEventListener("languageChanged", () => {
    if (activeItemId) {
      renderProductDetails(activeItemId);
    }
  });

  cards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      openStandaloneProductPage(card.id, true);
    });
  });

  backBtn.addEventListener("click", () => {
    returnToMainPage(true);
  });

  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.replace("#", "");
    if (hashId && itemsData[hashId]) {
      openStandaloneProductPage(hashId, false);
    } else if (!hashId) {
      returnToMainPage(false);
    }
  });

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && itemsData[initialHash]) {
    openStandaloneProductPage(initialHash, false);
  }
});
