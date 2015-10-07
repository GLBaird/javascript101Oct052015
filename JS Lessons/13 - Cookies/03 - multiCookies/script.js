// JavaScript Document
window.onload = initForm;

function initForm() {
	document.getElementById("submitInfo").onclick = storeCookie;
}

function storeCookie() {
	var colour = "colour="+document.getElementById("col").value;
	var borders = "border="+document.getElementById("bord").value;
	var backGround = "backGround="+document.getElementById("back").checked;
	
	var currentDate = new Date();
	currentDate.setMonth(currentDate.getMonth()+12);
	var expires = "expires="+currentDate.toGMTString();
	
	var colCookie = colour+";"+expires+";path=/;";
	var borderCookie = borders+";"+expires+";path=/;";
	var backCookie = backGround+";"+expires+";path=/;";
	
	document.cookie = colCookie;
	document.cookie = borderCookie;
	document.cookie = backCookie;
	
	window.open("retrieve.html", "Cookie Display", "width=800,heigh=600");
	return false;
}