

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