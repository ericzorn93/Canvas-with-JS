/* Eric Zorn: July 15, 2017, Module 6 */
 
var canvas = document.getElementById('myCanvas'); 
var context = canvas.getContext('2d');

var canvasHeight = canvas.height = window.innerHeight - 200;
 var canvasWidth = canvas.width = window.innerWidth - 20;


function drawArea(wid, hgt) {
    "use strict";
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    context.clearRect(0,0, canvas.width, canvas.height);
    context.fillStyle = "#ffff00";
    context.fillRect(x, y, wid, hgt);
}

function mouseClick() {
    //Code goes here...
    
}

function init() {
    drawArea(45,24);
    mouseClick();
}


window.document.onload = init();
window.document.onload = canvasHeight;
window.document.onload = canvasWidth;



