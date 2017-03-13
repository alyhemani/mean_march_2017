var Users = require('./../controllers/users');


module.exports = function(app){
	app.get('/', Users.index) // call functions i've defined in my controllers	
}