
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);
var counter = 0;

io.sockets.on('connection', function (socket) {
  io.emit('initialize', {count: counter})
  console.log("Sockets Work!");
  socket.on("post_count_up", function (data){
    counter ++
    io.emit('update', {count: counter});
  })
  socket.on("post_reset", function (data){
    counter = 0
    io.emit('update', {count: counter});
  })
})
