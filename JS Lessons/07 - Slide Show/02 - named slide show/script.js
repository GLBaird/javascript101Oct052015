// JavaScript Document
window.onload = initSlideShow;
// declare variables
var slide;
var pos = 0;
var slideImages = new Array("front.jpg",
							"pods.jpg",
							"logo.jpg",
							"offices.jpg",
							"tower.jpg");

function initSlideShow() {
	var nextButton = document.getElementById("next");
	var prevButton = document.getElementById("prev");
	slide = document.getElementById("slide");
	
	// add event handlers
	nextButton.onclick = nextImage;
	prevButton.onclick = prevImage;
	
	//display first image
	slide.src = "images/"+slideImages[pos];
}

function nextImage() {
	if(pos<slideImages.length-1) {
		pos++;
		slide.src = "images/"+slideImages[pos];
	}
	return false;
}

function prevImage() {
	if(pos>0) {
		pos--;
		slide.src = "images/"+slideImages[pos];
	}
	return false;
}
