// Utility to show error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Main form validation function
function validateForm() {
    let isValid = true;

    if (!validateInput('username')) isValid = false;
    if (!validateInput('email')) isValid = false;
    if (!validateCommissionType()) isValid = false;
    if (!validateInput('message')) isValid = false;

    if (!isValid) {
        alert('Please fill out all required fields before submitting.');
    }

    return isValid;
}

// General input validation (for username, email, and message)
function validateInput(fieldType) {
    const field = document.getElementById(`${fieldType}-field`);
    let isValid = false;

    if (fieldType === 'username') {
        isValid = /^[A-Za-z\s]{3,25}$/.test(field.value);
        showError('username-error', isValid ? '' : 'Must be 3-25 letters, no special characters.');
    } else if (fieldType === 'email') {
        // Improved email regex
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        showError('email-error', isValid ? '' : 'Invalid email format.');
    } else if (fieldType === 'message') {
        isValid = /^[A-Za-z0-9\s.,!?'\"()_-]{10,500}$/.test(field.value);
        showError('message-error', isValid ? '' : '');
    }

    return isValid;
}

// Validate commission type selection
function validateCommissionType() {
    const commissionSelect = document.getElementById('commission-select');
    const isValid = commissionSelect.value !== '';
    showError('commission-error', isValid ? '' : 'Please select a commission type.');
    return isValid;
}

// File validation and preview
function validateFile() {
    const fileInput = document.getElementById('myFile');
    const previewImage = document.getElementById('image-preview');
    const fileError = document.getElementById('file-error');
    const removeBtn = document.getElementById('remove-btn');
    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxFileSize = 2 * 1024 * 1024; // 2MB

    fileError.textContent = '';
    previewImage.style.display = 'none';
    removeBtn.style.display = 'none';

    const file = fileInput.files[0];
    if (!file) return;

    if (!allowedFormats.includes(file.type)) {
        fileError.textContent = 'Invalid format. Only JPEG, PNG, and JPG are supported.';
        fileInput.value = '';
        return;
    }

    if (file.size > maxFileSize) {
        fileError.textContent = 'File is too large. Maximum file size is 2MB.';
        fileInput.value = '';
        return;
    }

    // Show image preview
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);

    removeBtn.style.display = 'inline-block';
}

// Remove file function
function removeFile() {
    const fileInput = document.getElementById('myFile');
    const previewImage = document.getElementById('image-preview');
    const removeBtn = document.getElementById('remove-btn');

    fileInput.value = '';
    previewImage.style.display = 'none';
    removeBtn.style.display = 'none';
}

// Number of available slots (adjust as needed)
let availableSlots = 0; // 0 means closed

// DOM elements
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

// Update form status based on slots
function updateFormStatus() {
    if (availableSlots === 0) {
        formStatus.textContent = "COMMISSION FORM - CLOSED";
        submitBtn.disabled = true;
    } else {
        formStatus.textContent = "COMMISSION FORM - OPEN";
        submitBtn.disabled = false;
    }
}

// Initialize form status on page load
updateFormStatus();

// Form submission event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (availableSlots === 0) {
        event.preventDefault();
    } else {
        availableSlots--;
        updateFormStatus();
    }
});
