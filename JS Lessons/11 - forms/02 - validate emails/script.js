// JavaScript Document
window.onload = initForm;

function initForm() {
	document.getElementById("submit").onclick = submitEmail;
	document.getElementById("emailAddr").onblur = submitEmail;
}

function submitEmail() {
	if (!checkEmail()) {
		changeLabels("invalid");
		return false;
	}
	changeLabels("");
	return true;
}

function changeLabels(classText) {
	var inputField = document.getElementById("emailAddr");
	inputField.className = classText;
	
	var labelTags = document.getElementsByTagName("LABEL");
	for (var i=0; i<labelTags.length; i++) {
		if (labelTags[i].htmlFor == inputField.id) {
			labelTags[i].className = classText;	
		}
	}	
}

function checkEmail() {
	var email = document.getElementById("emailAddr").value;
	var invalidChars = " ;:/\,";
	
	// check for illegal chars
	for (var i=0; i<invalidChars.length; i++) {
		var badChar = invalidChars.charAt(i);
		if(email.indexOf(badChar) > -1) {
			return false;	
		}
	}
	
	// record position of FIRST @ sign
	var atPos = email.indexOf("@",1);
	// check there is an @ sign
	if (atPos == -1) {
		return false;
	}
	
	// check for second @ sign
	if (email.indexOf("@", atPos+1) > -1 ) {
		return false;
	}
	
	// store position of . char after @ sign
	var stopPos = email.indexOf(".", atPos);
	
	// make sure there is a dot after @ sign
	if (stopPos == -1) {
		return false;
	}
	
	// make sure there are at least two chars after period after @ sign
	if (stopPos+3 > email.length) {
		return false;
	}
	
	// check last char is not a dot
	if(email.charAt(email.length-1) == ".") {
		return false;	
	}
	
	// everything is fine
	return true;
}