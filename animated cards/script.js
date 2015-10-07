// JavaScript Document
window.onload = initCard;

var originX;
var originY;
var dragObj;
var numCards = 0;
var cards = new Array();

function initCard() {
	for(var i=0; i<document.images.length; i++) {
		if(document.images[i].name.indexOf("card") > -1) {
			document.images[i].onmousedown = startDrag;
			document.images[i].onmouseup = stopDrag;
			animateCardOnStage(document.images[i], numCards);
			numCards++;
		}
	}
}

function startDrag(evt) {
	dragObj = evt.target;
	originX = evt.layerX;
	originY = evt.layerY;
	dragObj.style.zIndex = numCards+1;
	window.onmousemove = dragObject;
	return false;
}

function stopDrag() {
	window.onmousemove = null;
	dragObj.style.zIndex = numCards-1;
}

function dragObject(evt) {
	var newLeftPos = evt.clientX - originX;
	var newTopPos = evt.clientY - originY;
	dragObj.style.top = newTopPos;
	dragObj.style.left = newLeftPos;
}
function animateCardOnStage(animCard, pos) {
	cards[pos] = {card:animCard, x:-80};
	animCard.style.left = -80;
	animCard.style.top = 100;
	cards[pos].timer = setInterval("moveCard("+pos+")", 10);
}

function moveCard(pos) {
	cards[pos].x+=2;
	cards[pos].card.style.left = cards[pos].x;
	if(cards[pos].x == 100+100*pos) {
		clearInterval(cards[pos].timer);
	}
}