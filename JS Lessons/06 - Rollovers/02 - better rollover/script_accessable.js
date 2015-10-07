window.onload = initRollover;

function initRollover() {
	for(var i=0; i<document.images.length; i++) {
		if(document.images[i].parentNode.tagName == "A") {
			addRollOver(document.images[i]);
		}
	}
}

function addRollOver(thisImage){
	// add graphics for up state
	thisImage.upImage = new Image();
	thisImage.upImage.src = "images/"+thisImage.id+"_up.gif";
	
	// over state
	thisImage.overImage = new Image()
	thisImage.overImage.src = "images/"+thisImage.id+"_over.gif";
	
	// down state
	thisImage.downImage = new Image();
	thisImage.downImage.src = "images/"+thisImage.id+"_down.gif";
	
	// add event listeners
	thisImage.onmouseover = rollOver;
	thisImage.onmouseout = rollOff;
	thisImage.onmousedown = pressButton;
	thisImage.onmouseup	= rollOver;
	
	// add event listeners for accessability
	thisImage.parentNode.onfocus = focusParent;
	thisImage.parentNode.onblur = blurParent;
}

// event hanlers
function rollOver() {
	this.src = this.overImage.src;
}

function rollOff() {
	this.src = this.upImage.src;
}

function pressButton() {
	this.src = this.downImage.src;
}

function focusParent() {
	this.childNodes[0].src = this.childNodes[0].overImage.src;
}

function blurParent() {
	this.childNodes[0].src = this.childNodes[0].upImage.src;
}
