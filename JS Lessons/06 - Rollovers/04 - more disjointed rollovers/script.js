// JavaScript Document
window.onload = initRollovers; 

function initRollovers() {
	window.resizeTo(700,700);
	for(var i=0; i<document.links.length; i++) {
		var linkObj = document.links[i];
		if(linkObj.id) {
			var imageObj = document.getElementById(linkObj.id+"_thumb");
			if(imageObj) {
				setRollover(linkObj, imageObj);
			}
		}
	}
}

function setRollover(linkObj, imageObj) {
	// set up graphic for thumbnail
	imageObj.thumbUp = new Image();
	imageObj.thumbUp.src = imageObj.src;
	
	//set rollover graphic for thumbnail
	imageObj.thumbOver = new Image();
	imageObj.thumbOver.src = "thumbs/"+linkObj.id+"_over.jpg";
	
	// set a pointer to the link image on the actual <a> link
	linkObj.image = imageObj;
	
	// set event listeners
	linkObj.onmouseover = rollOver;
	linkObj.onmouseout = rollOut;
	linkObj.onclick = openImageWindow;
}

function rollOver() {
	this.image.src = this.image.thumbOver.src;
}

function rollOut() {
	this.image.src = this.image.thumbUp.src;
}

function openImageWindow() {
	var url = "images/"+this.id+".jpg";
	window.open(url,this.id,"width=400, height=250, screenY="+
				(window.screenY+150)+", screenX="+(window.screenX+100));
	return false;
}
