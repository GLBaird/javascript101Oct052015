// JavaScript Document
window.onload = initCookie;

function initCookie() {
	var userName = "-- Not Set  --";
	
	if(document.cookie != "") {
		userName = document.cookie.split("=")[1];
	}
	
	document.getElementById("response").innerHTML = userName;
	
	document.getElementById("submitButton").onclick = setCookie;
	
	function setCookie() {
		userName = document.getElementById("userName").value;
		document.getElementById("userName").value = "";
		document.getElementById("response").innerHTML = userName;
		
		var expiryDate = new Date();
		expiryDate.setMonth(expiryDate.getMonth() + 12);
		
		// make cookie
		document.cookie = "userName="+userName+";path=/;expires="+expiryDate.toGMTString();
	}
}

