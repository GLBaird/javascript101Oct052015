// JavaScript Document
addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction) {
	var oldFunction = window.onload;
	
	// check to see if function
	if (typeof oldFunction == "function") {
		window.onload = function() {
			if(oldFunction) {
				oldFunction();
			}
			newFunction();
		}
	} else {
		window.onload = newFunction;	
	}
}

function initOne() {
	document.getElementById("textArea").innerHTML = "<p>First Function has now run</p>";
}

function initTwo() {
	document.getElementById("textArea").innerHTML += "<p>Second Function has now run</p>";
}

function initThree() {
	document.getElementById("textArea").innerHTML += "<p>Third Function has now run</p>";
}
