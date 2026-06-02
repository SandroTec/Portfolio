//mobile header
const mobileHeader = document.querySelector('.mobile-header');
const toggleMobileMenu = document.getElementById('toggleMobileMenu');
const menuImage = document.querySelector('.menu-image');

toggleMobileMenu.addEventListener('click', () => {
    if (mobileHeader.style.display === 'flex') {
        mobileHeader.style.display = 'none';
        menuImage.src = '../assets/img/04_social_icons/01_Menu.png';
        
    } else {
        mobileHeader.style.display = 'flex';
        menuImage.src = '../assets/img/04_social_icons/Close-icon.png';
    }
});