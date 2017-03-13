var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client/static'));


//connect to db and import models
require('./server/config/mongoose');


//import the routes function and pass along the app object
require('./server/config/routes')(app)

app.listen(8000, function(){
	console.log('listening on port 8000...')
})