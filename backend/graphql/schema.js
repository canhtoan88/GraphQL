const {buildSchema} = require('graphql');

module.exports = buildSchema(`
	type User {
		_id: ID!
		name: String!
		age: Int!
		email: String!
		password: String!
	}

	input UserInputData {
		name: String!
		age: Int!
		email: String!
		password: String!
	}

	type AuthData {
		token: String!
	}

	type RootQuery {
		login(email: String!, password: String!): AuthData!
		getAllUsers: [User!]
	}

	type RootMutation {
		createUser(userInput: UserInputData): User!
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`)