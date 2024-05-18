function validateInput(fieldType) {
  let field = document.getElementById(`${fieldType}-field`);
  let errorElement = document.getElementById(`${fieldType}-error`);
  let validElement = document.getElementById(`${fieldType}-valid`);
  let labelElement = document.querySelector(`label[for=${fieldType}-field]`);
  
  let isValid;
  if (fieldType === 'username') {
    isValid = field.value.match(/^[A-Za-z]*[\ \][a-z]{3,25}$/);
  } else if (fieldType === 'email') {
    isValid = field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,3}$/);
  } else if (fieldType === 'message') {
    isValid = field.value.match(/^[A-Za-z\,_\.\]*[\ \][a-z]{10,500}$/);
  }

  if (!isValid) {
    errorElement.textContent = fieldType === 'username' ? "Must be at least 1-4 characters, no numbers/special characters!" :
                               fieldType === 'email' ? "Please enter a valid email address!" :
                               "Please don't leave this blank!";
    field.style.borderColor = "red";
    validElement.textContent = "";
    labelElement.style.color = "red";
  } else {
    errorElement.textContent = "";
    field.style.borderColor = "lightgreen";
    validElement.textContent = "You're good to go!";
    labelElement.style.color = "lightgreen";
  }

  return isValid;
}

function validateCommissionType() {
  var commissionSelect = document.getElementById("commission-select");
  var commissionError = document.getElementById("commission-error");
  var commissionValid = document.getElementById("commission-valid");
  var commissionLabel = document.querySelector('label[for="commission-select"]');

  if (commissionSelect.value === "") {
    commissionError.textContent = "Please select a commission type!";
    commissionSelect.style.borderColor = "red";
    commissionLabel.style.color = "red";
    commissionValid.textContent = "";
  } else {
    commissionError.textContent = "";
    commissionSelect.style.borderColor = "lightgreen";
    commissionLabel.style.color = "lightgreen";
    commissionValid.textContent = "You're good to go!";
  }
}

function validateFile() {
  var fileInput = document.getElementById("myFile");
  var fileError = document.getElementById("file-error");
  var fileValid = document.getElementById("file-valid");
  var fileLabel = document.querySelector('label[for="myFile"]');

  if (fileInput.files.length === 0) {
    fileError.textContent = "";
    fileValid.textContent = "";
  } else {
    var file = fileInput.files[0];
    var fileSize = file.size / 1024; // File size in KB

    if (fileSize > 1024) { // Change the size limit as needed
      fileError.textContent = "File size should be less than 1MB!";
      fileInput.style.borderColor = "red";
      fileLabel.style.color = "red";
      fileValid.textContent = "";
    } else {
      fileError.textContent = "";
      fileInput.style.borderColor = "lightgreen";
      fileLabel.style.color = "lightgreen";
      fileValid.textContent = "File uploaded successfully!";
    }
  }
}