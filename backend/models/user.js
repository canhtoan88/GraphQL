const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
	name: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		require: true
	},
	email: String,
	password: String
})

module.exports = mongoose.model('user', UserSchema);