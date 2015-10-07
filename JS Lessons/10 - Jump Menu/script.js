// JavaScript Document
window.onload = initForm;
// force page to reload
window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;
	
	if(newPage != "") {
		window.location = "pages/"+newPage;	
	}
}