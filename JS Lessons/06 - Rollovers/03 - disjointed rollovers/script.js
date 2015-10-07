// JavaScript Document
var linkImage;
window.onload = initRollovers;

function initRollovers() {
	// set up image array for different images
	linkImage = document.getElementById("linkImage");
	linkImage.images = new Array();
	
	// add rollovers to all image links
	for(var i=0; i<document.links.length; i++) {
		var linkObj = document.links[i];
		if(linkObj.id.indexOf("img") == 0) {
			setRollover(linkObj,i);
		}
	}
}

function setRollover(linkObj, pos) {
	// load image into image array
	linkImage.images[pos] = new Image();
	linkImage.images[pos].src = "images/"+linkObj.id+".jpg";
	
	// add event listeners
	linkObj.onmouseover = changeImage;
	linkObj.imagePos = pos;
}

function changeImage() {
	linkImage.src = linkImage.images[this.imagePos].src;
}