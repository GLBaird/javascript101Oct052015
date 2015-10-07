// JavaScript Document
window.onload = initAll;


function initAll() {
	var colour = findValue("colour");
	var bord = findValue("border");
	var backGround = findValue("backGround");
	
	var objDiv = document.getElementById("styleMe").style;
	objDiv.color = colour;
	objDiv.border = "solid #000000 "+bord+"px";
	
	objDiv.backgroundColor = (backGround=="true")? "blue": "white";
}

function findValue(cookieName) {
	var cookies = document.cookie.split(";");
	for(var i=0; i<cookies.length; i++) {
		if(cookies[i].split("=")[0] == cookieName || cookies[i].split("=")[0] == " "+cookieName) {
			return cookies[i].split("=")[1];
		}
	}
}