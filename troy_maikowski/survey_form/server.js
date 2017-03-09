var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/result', function(req, res) {
  console.log("POST DATA\n\n", req.body)
  res.render('show', {data: req.body})
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
