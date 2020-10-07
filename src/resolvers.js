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
      const { data } = await Axios.post(
        "https://5f3b9c9dfff8550016ae56d0.mockapi.io/products/",
        {
          name,
          price,
          material,
        }
      );
      return data;
    },
    editProduct: async (_, { id, name, price, material }) => {
      const { data } = await Axios.put(
        `https://5f3b9c9dfff8550016ae56d0.mockapi.io/products/${id}`,
        {
          name,
          price,
          material,
        }
      );
      return data;
    },
    removeProduct: async (_, { id }) => {
      try {
        const { data } = await Axios.delete(
          `https://5f3b9c9dfff8550016ae56d0.mockapi.io/products/${id}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
