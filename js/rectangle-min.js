var Rectangle=function(){"use strict";function e(){i.width=innerWidth-25,i.height=innerHeight-25}function t(e){var t=e.touches?e.touches[0]:e;console.log(t+"User Position");var n=t.clientX-l.canvas.getBoundingClientRect().left,a=t.clientY-l.canvas.getBoundingClientRect().top,o={valueX:n,valueY:a};return document.getElementById("status").innerHTML="Mouse Position (Hover): "+n+" | "+a,console.log(o),o}function n(e){d={x:t(e).valueX,y:t(e).valueY},s={x:t(e).valueX-d.x,y:t(e).valueY-d.y},l.fillRect(d.x,d.y,s.x,s.y),c=!0}function a(e){!1!==c&&(l.clearRect(0,0,innerWidth,innerHeight),s={x:t(e).valueX-d.x,y:t(e).valueY-d.y},l.fillStyle="yellow",l.fillRect(d.x,d.y,s.x,s.y))}function o(){c=!1;var e=document.getElementById("recWid"),t=document.getElementById("recHgt"),n=document.getElementById("areaOutput"),a=document.getElementById("perimOutput"),o=Math.abs(s.x),u=Math.abs(s.y),i=document.getElementById("finished");!1===c&&(l.closePath(),e.value=o+" px",t.value=u+" px",n.value=o*u+" px",a.value=o+o+u+u+" px",i.innerHTML="You have successfully drawn a rectangle! Good Job!")}function u(){e(),l.canvas.addEventListener("mousedown",n,!1),l.canvas.addEventListener("mousemove",a,!1),l.canvas.addEventListener("mouseup",o,!1),l.canvas.addEventListener("touchstart",n,!1),l.canvas.addEventListener("touchmove",a,!1),l.canvas.addEventListener("touchend",o,!1)}var i=window.document.getElementById("myCanvas"),l=i.getContext("2d"),c=!1,d=null,s=null;return{init:u}}();window.onload=Rectangle.init;