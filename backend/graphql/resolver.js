const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user')

module.exports = {
	hello() {
		return 'Xin chào!'
	},

	login: async ({email, password}) => {
		const user = await User.findOne({email: email})
		if (!user) {
			throw new Error('Not found user!')
		}
		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			throw new Error('Password is incorrect!');
		}

		// Create token
		const token = jwt.sign({userId: user._id, email: user.email}, 'mysecret', {expiresIn: '60s'}) //
		return {token}
	},

	createUser: async ({userInput}, req) => {
		const user = new User({
			name: userInput.name,
			age: userInput.age,
			email: userInput.email,
			password: await bcrypt.hash(userInput.password, 12)
		})

		const createdUser = await user.save();

		return createdUser;
	},

	getAllUsers: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Not authenticated!')
		}
		const users = await User.find();
		return users;
	}
}