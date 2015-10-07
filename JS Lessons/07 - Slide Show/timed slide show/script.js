// JavaScript Document
window.onload = startTimer;

var imageArray = new Array("front","pods","tower","logo","offices");
var imageTimer = 0;

function startTimer() {
	if(imageTimer == 0) {
		imageTimer = setInterval("changeImage()", 2000);
	}	
}

function stopTimer() {
	if(imageTimer > 0) {
		clearTimeout(imageTimer);
		imageTimer = 0;
	}
}

function changeImage() {
	var img = document.getElementById("randomImage");
	var imageNo = Math.floor(Math.random()*imageArray.length);
	var fileName = "images/"+imageArray[imageNo]+".jpg";
	img.src = fileName;
}

