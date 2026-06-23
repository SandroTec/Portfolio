// Ich nenne die Variablen "Buttons" (Mehrzahl), damit klar ist, dass es Listen sind
const langDeButtons = document.querySelectorAll('.lang-DE-btn');
const langEnButtons = document.querySelectorAll('.lang-EN-btn');
const body = document.body;
const vectorBubbles = document.querySelectorAll('.vector-bubble');

const circleHeadlineSkills = document.querySelector('.circle-headline')

function setLanguageToGerman() {
  body.classList.remove('lang-en-active');
  document.documentElement.lang = 'de';
  sessionStorage.setItem('preferred-lang', 'de'); 
  vectorBubbles.forEach(bubble => {
    bubble.style.marginLeft = '20px';
  });
  langEnButtons.forEach(btn => btn.style.color = '#F8F9FA');
  langDeButtons.forEach(btn => btn.style.color = '#F87A55');
}

function setLanguageToEnglish() {
  body.classList.add('lang-en-active');
  document.documentElement.lang = 'en';
  sessionStorage.setItem('preferred-lang', 'en');
  vectorBubbles.forEach(bubble => {
    bubble.style.marginLeft = '-35px';
  });

  langEnButtons.forEach(btn => btn.style.color = '#F87A55');
  langDeButtons.forEach(btn => btn.style.color = '#F8F9FA');
}

langDeButtons.forEach(btn => btn.addEventListener('click', setLanguageToGerman));
langEnButtons.forEach(btn => btn.addEventListener('click', setLanguageToEnglish));

const savedLang = sessionStorage.getItem('preferred-lang');

if (savedLang === 'en') {
  setLanguageToEnglish();
} else {
  setLanguageToGerman();
}

