const translations = {
  en: {
    abtfr: "About Forum",
  },
  ru: {
    abtfr: "О Форуме",
  },
};

let currentLang = "ru";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  translatePage();
}
