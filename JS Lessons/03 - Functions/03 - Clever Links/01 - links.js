// JavaScript Document
window.onload = initDocument;

function initDocument() {
	document.getElementById("redirect").onclick = clickHandler;
}

function clickHandler() {
	alert("This link is not working now, go away!");
	return false;   // this prevents the link from functioning
}