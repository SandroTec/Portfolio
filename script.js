
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