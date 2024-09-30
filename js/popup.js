let popup = document.getElementById("popup");
let popupWn = document.getElementById("popup-wn");
let donatePopup = document.getElementById("donate-popup");
  
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
function openWn(){
  popupWn.classList.add("open-popup-wn");
}
function closeWn(){
  popupWn.classList.remove("open-popup-wn");
}
function openDonate(){
  donatePopup.classList.add("open-donate");
}
function closeDonate(){
  donatePopup.classList.remove("open-donate");
}