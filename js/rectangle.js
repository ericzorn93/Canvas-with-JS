/* Eric Zorn: July 15, 2017, Module 6 */

//Assurance that the document it loaded
window.document.onload = console.log("The document is loaded!");

//Canvas and Context Globals
var canvas = window.document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mousePressed = false;
var startingPoint = null;
var endingPoint = null;


//Size the Canvas to the Inner-Width and Inner-Height
canvas.width = innerWidth - 25;
canvas.height = innerHeight - 25;



//Get Cursor Position

function getCoord(event) {
    "use strict";
    var mouseX = parseInt(event.clientX - ctx.canvas.getBoundingClientRect().left);
    var mouseY = parseInt(event.clientY - ctx.canvas.getBoundingClientRect().top);
    var mousePosition = {
        valueX: mouseX,
        valueY: mouseY
    };
    // var secondMousePosition = [mouseX,mouseY];
    var status = document.getElementById("status");
    status.innerHTML = "Mouse Position (Hover): " + mouseX + " | " + mouseY;

    //Console Logging the Object of Positions X and Y
    console.log(mousePosition);

    return mousePosition;
}


//Mouse Down
function mouseDown(event) {
    "use strict";
    //Get Coordinates
    startingPoint = {x: getCoord(event).valueX, y: getCoord(event).valueY};

    endingPoint = {x: getCoord(event).valueX - startingPoint.x, y: getCoord(event).valueY - startingPoint.y};


    ctx.fillRect(startingPoint.x, startingPoint.y, endingPoint.x, endingPoint.y);

    mousePressed = true;
}


//Mouse Move
function mouseMove(event) {
    "use strict";
    if (mousePressed !== false) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        endingPoint = {x: getCoord(event).valueX - startingPoint.x, y: getCoord(event).valueY - startingPoint.y};
        ctx.fillStyle = "yellow";
        ctx.fillRect(startingPoint.x, startingPoint.y, endingPoint.x, endingPoint.y);
    }
}

//Mouse Up
function mouseUp() {
    "use strict";
    mousePressed = false;
    var width = document.getElementById("recWid");
    var height = document.getElementById("recHgt");
    var area = document.getElementById("areaOutput");
    var perimeter = document.getElementById("perimOutput");
    var recWid = getCoord(event).valueX;
    var recHgt = getCoord(event).valueY;
    var finishedText = document.getElementById("finished");

    //Fill Out Form
    if (mousePressed === false) {
        ctx.closePath();
        width.value = recWid + " px";
        height.value = recHgt + " px";
        area.value = recWid * recHgt + " px";
        perimeter.value = recWid + recWid + recHgt + recHgt + " px";
        finishedText.innerHTML = "You have succesfully drawn a rectangle! Good Job!";
    }
}


//Initializing Function
function init() {
    "use strict";

    ctx.canvas.addEventListener("mousedown", mouseDown, false);
    ctx.canvas.addEventListener("mousemove", mouseMove, false);
    ctx.canvas.addEventListener("mouseup", mouseUp, false);
}



//Load the Init Function
window.document.onload = init();