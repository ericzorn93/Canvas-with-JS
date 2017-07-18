/* Eric Zorn: July 15, 2017, Module 6 */

//Assurance that the document it loaded
window.document.onload = console.log('The document is loaded!');

//Canvas and Context Globals
var canvas = window.document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var mousePressed = false;



//Resizing the Canvas
document.getElementById('myCanvas').width = innerWidth - 25;
document.getElementById('myCanvas').height = innerHeight - 25;



function fillForm(wid, hgt) {
    "use strict";
    document.getElementById('recWid').value = wid;
    document.getElementById('recHgt').value = hgt;
    document.getElementById('areaOutput').value = wid * hgt;
    document.getElementById('perimOutput').value = (wid * 2) + (hgt * 2);

    return wid && hgt;
}

function getEvent() {
    "use strict";
    var mouseDown = context.mousePressed;
}


 



//Initializing Function
function init() {
    fillForm(33,30);
    getEvent();
}




//Load the Init Function
window.document.onload = init();