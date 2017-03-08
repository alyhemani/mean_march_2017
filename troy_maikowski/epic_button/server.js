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

var server = app.listen(6789, function() {
  console.log('listening on port 6789');
});

var io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function(socket) {
  console.log('Connection:', socket.id);

  socket.on('epic_clicked', function() {
    count += 1;
    io.emit('update_count', {count: count});
  });

  socket.on('reset_clicked', function() {
    count = 0;
    io.emit('count_reset', {count: count});
  })
});
