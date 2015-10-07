// JavaScript Document
window.onload = initDocument;

function initDocument() {
	document.getElementById("clickArea").onclick = clickHandler;
}

function clickHandler() {
	alert("You clicked me!!");	
}