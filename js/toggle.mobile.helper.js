const mobileHeader = document.querySelector('.mobile-header');
const toggleMobileMenu = document.getElementById('toggleMobileMenu');
const menuImage = document.querySelector('.menu-image');

toggleMobileMenu.addEventListener('mouseenter', () => {
    const isMenuOpen = mobileHeader.style.display === 'flex';
    
    if (isMenuOpen) {
        menuImage.src = '../assets/img/04_social_icons/Close-icon-hover.png';
    } else {
        menuImage.src = '../assets/img/04_social_icons/Menu-Hover.png';
    }
});

toggleMobileMenu.addEventListener('mouseleave', () => {
    const isMenuOpen = mobileHeader.style.display === 'flex';
    
    if (isMenuOpen) {
        menuImage.src = '../assets/img/04_social_icons/Close-icon.png';
    } else {
        menuImage.src = '../assets/img/04_social_icons/01_Menu.png';
    }
});

toggleMobileMenu.addEventListener('click', () => {
    if (mobileHeader.style.display === 'flex') {
        mobileHeader.style.display = 'none';
        menuImage.src = '../assets/img/04_social_icons/01_Menu.png'; 
    } else {
        mobileHeader.style.display = 'flex';
        menuImage.src = '../assets/img/04_social_icons/Close-icon-hover.png'; 
    }
});