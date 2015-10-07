// JavaScript Document
window.onload = function() {
	document.getElementById("redirect").onclick = clickHandler;	
}

function clickHandler() {
	if(this.toString().indexOf("leon") < 0) {
		if(confirm("We are not responsible for external content, are you sure you want to visit?")) {
			return true;
		} else {
			return false;
		}
	} 
}
