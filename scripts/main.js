var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fics.jpg') {
      myImage.setAttribute ('src','images/fics2.jpg');
    } else {
      myImage.setAttribute ('src','images/fics.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Elephants are your friends, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Elephants are your friends, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
