const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const mongoose = require('./utils/mongoose');
const auth = require('./middleware/auth');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) =>{
	res.send('Home page')
})

app.use(auth);

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolver,
	graphiql: true
}))

mongoose.connect('mongodb://localhost:27017/graphql')
.then(() => {
	app.listen(port);
});
