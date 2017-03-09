
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Sockets Work!");
  socket.on("survey_form", function (data){
    console.log(data)
    var number = Math.floor((Math.random() * 1000) + 1)
    console.log(number)
    var message =  "<p>" + "You emited the following information to the server:" + '</p>' + '<p>' + "name: " + data.name + '</p>' + '<p>' + "location: " + data.location + '</p>' + '<p>' + "language: " + data.language + '</p>' + '<p>' + "comment: " + data.comment + '</p>' + '<p>' + "Your lucky number emitted by the server is " + number + '</p>'
    io.emit('display_info', message)
  })
})
