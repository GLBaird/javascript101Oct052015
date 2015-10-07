// JavaScript Document
window.onload = function() {
	switch(navigator.platform) {
		case "win32":
		alert("You're running Windows");
		break;
		
		case "MacPPC":
		alert("Your running a PowerPC Macintosh Computer");
		break;
		
		case "MacIntel":
		case "X11":
		alert("You have an Intel Macintosh Computer");
		break;
		
		default:
		alert("You have a "+navigator.platform);
		break;
	}
}