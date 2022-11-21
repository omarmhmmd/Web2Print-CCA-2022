/* Show Hide */
let image = document.querySelector(".showHide img");
let imgShown = false;
let imgShownTxt = document.querySelector(".showHide p span");

function showHide() {
  if (imgShown == false) {
    image.style.display = "none";
    imgShown = true;
    imgShownTxt.innerHTML = "hidden";
  } else {
    image.style.display = "block";
    imgShown = false;
    imgShownTxt.innerHTML = "showing";
  }
}
/* End Show Hide */

/* Zoom */
let zoomImg = document.querySelector(".zoomImg");
let isZoom = false;

function zoom() {
  if (isZoom == false) {
    zoomImg.style.display = "block";
    isZoom = true;
    document.querySelector(".zoom h4").innerHTML = "Zoom Out";
    document.querySelector(".zoom h4").style.cursor = "pointer";
  } else {
    zoomImg.style.display = "none";
    isZoom = false;
    document.querySelector(".zoom h4").innerHTML = "Click the image to zoom";
    document.querySelector(".zoom h4").style.cursor = "default";
  }
}
/* End Zoom */

/* Clock */
var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.querySelector(".clock").innerHTML = d.toLocaleTimeString();
}
/* End Clock */

/* Drag */
dragElement(document.querySelector(".dragMe1"));
dragElement(document.querySelector(".dragMe2"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/* End Drag */

/* Position */
let square1 = document.querySelector(".square1");
let square2 = document.querySelector(".square2");

document.querySelector(".pstn1").innerHTML = square1.offsetTop;
document.querySelector(".pstn2").innerHTML = square2.offsetTop;

if (square2.offsetTop > "1000px") {
  square2.style.backgroundColor = "pink";
} else {
  square2.style.backgroundColor = "cyan";
  square2.style.marginTop = "100px";
  square2.style.marginLeft = "100px";
}
/* End Position */
