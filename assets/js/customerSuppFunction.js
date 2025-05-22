document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileUpload');
    const previewImage = document.getElementById('image-preview');
    const fileError = document.getElementById('file-error');
    const removeBtn = document.getElementById('remove-btn');
    const supportForm = document.getElementById('supportForm');
    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxFileSize = 2 * 1024 * 1024; // 2MB

    function resetFileInput() {
        fileInput.value = '';
        previewImage.src = '';
        previewImage.style.display = 'none';
        removeBtn.style.display = 'none';
    }

    function validateFile() {
        fileError.textContent = '';
        resetFileInput();

        const file = fileInput.files[0];
        if (!file) return;

        if (!allowedFormats.includes(file.type)) {
            fileError.textContent = 'Invalid format. Only JPEG, PNG, and JPG are supported.';
            resetFileInput();
            return;
        }

        if (file.size > maxFileSize) {
            fileError.textContent = 'File is too large. Maximum file size is 2MB.';
            resetFileInput();
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            removeBtn.style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }

    function removeFile() {
        resetFileInput();
        fileError.textContent = '';
    }

    fileInput.addEventListener('change', validateFile);
    removeBtn.addEventListener('click', removeFile);

    supportForm.addEventListener('submit', function (e) {
        alert('THANK YOU FOR CONTACTING CUSTOMER SUPPORT. WE WILL GET BACK TO YOU SHORTLY.');
    });
});