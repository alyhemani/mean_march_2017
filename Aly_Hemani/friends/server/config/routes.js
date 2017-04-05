var Users = require('../controllers/users')

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/show/:id', Users.show);
	app.post('/users/edit/:id', Users.edit);
	app.delete('/users/destroy/:id', Users.destroy);
	app.post('/sessions', Users.login);
}