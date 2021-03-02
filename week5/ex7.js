function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}

function myKeyDown() {
var element = document.getElementById('circle');
var positionLeft = element.offsetLeft;
element.style.left = positionLeft - 10 + 'px';
}
function myLoadEvent() {
document.addEventListener('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
function changeContent() {
  var element = document.getElementById("circle");
  element.firstChild.nodeValue = "hahaha";
}
function myClickCircleEvent() {
  var element = document.getElementById("circle");
  element.addEventListener("click", changeContent);
}
document.addEventListener('DOMContentLoaded', myClickCircleEvent); //myLoadEvent);
