/* Eric Zorn: July 15, 2017, Module 6 */

var Rectangle = ((function () {
    "use strict";
    //Canvas and Context Globals
    var canvas = window.document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var mousePressed = false;
    var startingPoint = null;
    var rectangleDimensions = null;


    //Size the Canvas to the Inner-Width and Inner-Height
    function canvasSizing() {
        // "use strict";
        canvas.width = innerWidth - 25;
        canvas.height = innerHeight - 25;
    }




    //Get Cursor Position
    function getCoord(event) {
        // "use strict";
        var userPosition = event.touches ? event.touches[0] : event;
        console.log(userPosition + "User Position");
        var mouseX = userPosition.clientX - ctx.canvas.getBoundingClientRect().left;
        var mouseY = userPosition.clientY - ctx.canvas.getBoundingClientRect().top;

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
        // "use strict";
        //Get Coordinates
        startingPoint = {x: getCoord(event).valueX, y: getCoord(event).valueY};

        rectangleDimensions = {x: getCoord(event).valueX - startingPoint.x, y: getCoord(event).valueY - startingPoint.y};


        ctx.fillRect(startingPoint.x, startingPoint.y, rectangleDimensions.x, rectangleDimensions.y);

        mousePressed = true;
    }


    //Mouse Move
    function mouseMove(event) {
        // "use strict";
        if (mousePressed !== false) {
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            rectangleDimensions = {x: getCoord(event).valueX - startingPoint.x, y: getCoord(event).valueY - startingPoint.y};
            ctx.fillStyle = "yellow";
            ctx.fillRect(startingPoint.x, startingPoint.y, rectangleDimensions.x, rectangleDimensions.y);
        }
    }

    //Mouse Up
    function mouseUp() {
        // "use strict";
        mousePressed = false;
        var width = document.getElementById("recWid");
        var height = document.getElementById("recHgt");
        var area = document.getElementById("areaOutput");
        var perimeter = document.getElementById("perimOutput");
        var recWid = Math.abs(rectangleDimensions.x);
        var recHgt = Math.abs(rectangleDimensions.y);
        var finishedText = document.getElementById("finished");

        //Fill Out Form
        if (mousePressed === false) {
            ctx.closePath();
            width.value = recWid + " px";
            height.value = recHgt + " px";
            area.value = (recWid * recHgt) + " px";
            perimeter.value = (recWid + recWid + recHgt + recHgt) + " px";
            finishedText.innerHTML = "You have successfully drawn a rectangle! Good Job!";
        }
    }


    //Initializing Function
    function init() {
        // "use strict";
        canvasSizing();
        ctx.canvas.addEventListener("mousedown", mouseDown, false);
        ctx.canvas.addEventListener("mousemove", mouseMove, false);
        ctx.canvas.addEventListener("mouseup", mouseUp, false);
        ctx.canvas.addEventListener("touchstart", mouseDown, false);
        ctx.canvas.addEventListener("touchmove", mouseMove, false);
        ctx.canvas.addEventListener("touchend", mouseUp, false);
    }

    return {init: init};
})());

//Assurance that the document it loaded
window.document.onload = console.log("The document is loaded!");



//Load the Init Function
window.onload = Rectangle.init;