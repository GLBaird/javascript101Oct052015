// JavaScript Document
window.onload = initLinks;

function initLinks() {
	for(var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
		document.images[i].onmouseover = highlight;
		document.images[i].onmouseout = resetBorder;
	}
}

function newWindow() {
	var imgName = "images/"+this.id+".jpg";
	window.open(imgName, "Picture of Iceland: "+this.id, 
	"width=400, height=300, scrollbars=no, resizable=no, toolbar=no, menubar=no");
}

function highlight() {
	this.style.borderColor = "#770000";	
}

function resetBorder() {
	this.style.borderColor = "black";	
}