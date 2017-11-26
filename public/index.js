
var socket;
function setup(){
createCanvas(600,600)
background('#FFE624')
noStroke()
socket = io.connect('http://localhost:3000')
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