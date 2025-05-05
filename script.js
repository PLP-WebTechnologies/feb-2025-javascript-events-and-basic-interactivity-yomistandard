// Event Handling Section
const clickBtn = document.getElementById('clickBtn');
const hoverBtn = document.getElementById('hoverBtn');
const keypressBox = document.getElementById('keypressBox');
const keypressDisplay = document.getElementById('keypressDisplay');
const secretBtn = document.getElementById('secretBtn');

// Click event
clickBtn.addEventListener('click', () => {
    clickBtn.textContent = 'Clicked!';
    setTimeout(() => clickBtn.textContent = 'Click Me!', 1000);
});

// Hover effects
hoverBtn.addEventListener('mouseenter', () => {
    hoverBtn.style.backgroundColor = '#e74c3c';
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverBtn.style.backgroundColor = '#3498db';
});

// Keypress detection
keypressBox.addEventListener('keydown', (e) => {
    keypressDisplay.textContent = `you pressed: ${e.key}`;
});

// Secret action (double click)
let clickCount = 0;
let clickTimer;

secretBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 300);
    } else if (clickCount === 2) {
        clearTimeout(clickTimer);
        clickCount = 0;
        secretBtn.textContent = 'you double click just now'
        secretBtn.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            secretBtn.textContent = 'double click';
        }, 1000);
    }
});

// Interactive Elements Section
const colorBtn = document.getElementById('colorBtn');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
let colorIndex = 0;

// Color changing button
colorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBtn.style.backgroundColor = colors[colorIndex];
});

// Image Gallery
const galleryImages = document.querySelectorAll('.gallery-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImageIndex = 0;

// Show initial image
galleryImages[currentImageIndex].classList.add('active');

function showImage(index) {
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update active states
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Real-time validation functions
function validateUsername() {
    const message = username.nextElementSibling;
    if (username.value.length < 3) {
        message.textContent = 'Username must be at least 3 characters long';
        return false;
    }
    message.textContent = '✓';
    message.style.color = '#2ecc71';
    return true;
}

function validateEmail() {
    const message = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        message.textContent = 'Please enter a valid email address';
        return false;
    }
    message.textContent = '✓';
    message.style.color = '#2ecc71';
    return true;
}

function validatePassword() {
    const message = password.nextElementSibling;
    if (password.value.length < 8) {
        message.textContent = 'Password must be at least 8 characters long';
        return false;
    }
    message.textContent = '✓';
    message.style.color = '#2ecc71';
    return true;
}

// Real-time validation events
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
   

    
    if (isUsernameValid && isEmailValid && isPasswordValid) {
        const success = document.getElementById('succes-msg');
        success.textContent = 'Form submitted successfully!';
        success.style.color = '#2ecc71';
        success.style.display = 'block';
        
        form.reset();
        document.querySelectorAll('.validation-message').forEach(msg => {
            msg.textContent = '';
        });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            success.style.display = 'none';
            success.textContent = '';
        }, 3000);
    }
});