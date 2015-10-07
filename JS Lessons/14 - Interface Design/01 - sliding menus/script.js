// JavaScript Document
window.onload = initMenu;

function initMenu() {
	var allLinks = document.getElementsByTagName("a");
	
	for(var i=0; i<allLinks.length; i++) {
		if(allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onclick = toggleMenu;
		}
	}
}

function toggleMenu() {
	var startChar = this.href.lastIndexOf("/")+1;
	var endChar = this.href.lastIndexOf(".");
	var menuName = this.href.substring(startChar, endChar);
	
	var menuArea = document.getElementById(menuName).style;
	if(menuArea.display == "block") {
		menuArea.display = "none";
	} else {
		menuArea.display = "block";
	}
	
	return false;	
}