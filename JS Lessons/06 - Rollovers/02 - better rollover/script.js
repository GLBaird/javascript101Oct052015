// JavaScript Document
window.onload = rolloverInit;

function rolloverInit() {
	// cycle through all images and add rollover events if inside <a> tags
	for(var i=0; i<document.images.length; i++) {
		if(document.images[i].parentNode.tagName == "A") {
			// send to a function to add rollover states
			setRollover(document.images[i]);
		}
	}
}

function setRollover(thisImage) {
	// trasnfer currently loaded up image into property upImage
	thisImage.upImage = new Image();
	thisImage.upImage.src = "images/"+thisImage.id+"_up.gif";
	thisImage.src = thisImage.upImage.src;
	
	// add new image for over state
	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/"+thisImage.id+"_over.gif";
	
	// add new image for down state
	thisImage.downImage = new Image();
	thisImage.downImage.src = "images/"+thisImage.id+"_down.gif";
	
	// add mouse event functions
	thisImage.onmouseover = rollOver;
	thisImage.onmouseout = rollOut;
	thisImage.onmousedown = mouseDown;
	thisImage.onmouseup = rollOver;
}

// event handler functions
function rollOver() {
	this.src = this.overImage.src;
}

function rollOut() {
	this.src = this.upImage.src;
}

function mouseDown() {
	this.src = this.downImage.src;
}