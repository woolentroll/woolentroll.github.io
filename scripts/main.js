var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hatsune_miku.png') {
        myImage.setAttribute ('src','images/hatsune_miku1.png');
    } else {
        myImage.setAttribute ('src','images/hatsune_miku.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Black Magic corrupt you, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.textContent = 'Black Magic corrupt you, ' + storeName;
}

myButton.onclick = function() {
    setUserName();
}