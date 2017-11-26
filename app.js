const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server)
app.set(express.static,__dirname/'public')
app.use(express.static('public'));
app.use(express.static('node_modules'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

io.on('connection' , function(socket){
    console.log('user connected')
})