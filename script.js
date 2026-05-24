

function openFirstProject() {
    window.location.href = "../html/project-one.html";
}

function openSecondProject() {
    window.location.href = "../html/project-two.html";
}

function openThirdProject() {
    window.location.href = "../html/project-three.html";
}

const link = document.getElementById('footerImage');

  link.addEventListener('mouseenter', () => {
    link.href = './assets/img/03_Stickers/02Testimonials/linkedIN-Icon-sticker-hover.png';
  });

  link.addEventListener('mouseleave', () => {
    link.href = './assets/img/03_Stickers/02Testimonials/linkedIN-Icon-sticker.png';
  });

const sticker = document.getElementById('skillSticker');
const stickerDefault = './assets/img/03_Stickers/01_Skills - Peel off/Default.png';
const appetizer = document.getElementById('appetizer')
const stickerTransition = './assets/img/03_Stickers/01_Skills - Peel off/Transition.png';
const stickerPeeledOff = './assets/img/03_Stickers/01_Skills - Peel off/Final.png';
const furtureSkills = document.getElementById('futureSkills');

function peelSticker() {
    const currentSrc = sticker.getAttribute('src');

    if (currentSrc === stickerDefault) {
        sticker.src = stickerTransition;
        
        setTimeout(() => {
            sticker.src = stickerPeeledOff;
            appetizer.classList.add('d-none');
            furtureSkills.classList.remove('d-none');
        }, 40); 

    } else if (currentSrc === stickerPeeledOff) {
        sticker.src = stickerTransition;
        
        setTimeout(() => {
            sticker.src = stickerDefault;
            appetizer.classList.remove('d-none');
            furtureSkills.classList.add('d-none');
        }, 40); 
    }
}

// headline hover effect
const headline = document.getElementById('interactive-headline');
const secondHeadline = document.getElementById('interactive-headline_second_part');
const text = headline.textContent;
const secondText = secondHeadline.textContent;
headline.textContent = '';
secondHeadline.textContent = '';

// using spread operator to iterate over each letter in the text
[...text].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;       
    // Important for spaces!
    if (char === ' ') {
        span.style.whiteSpace = 'pre';
    }
    manipulateLetters(span, char)

    headline.appendChild(span);
});

[...secondText].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;       
    // Important for spaces!
    if (char === ' ') {
        span.style.whiteSpace = 'pre';
    }
    manipulateLetters(span, char)

    secondHeadline.appendChild(span);
});

function manipulateLetters(span, char) {
    span.addEventListener('mouseenter', () => {
        if (span.textContent === span.textContent.toUpperCase()) {
            span.textContent = span.textContent.toLowerCase();
        } else {
            span.textContent = span.textContent.toUpperCase();
        }
        span.classList.add('headline-hover');
    });
    span.addEventListener('mouseleave', () => {
        // back to char means reset to original character (upper or lower)
        span.textContent = char;
        span.classList.remove('headline-hover');
    });
}

// Project-images hover button displaying

const projectImages = document.querySelectorAll('.project-images');

projectImages.forEach(image => {
    const button = document.querySelectorAll('.project-btn');
    image.addEventListener('mouseenter', () => {
        button.forEach(btn => {
            btn.classList.remove('d-none');
        });
    });

    image.addEventListener('mouseleave', (e) => {
        button.forEach(btn => {
            btn.classList.add('d-none');
        });
    });
});


const profileImage = document.getElementById('profileImage');

profileImage.addEventListener('mouseenter', () => {
    profileImage.src = './assets/img/profile-image.jpeg';
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.src = './assets/img/troll_image.jpeg';
})