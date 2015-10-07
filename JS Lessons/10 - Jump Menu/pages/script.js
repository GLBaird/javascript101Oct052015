// JavaScript Document
window.onload = initForm;
// force page to reload
window.onunload = function() {};

function initForm() {
	var indexNo;
	var locName = String(window.location);
	if(locName.indexOf("mondial")>=0) indexNo = 1;
	if(locName.indexOf("tricorn")>=0) indexNo = 2;
	if(locName.indexOf("bank")>=0) indexNo = 3;
	if(locName.indexOf("drapers")>=0) indexNo = 4;
	document.getElementById("newLocation").selectedIndex = indexNo;
	document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;
	
	if(newPage != "") {
		window.location = newPage;	
	}
}