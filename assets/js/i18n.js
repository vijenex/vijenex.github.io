// Internationalization (i18n) handler
(function() {
  'use strict';
  
  let currentLang = 'en';
  const langCodes = {
    'en': 'EN',
    'es': 'ES',
    'fr': 'FR',
    'de': 'DE',
    'hi': 'HI',
    'zh': 'ZH'
  };
  
  // Load saved language preference
  function loadLanguage() {
    try {
      const saved = localStorage.getItem('vj_lang');
      if (saved && translations[saved]) {
        currentLang = saved;
      } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        if (translations[langCode]) {
          currentLang = langCode;
        }
      }
    } catch (e) {
      console.warn('localStorage not available:', e);
    }
    applyTranslations();
  }
  
  // Apply translations to all elements with data-i18n attribute
  function applyTranslations() {
    if (!translations[currentLang]) return;
    
    const t = translations[currentLang];
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });
    
    // Update language button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = langCodes[currentLang] || 'EN';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
  }
  
  // Change language
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem('vj_lang', lang);
    } catch (e) {
      console.warn('localStorage not available:', e);
    }
    applyTranslations();
  }
  
  // Create language dropdown
  function createLangDropdown() {
    const langBtn = document.getElementById('langToggle');
    if (!langBtn) return;
    
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.style.display = 'none';
    
    const languages = [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
      { code: 'zh', name: '中文', flag: '🇨🇳' }
    ];
    
    languages.forEach(lang => {
      const item = document.createElement('button');
      item.className = 'lang-option';
      if (lang.code === currentLang) {
        item.classList.add('active');
      }
      item.innerHTML = `${lang.flag} ${lang.name}`;
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(lang.code);
        dropdown.style.display = 'none';
      });
      dropdown.appendChild(item);
    });
    
    langBtn.parentElement.appendChild(dropdown);
    
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdown.style.display === 'block';
      dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadLanguage();
      createLangDropdown();
    });
  } else {
    loadLanguage();
    createLangDropdown();
  }
  
  // Expose setLanguage for external use
  window.setLanguage = setLanguage;
  window.getCurrentLanguage = () => currentLang;
})();

