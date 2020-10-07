const { gql } = require("apollo-server");

const typeDefs = gql`
	# This "Product" type defines all fields of a product in our database
	type Product {
		id: String!
		createdAt: String!
		name: String!
		price: Float!
		material: String!
	}

	type Query {
		products: [Product!]
		product(id: String!): Product
	}

	type Mutation {
		createProduct(name: String!, price: Float!, material: String!): Product!
	}
`

module.exports = typeDefs