const mongoose = require('mongoose');

module.exports = {
	connect: mongoDBUri => {
		return mongoose.connect(mongoDBUri, {
			useNewUrlParser: true,
		    useUnifiedTopology: true,
		    useCreateIndex: true
		})
	},

	getMongoose: mongoose
}