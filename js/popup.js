let popup = document.getElementById("popup");
let donatePopup = document.getElementById("donate-popup");
  
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
function openDonate(){
  donatePopup.classList.add("open-donate");
}
function closeDonate(){
  donatePopup.classList.remove("open-donate");
}