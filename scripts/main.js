var myHeading = document.querySelector('h1');
//myHeading.innerHTML='Hello World!';
var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/wallet.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML="Mozila is cool"+ myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozlia is cool'+storedName;
}

myButton.onclick = function(){
	setUserName();
}

