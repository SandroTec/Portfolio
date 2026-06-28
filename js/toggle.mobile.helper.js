const mobileHeader = document.querySelector('.mobile-header');
const toggleMobileMenu = document.getElementById('toggleMobileMenu');
const menuImage = document.querySelector('.menu-image');
const headerLogo = document.querySelector('.header-logo');
const headerBG = document.getElementById('bg-image');

toggleMobileMenu.addEventListener('mouseenter', () => {
    const isMenuOpen = mobileHeader.style.display === 'flex';
    
    if (isMenuOpen) {
        menuImage.src = '/Portfolio/assets/img/04_social_icons/close-icon-hover.png';
        
        
    } else {
        menuImage.src = '/Portfolio/assets/img/04_social_icons/Menu-Hover.png';
        
    }
});

toggleMobileMenu.addEventListener('mouseleave', () => {
    const isMenuOpen = mobileHeader.style.display === 'flex';
    
    if (isMenuOpen) {
        menuImage.src = '/Portfolio/assets/img/04_social_icons/Close-icon.png';
    } else {
        menuImage.src = '/Portfolio/assets/img/04_social_icons/01_Menu.png';
    }
});

toggleMobileMenu.addEventListener('click', () => {
    if (mobileHeader.style.display === 'none' || mobileHeader.style.display === '') {
        mobileHeader.style.display = 'flex';
        menuImage.src = '/Portfolio/assets/img/04_social_icons/close-icon-hover.png'; 
        toggleMobileMenu.style.position = 'fixed';
        headerLogo.style.position = 'fixed';
        if (window.location.pathname.includes("legal-notice.html") || window.location.pathname.includes("privacy-policy.html")) {
            headerBG.classList.remove('header-bg');
        }
    } else {
        mobileHeader.style.display = 'none';
        menuImage.src = '/Portfolio/assets/img/04_social_icons/01_Menu.png'; 
        toggleMobileMenu.style.position = 'absolute';
        headerLogo.style.position = 'relative';
        if (window.location.pathname.includes("legal-notice.html") || window.location.pathname.includes("privacy-policy.html"))  {
            headerBG.classList.add('header-bg');
        }
    }
});



// Logo Hover

const logos = document.querySelectorAll('.logoAB');

logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.src = '/Portfolio/assets/img/AB_Logo-yellow.png'; 
        logo.style.transform = 'translateY(10px)';
    });

    logo.addEventListener('mouseleave', () => {
        logo.src = '/Portfolio/assets/img/AB_Logo.png';
        logo.style.transform = 'translateY(0)';
    });
});