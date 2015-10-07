// JavaScript Document
window.onload = initForm;

function initForm() {
	var allTags = document.getElementsByTagName("*");
	
	// add listeners to all reqd tags
	for (var i=0; i<allTags.length; i++) {
		if(allTags[i].className.indexOf("reqd") > -1) {
			allTags[i].onblur = checkContent;	
		}
	}
}

function checkContent() {
	if(this.value == "") {
		alert("Value required!");
		this.style.backgroundColor = "#ff8888";
		this.focus();
	} else {
		this.style.backgroundColor = "#ffffff";	
	}
}