// Main form validation function
function validateForm() {
  let isValid = true;

  // Validate each field
  if (!validateInput('username')) isValid = false;
  if (!validateInput('email')) isValid = false;
  if (!validateCommissionType()) isValid = false;
  if (!validateInput('message')) isValid = false;

  // Show general error if form is invalid
  if (!isValid) {
      alert('Please fill out all required fields before submitting.');
  }

  return isValid; // If true, form will submit; otherwise, it won't.
}

// General input validation (for username, email, and message)
function validateInput(fieldType) {
  const field = document.getElementById(`${fieldType}-field`);
  let isValid = false;

  if (fieldType === 'username') {
      isValid = field.value.match(/^[A-Za-z\s]{3,25}$/);
      document.getElementById('username-error').textContent = isValid ? '' : 'Name must be between 3 and 25 characters.';
  } else if (fieldType === 'email') {
      isValid = field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/);
      document.getElementById('email-error').textContent = isValid ? '' : 'Invalid email format.';
  } else if (fieldType === 'message') {
      isValid = field.value.match(/^[A-Za-z0-9\s.,!?'\"()_-]{10,500}$/);
      document.getElementById('message-error').textContent = isValid ? '' : 'Message must be between 10 and 500 characters.';
  }

  return isValid;
}

// Validate commission type selection
function validateCommissionType() {
  const commissionSelect = document.getElementById('commission-select');
  const isValid = commissionSelect.value !== '';
  document.getElementById('commission-error').textContent = isValid ? '' : 'Please select a commission type.';
  return isValid;
}

// File validation and preview
function validateFile() {
  const fileInput = document.getElementById('myFile');
  const previewImage = document.getElementById('image-preview');
  const fileError = document.getElementById('file-error');
  const removeBtn = document.getElementById('remove-btn');
  const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg']; 
  const maxFileSize = 2 * 1024 * 1024; // 2MB size limit

  fileError.textContent = '';
  previewImage.style.display = 'none';
  removeBtn.style.display = 'none';

  const file = fileInput.files[0];
  if (file) {
      const fileType = file.type;
      const fileSize = file.size;

      if (!allowedFormats.includes(fileType)) {
          fileError.textContent = 'Invalid format. Only JPEG, PNG, and JPG are supported.';
          fileInput.value = '';
          return;
      }

      if (fileSize > maxFileSize) {
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

// Number of available slots (you can adjust this manually)
let availableSlots = 0; // Set to 0 to simulate closed commissions

// DOM elements
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

// Function to update the form based on the slots
function updateFormStatus() {
    if (availableSlots === 0) {
        formStatus.textContent = "COMMISSION FORM - CLOSED";
        submitBtn.disabled = true; // Disable the submit button
        submitBtn.style.backgroundColor = "#d3d3d3"; // Indicate the form is disabled
    } else {
        formStatus.textContent = "COMMISSION FORM - OPEN";
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = ""; // Reset button color
    }
}

// Call the function to update form status on page load
updateFormStatus();

// Form submission event listener (for demo purposes)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (availableSlots === 0) {
        event.preventDefault(); // Prevent submission if no slots are available
    } else {
        availableSlots--; // Decrease available slots on submission
        updateFormStatus(); // Update form status after submission
    }
});