// JavaScript Document
window.onload = initForms;

function initForms() {
	for (var i=0; i<document.forms.length; i++) {
		document.forms[i].onsubmit = function() {
			return validForm();
		}
	}
	document.getElementById("sunRoof").onclick = setDoors;
	document.getElementById("fourD").onclick = setSunRoof;
}

function setDoors() {
	if(this.checked) {
		document.getElementById("twoD").checked = true;
	}
}

function setSunRoof() {
	document.getElementById("sunRoof").checked = false;
}

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;
	
	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
		
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
		
		thisTag.className = outClass;
		
		if (outClass.indexOf("invalid") >-1) {
			invalidLabel(thisTag);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
			
			switch(thisClass) {
				case "":
				case "invalid":
				break;
				
				case "reqd":
				if (allGood && thisTag.value == "") {
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				
				case "radio":
				if(allGood && !radioPicked(thisTag.name)) {
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				
				case "email":
				case "label":
				classBack += thisClass;
				break;
				
				default:
				if (allGood && !crossCheck(thisTag, thisClass)) {
					classBack = "invalid ";
				}
				classBack += thisClass;
			}
			return classBack;
		}
		
		function crossCheck(inTag, otherFieldID) {
			if (!document.getElementById(otherFieldID)) {
				return false;
			}
			return (inTag.value == document.getElementById(otherFieldID).value);
		}
		
		function invalidLabel(errorTag) {
			for(var j=0; j<allTags.length; j++) {
				if(allTags[j].tagName == "LABEL" && 
				   (allTags[j].htmlFor == errorTag.id || 
					allTags[j].htmlFor == errorTag.name)) {
						allTags[j].className += " invalid";
				}
			}
		}
		
		function radioPicked(radioName) {
			var radioSet = "";
			
			for (var k=0; k<document.forms.length; k++) {
				if (!radioSet) {
					radioSet = document.forms[k][radioName];
				}
			}
			if (!radioSet) {	// catches no radio buttons posibility
				return false;
			}
			
			for (k=0; k<radioSet.length; k++) {
				if (radioSet[k].checked) {
					return true;	
				}
			}
			return false;
		}
	}
}