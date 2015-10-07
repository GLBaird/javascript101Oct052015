// JavaScript Document
window.onload = initMenu;
window.onunload = function() {};

function initMenu() {
	var allLinks = document.getElementsByTagName("a");
	
	for(var i=0; i<allLinks.length; i++) {
		if(allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onclick = returnFalse;
			allLinks[i].onmouseover = toggleMenu;
		}
	}
}

function returnFalse() {
	return false;
}

function toggleMenu() {
	var startChar = this.href.lastIndexOf("/")+1;
	var endChar = this.href.lastIndexOf(".");
	var menuName = this.href.substring(startChar, endChar);
	
	var menuArea = document.getElementById(menuName).style;
	menuArea.display = "block";
	
	this.parentNode.className = menuName;
	this.parentNode.onmouseover = toggleDivOn;
	this.parentNode.onmouseout = toggleDivOff;
}

function toggleDivOn() {
	document.getElementById(this.className).style.display = "block";
}

function toggleDivOff() {
	document.getElementById(this.className).style.display = "none";
}