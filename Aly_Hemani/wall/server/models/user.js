var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true,
		minlength: 3
	},
	last_name: {
		type: String,
		required: true,
		minlength: 3
	},
	birthday: {
		type: Date,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	posts: [{
		type: mongoose.Schema.Types.ObjectId, ref:"Post"
	}],
	comments: [{
		type: mongoose.Schema.Types.ObjectId, ref:"Comment"
	}]
}, {timestamps: true})

UserSchema.pre('save', function(done){
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
	done();
})

var User = mongoose.model('User', UserSchema);

