"use strict";

// setup user interface
var panelList = document.getElementById("nameList");
var panelAdd  = document.getElementById("newName");
var inputName = document.getElementById("nameInput");
var nameForm  = document.getElementById("nameForm");
var errorInfo = document.getElementById("errorInfo");
var nameList  = document.getElementById("list");

// show
panelAdd.style.display = "block";

// UI functions
function clearForm() {
    inputName.value = "";
    errorInfo.classList.remove("show");
}

function addDetailsToNameList(details) {
    // add to list
    var li = document.createElement("li");

    var img = new Image();
    img.src = details.avatar;
    img.alt = "Avatar";
    li.appendChild(img);

    var text = document.createTextNode(details.name);
    li.appendChild(text);

    nameList.appendChild(li);
}

function updateNameList() {
    // empty name list
    nameList.innerHTML = "";

    // build name list
    for (var i in names) {
        var details = names[i];
        addDetailsToNameList(details);
    }
}

function moveToPanelWithArrow(e) {
    // check for left and right arrow AND the use is not typing in a name
    if ((e.which == 37 || e.which == 39) && inputName !== document.activeElement) {
        panelAdd.classList.toggle("hide");
        panelList.classList.toggle("hide");
        clearForm();
    }
}

// event handlers for toolbar
function showListPanel(e) {
    panelList.classList.remove("hide");
    panelAdd.classList.add("hide");
    setTimeout(clearForm, 1000);
}

function showAddPanel(e) {
    panelList.classList.add("hide");
    panelAdd.classList.remove("hide");
}

// add event listeners to toolbar
document.getElementById("panelList").addEventListener("click", showListPanel);
document.getElementById("panelAdd").addEventListener("click", showAddPanel);

// add keyboard listeners
document.body.addEventListener("keydown", moveToPanelWithArrow);

// setup name list
var names = [];

// Load names from local storage

function saveNames() {
    if (typeof Storage !== "undefined") {
        localStorage.names = JSON.stringify(names);
    } else {
        console.warn("Local Storage not found!");
    }
}

function loadNames() {
    if (typeof  Storage !== "undefined" && localStorage.names) {
        names = JSON.parse(localStorage.names);
    } else {
        console.warn("Local Storage not found!");
    }
}

// Refresh name list
loadNames();
updateNameList();

window.addEventListener("beforeunload", saveNames);

// form event handler
function validateAndAddName(e) {
    e.preventDefault();

    // get value out of input
    var newName = inputName.value;

    // validate name
    if (newName == "") {
        errorInfo.classList.add("show");
        errorInfo.innerHTML = "You need to enter a valid name!";
        return;
    } else if (newName.length > 30) {
        errorInfo.classList.add("show");
        errorInfo.innerHTML = "You need a shorter name!";
        return;
    } else {
        clearForm();
    }

    // save name
    var details = {
        name: newName,
        avatar: getRandomAvatarPath()
    };

    names.push(details);

    addDetailsToNameList(details);
}

// listen to form for submit
nameForm.addEventListener("submit", validateAndAddName);
