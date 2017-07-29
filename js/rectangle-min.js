var Rectangle=function(){"use strict";function e(){d.width=innerWidth-25,d.height=innerHeight-25}function t(e){var t=e.touches?e.touches[0]:e;console.log(t+"User Position");var n=Math.floor(t.clientX-c.canvas.getBoundingClientRect().left),o=Math.floor(t.clientY-c.canvas.getBoundingClientRect().top),u={valueX:n,valueY:o};return document.getElementById("status").innerHTML="Mouse Position (Hover): "+n+" | "+Math.abs(o),console.log(u),u}function n(e){r={x:t(e).valueX,y:t(e).valueY},s={x:t(e).valueX-r.x,y:t(e).valueY-r.y},c.fillRect(r.x,r.y,s.x,s.y),m=!0}function o(e){!1!==m&&(c.clearRect(0,0,innerWidth,innerHeight),s={x:t(e).valueX-r.x,y:t(e).valueY-r.y},c.fillStyle="yellow",c.fillRect(r.x,r.y,s.x,s.y))}function u(){m=!1;var e=document.getElementById("recWid"),t=document.getElementById("recHgt"),n=document.getElementById("areaOutput"),o=document.getElementById("perimOutput"),u=Math.abs(s.x),a=Math.abs(s.y),l=document.getElementById("finished");!1===m&&(c.closePath(),e.value=u+" px",t.value=a+" px",n.value=u*a+" px",o.value=u+u+a+a+" px",l.innerHTML="You have successfully drawn a rectangle! Good Job!")}function a(){var e=document.getElementById("recWid").value,n=document.getElementById("recHgt").value,o=document.getElementById("areaOutput"),u=document.getElementById("perimOutput"),a=document.getElementById("positionX").value,l=document.getElementById("positionX"),i=document.getElementById("positionY"),m=document.getElementById("positionY").value,r=document.getElementById("status"),s=t(event).valueX,v=t(event).valueY;if(c.fillStyle="red",c.fillRect(a,m,e,n),e&&n)return c.clearRect(0,0,d.width,d.height),c.beginPath(),c.fillRect(e,n,a,m),o.value=e*e+n*n+" px",u.value=2*e+2*n,l.value=t(event).valueX,i.value=Math.floor(Math.abs(t(event).valueY)),{width:this.width,height:this.height,positionX:a,positionY:m,area:this.area,perimeter:this.perimeter}}function l(){c.clearRect(0,0,d.width,d.height),document.getElementById("positionX").value="",document.getElementById("positionY").value="",document.getElementById("recWid").value="",document.getElementById("recHgt").value="",document.getElementById("status").innerHTML="Mouse Position (Inputs): 0 | 0",document.getElementById("areaOutput").innerHTML="",document.getElementById("perimOutput").innerHTML=""}function i(){var t=document.getElementById("myButton");e();var i=document.getElementById("clearButton");c.canvas.addEventListener("mousedown",n,!1),c.canvas.addEventListener("mousemove",o,!1),c.canvas.addEventListener("mouseup",u,!1),c.canvas.addEventListener("touchstart",n,!1),c.canvas.addEventListener("touchmove",o,!1),c.canvas.addEventListener("touchend",u,!1),t.addEventListener("click",a),i.addEventListener("click",l)}var d=window.document.getElementById("myCanvas"),c=d.getContext("2d"),m=!1,r=null,s=null;return{init:i}}();window.document.onload=console.log("The document is loaded!"),window.onload=Rectangle.init;