// JavaScript Document
window.onload = initSlideShow;
// declare variables
var slide;
var description;
var pos = 0;
var numImages = 8;
var descText = new Array("Mondial House",
						 "Cooling Pods",
						 "Fire Station Tower",
						 "Concrete Logo",
						 "On the roof",
						 "Front Offices",
						 "From London Bridge",
						 "Lower Concrete Section");

function initSlideShow() {
	var nextButton = document.getElementById("next");
	var prevButton = document.getElementById("prev");
	slide = document.getElementById("slide");
	description = document.getElementById("description");
	
	// add event handlers
	nextButton.onclick = nextImage;
	prevButton.onclick = prevImage;
	
	// place first description on screen
	description.innerHTML = descText[0];
}

function nextImage() {
	if(pos<numImages-1) {
		pos++;
		displayImage();
	}
	return false;
}

function prevImage() {
	if(pos>0) {
		pos--;
		displayImage();
	}
	return false;
}

function displayImage() {
	if(pos<10) {
		slide.src = "images/img0"+(pos+1)+".jpg";
	} else {
		slide.src = "images/img"+(pos+1)+".jpg";
	}
	description.innerHTML = descText[pos];
}