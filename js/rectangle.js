/* Eric Zorn: July 15, 2017, Module 6 */

var canvas = document.getElementById('myCanvas'); 
var context = canvas.getContext('2d');


function drawArea(wid, hgt) {
    "use strict";
    context.clearRect(0,0, canvas.width, canvas.height);
    context.fillStyle = "#ffff00";
    context.fillRect(0, 0, wid, hgt);
}

function mouseClick() {
    //CODE GOES HERE
}

function init() {
    drawArea(45,29);
    mouseClick();
}

window.document.onload = init();
window.document.onload = console.log('Document Loaded succesfully!'); 
