// JavaScript Document
window.onload = function() {
	for(i=0; i < document.links.length; i++) {
		document.links[i].onclick = clickHandler;
	}
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
