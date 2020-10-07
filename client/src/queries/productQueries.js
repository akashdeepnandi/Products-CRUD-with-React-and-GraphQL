import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    product(id: $id) {
      id
      name
      material
      price
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $price: Float!, $material: String!) {
    createProduct(name: $name, price: $price, material: $material) {
      id
      name
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct(
    $id: String!
    $name: String!
    $price: Float!
    $material: String!
  ) {
    editProduct(id: $id, name: $name, price: $price, material: $material) {
      name
      material
    }
  }
`;
