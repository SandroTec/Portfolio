const langDeButton = document.getElementById('langDeButton');
const langEnButton = document.getElementById('langEnButton');
const body = document.body;

function setLanguageToGerman() {
  body.classList.remove('lang-en-active');
  document.documentElement.lang = 'de';
  sessionStorage.setItem('preferred-lang', 'de'); 
  langEnButton.style.color = '#F8F9FA';
  langDeButton.style.color = ' #F87A55';
}

function setLanguageToEnglish() {
  body.classList.add('lang-en-active');
  document.documentElement.lang = 'en';
  sessionStorage.setItem('preferred-lang', 'en');
  langEnButton.style.color = '#F87A55';
  langDeButton.style.color = '#F8F9FA';
}

langDeButton.addEventListener('click', setLanguageToGerman);
langEnButton.addEventListener('click', setLanguageToEnglish);

const savedLang = sessionStorage.getItem('preferred-lang');

if (savedLang === 'en') {
  setLanguageToEnglish();
} else {
  setLanguageToGerman();
}

langDeButton.addEventListener('click', setLanguageToGerman);
langEnButton.addEventListener('click', setLanguageToEnglish);