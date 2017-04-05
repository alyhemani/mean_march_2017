var mongoose = require('mongoose');
var Users = require('../controllers/users');
var Posts = require('../controllers/posts');

module.exports = function(app){
	app.post('/create', Users.create);
	app.post('/login', Users.login);
	app.get('/users/:id', Users.show);
	app.post('/post', Posts.post);
	app.get('/pull', Posts.pull);
	app.post('/comment', Posts.comment);
}