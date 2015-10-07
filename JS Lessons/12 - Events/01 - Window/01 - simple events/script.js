// JavaScript Document
window.onload = function() {
	alert("The Window has Loaded");
}

window.onunload = function() {
	alert("The Window has now Closed!");	
}

window.onfocus = function() {
	document.getElementById("focusTxt").innerHTML = "You now have FOCUS";	
}

window.onblur = function() {
	document.getElementById("focusTxt").innerHTML = "You now have LOST FOCUS";
}

window.onresize = function() {
	window.resizeTo(300,300);
}

window.onmove = function() {  // will not work on macs
		window.screenX = 100;
}