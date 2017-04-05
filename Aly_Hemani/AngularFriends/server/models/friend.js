console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 fname:{type: String, required: true, minlength: 3},
 lname:{type: String, required: true, minlength: 3},
 bday:{type: Date, required: true}
}, {timestamps: true})

var Friend = mongoose.model('Friend', FriendSchema);
