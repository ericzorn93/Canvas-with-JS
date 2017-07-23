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



//Fill Out Form
function fillForm(wid, hgt) {
    "use strict";
    document.getElementById("recWid").value = wid;
    document.getElementById("recHgt").value = hgt;
    document.getElementById("areaOutput").value = wid * hgt;
    document.getElementById("perimOutput").value = (wid * 2) + (hgt * 2);

    return wid && hgt;
}


//Get Cursor Position

function getCoord(event) {
    "use strict";
    var mouseX = event.clientX - ctx.canvas.getBoundingClientRect().left;
    var mouseY = event.clientY - ctx.canvas.getBoundingClientRect().top;
    
    var mousePosition = {
        valueX: mouseX,
        valueY: mouseY
    };
    
    var secondMousePosition = [mouseX,mouseY];
    
    var status = document.getElementById("status");
    status.innerHTML = "Mouse Position (Hover): " + mouseX + " | " + mouseY;
    
    //console.log(mousePosition);

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
        ctx.fillStyle = "red";
        ctx.fillRect(startingPoint.x, startingPoint.y, endingPoint.x, endingPoint.y);
    }
}
 

//Mouse Up
function mouseUp() {
    "use strict";
    mousePressed = true;
    if (mousePressed === true) {
        ctx.clearRect(0, 0, 0, 0);
    }
}


ctx.canvas.addEventListener("mousedown", mouseDown, false);
ctx.canvas.addEventListener("mousemove", mouseMove, false);
ctx.canvas.addEventListener("mouseup", mouseUp, false);


// ctx.canvas.addEventListener('click', function (event) {
//     ctx.fillStyle = "orange";
//     ctx.beginPath();
//     ctx.fillRect(getCoord(event).valueX, getCoord(event).valueY, 30, 30);
// });


//Initializing Function
function init() {
    fillForm();
    // ctx.canvas.addEventListener('mousemove', getCoord);
}



//Load the Init Function
window.document.onload = init();
