$(document).ready(function() {
  var socket = io.connect();

  $('form').submit(function() {
    var data_obj = {
      name: $('input[name=name]').val(),
      location: $('select[name=location]').val(),
      fav_lang: $('select[name=fav_lang]').val(),
      comment: $('textarea[name=comment]').val()
    }
    socket.emit('form_submitted', data_obj);
    return false
  });

  socket.on('server_response', function(data) {
    var luckyNum = Math.floor(Math.random() * 1000 + 1)
    var htmlStr = `<p>You emitted the following information to the server: ${JSON.stringify(data)}.
    Your lucky number emitted by the server is ${luckyNum}.</p>`
    $('#msg').html(htmlStr);
  })
})
