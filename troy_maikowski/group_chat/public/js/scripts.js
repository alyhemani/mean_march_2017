$(document).ready(function() {
  var name = prompt("Please enter your name:");
  var socket = io.connect();
  // var name = prompt("Please enter your name:");
  socket.emit('new_user_joined', {name: name});

  socket.on('update_joined_user', function(data) {
    var htmlStr = `<p>${data.name} has joined the chatroom</p>`;
    $('#chatroom').append(htmlStr);
  })

  $('form').submit(function() {
    socket.emit('message_submit', {
      name: name,
      msg: $('input[name=message]').val()
    });
    return false;
  });

  socket.on('update_messages', function(data) {
    var htmlStr = `<p>${data.name}:   ${data.msg}</p>`;
    $('#chatroom').append(htmlStr);
    $('input[name=message]').val("");
  })
})
