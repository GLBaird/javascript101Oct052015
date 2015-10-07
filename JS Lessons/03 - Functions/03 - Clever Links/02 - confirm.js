// JavaScript Document
window.onload = initDocument;

function initDocument() {
	document.getElementById("redirect").onclick = clickHandler;
}

function clickHandler() {
	if(confirm("Are you sure you want to go there?")) {
		return true;
	} else {
		return false;
	}
}