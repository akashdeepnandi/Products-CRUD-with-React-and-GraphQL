const { default: Axios } = require("axios");

const resolvers = {
  Query: {
    products: async () => {
      const { data } = await Axios.get(
        "https://5f3b9c9dfff8550016ae56d0.mockapi.io/products"
      );
      return data;
    },
    product: async (parent, { id }) => {
      const { data } = await Axios.get(
        `https://5f3b9c9dfff8550016ae56d0.mockapi.io/products/${id}`
      );
      return data;
    },
	},
	Mutation: {
		createProduct: async (_, { name, price, material }) => {
			const { data } = await Axios.post('https://5f3b9c9dfff8550016ae56d0.mockapi.io/products/', {
				name, price, material
			});
			return data;
		}
	}
};

module.exports = resolvers;
