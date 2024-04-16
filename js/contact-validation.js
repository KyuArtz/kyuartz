var usernamelabel = document.getElementById("username-label");
var usernamefield = document.getElementById("username-field");
var usernameerror = document.getElementById("username-error");
var usernamevalid = document.getElementById("username-valid");

// promts a message info to the user if the contact form is valid or not
function validateUsername(){
  if(!usernamefield.value.match(/^[A-Za-z]*[\ \][a-z]{3,25}$/)){
    usernameerror.innerHTML ="Must be at least 1-4 characters no number/special character!";
    usernamefield.style.borderColor ="red";
    usernamevalid.innerHTML ="";
    usernamelabel.style.color ="red";
    return false;
  }
  usernameerror.innerHTML ="";
  usernamefield.style.borderColor ="#1d8f56";
  usernamevalid.innerHTML ="You're good to go!";
  usernamelabel.style.color ="#1d8f56";
  return true;
}

var emaillabel = document.getElementById("email-label");
var emailfield = document.getElementById("email-field");
var emailerror = document.getElementById("email-error");
var emailvalid = document.getElementById("email-valid");

function validateEmail(){
  if(!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,3}$/)){
    emailerror.innerHTML = "Please enter a valid email address!";
    emailfield.style.borderColor ="red";
    emailvalid.innerHTML ="";
    emaillabel.style.color ="red";
    return false;
  }
  emailerror.innerHTML = "";
  emailfield.style.borderColor ="#1d8f56";
  emailvalid.innerHTML ="You're good to go!";
  emaillabel.style.color ="#1d8f56";
  return true;
}

var messagelabel = document.getElementById("message-label");
var messagefield = document.getElementById("message-field");
var messageerror = document.getElementById("message-error");
var messagevalid = document.getElementById("message-valid");

function validateMessage(){
  if(!messagefield.value.match(/^[A-Za-z\,_\.\]*[\ \][a-z]{10,500}$/)){
    messageerror.innerHTML ="Please don't leave this blank!";
    messagefield.style.borderColor ="red";
    messagevalid.innerHTML ="";
    messagelabel.style.color ="red";
    return false;
  }
  messageerror.innerHTML ="";
  messagefield.style.borderColor ="#1d8f56";
  messagevalid.innerHTML ="You're good to go!";
  messagelabel.style.color ="#1d8f56"
  return true;
}
