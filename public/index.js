var fixed = document.querySelector('body');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);


let bg;
let y = 0;
var img;
function preload() {
  img = loadImage("images/wall.jpg");
}
var socket;
function setup(){
createCanvas(960,700)
background(img)

noStroke()
socket = io.connect()
socket.on('mouse' , newDrawing);
}

function newDrawing(data){
    ellipse(data.x,data.y,20,20)
}

function mouseDragged(){
    console.log('Sending: '+ mouseX + ','+ mouseY)
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse' , data)
    ellipse(mouseX,mouseY,20,20)
}

function draw(){

    if (mouseIsPressed){
        mouseDragged();
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}