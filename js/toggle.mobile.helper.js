const mobileHeader = document.querySelector('.mobile-header');
const toggleMobileMenu = document.getElementById('toggleMobileMenu');
const menuImage = document.querySelector('.menu-image');

const headerBG = document.getElementById('bg-image');

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
    if (mobileHeader.style.display === 'none' || mobileHeader.style.display === '') {
        mobileHeader.style.display = 'flex';
        menuImage.src = '../assets/img/04_social_icons/Close-icon-hover.png'; 
        if (window.location.pathname.includes("legal-notice.html") || window.location.pathname.includes("privacy-policy.html")) {
            headerBG.classList.remove('header-bg');
        }
    } else {
        mobileHeader.style.display = 'none';
        menuImage.src = '../assets/img/04_social_icons/01_Menu.png'; 
        if (window.location.pathname.includes("legal-notice.html") || window.location.pathname.includes("privacy-policy.html"))  {
            headerBG.classList.add('header-bg');
        }
    }
});



