// JavaScript Document
window.onload = initDocument;

function initDocument() {
	document.getElementById("reload").onclick = reloadPage;
	newCard();
}

function reloadPage() {
	newCard();
	return false;	
}

function newCard() {
	// declare variables
	var randomNumber;
	var column = 0;
	var usedNumbers = new Array(76);
	usedNumbers[0] = true; // set zero as used to stop it appearing in grid
	
	// count through squares and add random numbers
	for(var i=0; i<=23; i++) {
		// check for free square and
		// check for end of column and reset
		if(i == 12) column++;  // square 12 is free square
		if(column == 5) column =0;
		
		// create random number
		do {
			randomNumber = Math.floor(Math.random()*15)+column*15;
		} while(usedNumbers[randomNumber]);
		// mar number s used
		usedNumbers[randomNumber] = true;
		
		// place text into square
		document.getElementById("square"+i).innerHTML = randomNumber;
	}
}