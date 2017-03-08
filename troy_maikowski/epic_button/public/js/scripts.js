$(document).ready(function() {
  var socket = io.connect();

  $('#epic').on('click', function() {
    socket.emit('epic_clicked', {count: 1});
  });

  socket.on('update_count', function(data) {
    var htmlStr = `<h1>The button has been pushed ${data.count} time(s)</h1>`
    $('#msg').html(htmlStr);
  });

  $('#reset').on('click', function() {
    socket.emit('reset_clicked')
  });

  socket.on('count_reset', function(data) {
    var htmlStr = `<h1>The button has been pushed ${data.count} time(s)</h1>`
    $('#msg').html(htmlStr);
  });
})
