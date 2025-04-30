function validateFile() {
const fileInput = document.getElementById('fileUpload');
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

function removeFile() {
const fileInput = document.getElementById('fileUpload');
const previewImage = document.getElementById('image-preview');
const removeBtn = document.getElementById('remove-btn');

    fileInput.value = '';
    previewImage.style.display = 'none';
    removeBtn.style.display = 'none';
}

document.getElementById('supportForm').addEventListener('submit', function() {
    alert('THANK YOU FOR CONTACTING CUSTOMER SUPPORT. WE WILL GET BACK TO YOU SHORTLTY.');
});