

//Open Projectsites
function openFirstProject() {
    window.location.href = "/Portfolio/html/project-one.html";
}

function openSecondProject() {
    window.location.href = "/Portfolio/html/project-two.html";
}

function openThirdProject() {
    window.location.href = "/Portfolio/html/project-three.html";
}

//hoverring effect for join Image 
const joinImage = document.getElementById('joinImage');
const joinMovingImage = joinImage.querySelector('.join-image');
joinImage.addEventListener('mouseenter', () => {
    joinMovingImage.classList.remove('moving-image');
});

joinImage.addEventListener('mouseleave', () => {
    joinMovingImage.classList.add('moving-image');
});


//Peel-Sticker
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
        }, 250); 

    } else if (currentSrc === stickerPeeledOff) {
        sticker.src = stickerTransition;
        
        setTimeout(() => {
            sticker.src = stickerDefault;
            appetizer.classList.remove('d-none');
            furtureSkills.classList.add('d-none');
        }, 250); 
    }
}

// headline hover effect
const headline = document.getElementById('interactive-headline');
const secondHeadline = document.getElementById('interactive-headline_second_part');
const deSecondHeadline = document.getElementById('interactive-headline_second_part_de');
const text = headline.textContent;
const secondText = secondHeadline.textContent;
const deSecondText = deSecondHeadline.textContent
headline.textContent = '';
secondHeadline.textContent = '';
deSecondHeadline.textContent = '';

[...text].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;       
    if (char === ' ') {
        span.style.whiteSpace = 'pre';
    }
    manipulateLetters(span, char)

    headline.appendChild(span);
});

[...secondText].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;       
    if (char === ' ') {
        span.style.whiteSpace = 'pre';
    }
    manipulateLetters(span, char)

    secondHeadline.appendChild(span);
});

[...deSecondText].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;       
    if (char === ' ') {
        span.style.whiteSpace = 'pre';
    }
    manipulateLetters(span, char)

    deSecondHeadline.appendChild(span);
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
        span.textContent = char;
        span.classList.remove('headline-hover');
    });
}

// hello world button hover effect
const helloWorldButton = document.getElementById('helloWorldBtn');
const buttonText = helloWorldButton.querySelector('.btn-text');
const wavingIconContainer = document.getElementById('iconContainer');
const wavingIcon = document.getElementById('wavingIcon');

helloWorldButton.addEventListener('mouseenter', () => {
    buttonText.textContent = 'Ich bin Alessandro';
    wavingIconContainer.style.opacity = '1';
    wavingIcon.style.opacity = '1';
});

helloWorldButton.addEventListener('mouseleave', () => {
    buttonText.textContent = 'Hello world';
    wavingIconContainer.style.opacity = '0';
    wavingIcon.style.opacity = '0';
});




// contact form hover effect for input and headline

const formInputs = document.querySelectorAll('form input');

formInputs.forEach((input) => {
    const parentContainer = input.closest('div[class$="-form"]');

    if (parentContainer) {
        const headlinesInContainer = parentContainer.querySelectorAll('h4');

        input.addEventListener('mouseenter', () => {
            headlinesInContainer.forEach(h4 => h4.style.color = '#F87A55');
        });

        input.addEventListener('mouseleave', () => {
            headlinesInContainer.forEach(h4 => h4.style.color = '#F8F9FA');
        });
    }
});

// contact form

const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const nameInput = document.getElementById('nameInput');
const nameError = document.getElementById('nameError');

const mailInput = document.getElementById('mailInput');
const mailError = document.getElementById('mailError');

const messageInput = document.getElementById('messageInput');
const messageError = document.getElementById('messageError');

const privacyCheck = document.getElementById('privacyCheck');
const privacyError = document.getElementById('privacyError');

const submitButtons = form.querySelectorAll('button[type="submit"]');

// Live Validation

nameInput.addEventListener('blur', validateName);
mailInput.addEventListener('blur', validateMail);
messageInput.addEventListener('blur', validateMessage);

nameInput.addEventListener('input', () => {
    validateName();
    updateSubmitButton();
});

mailInput.addEventListener('input', () => {
    validateMail();
    updateSubmitButton();
});

messageInput.addEventListener('input', () => {
    validateMessage();
    updateSubmitButton();
});

privacyCheck.addEventListener('change', () => {
    validatePrivacy();
    updateSubmitButton();
});

// Validation Functions

function validateName() {
    if (!nameInput.value.trim()) {
        nameError.textContent = "*Please enter your name.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateMail() {
    if (!mailInput.value.trim()) {
        mailError.textContent = "*Please enter your email address.";
        return false;
    }

    if (!mailInput.checkValidity()) {
        mailError.textContent = "*Please enter a valid email address.";
        return false;
    }

    mailError.textContent = "";
    return true;
}

function validateMessage() {
    if (!messageInput.value.trim()) {
        messageError.textContent = "*Please enter a message.";
        return false;
    }

    messageError.textContent = "";
    return true;
}

function validatePrivacy() {
    if (!privacyCheck.checked) {
        privacyError.textContent = "*You must agree to the privacy policy to proceed.";
        return false;
    }

    privacyError.textContent = "";
    return true;
}

function isFormValid() {
    return (
        validateName() &&
        validateMail() &&
        validateMessage() &&
        validatePrivacy()
    );
}

function updateSubmitButton() {
    submitButtons.forEach(button => {
        button.disabled = !isFormValid();
    });
}



// Form Submit

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    resetErrors();

    if (!isFormValid) {
        return
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        formStatus.textContent = "Sending...";

        const response = await fetch('https://formspree.io/f/mjgzjewr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            formStatus.textContent =
                "Thank you! Your message has been sent successfully.";

            form.reset();
            updateSubmitButton();
        } else {
            const errorData = await response.json();

            formStatus.textContent =
                "Oops! Something went wrong. Please try again later!";
                
            updateSubmitButton();
            console.error(errorData);
        }

    } catch (error) {
        formStatus.textContent =
            "Network error. Please try again later.";

        console.error("Fetch error:", error);
    }
});


// Reset Errors

function resetErrors() {
    nameError.textContent = "";
    mailError.textContent = "";
    messageError.textContent = "";
    privacyError.textContent = "";
    formStatus.textContent = "";
}


// colleagues sticker footer hovering:
const footerContainers = document.querySelectorAll('.sticker-footer');

footerContainers.forEach((footer) => {
    const link = footer.querySelector('.profile-link');
    const img = footer.querySelector('.footerImage');

    if (link && img) {
        link.addEventListener('mouseenter', () => {
            img.src = './assets/img/03_Stickers/02_Testimonials/linkedIN-Icon.png';
        });
        
        link.addEventListener('mouseleave', () => {
            img.src = './assets/img/03_Stickers/02_Testimonials/linkedIN-Icon-black.png';
        });
    }
});


