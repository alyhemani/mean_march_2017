var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send("<h1>Hello Express</h1>");
});

app.get('/users', function(req, res) {
  var users_arr = [
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"}
  ]
  res.render('users', {users: users_arr});
});

app.get('/users/new', function(req, res) {
  res.render('index');
});

app.post('/users', function(req, res) {
  console.log("POST DATA \n\n", req.body)
  res.redirect('/users');
});

app.get('/users/:id', function(req, res) {
  console.log("The user id requested is:", req.params.id);
  res.send("You requested the user with id:" + req.params.id);
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
