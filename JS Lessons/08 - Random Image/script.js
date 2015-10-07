// JavaScript Document
window.onload = displayRandomImage;

var imageBank = new Array("front.jpg","pods.jpg","tower.jpg","logo.jpg","offices.jpg");

function displayRandomImage() {
	var imageNum = Math.floor(Math.random()*imageBank.length);
	var imageChange = document.getElementById("mondialImage");
	
	imageChange.src = "images/"+imageBank[imageNum];
}