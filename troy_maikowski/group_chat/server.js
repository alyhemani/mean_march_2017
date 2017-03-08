var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

var server = app.listen(8000, function() {
  console.log('listening on port 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.on('new_user_joined', function(data) {
    io.emit('update_joined_user', data)
  })


  socket.on('message_submit', function(data) {
    io.emit('update_messages', data);
  })
});
