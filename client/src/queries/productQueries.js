import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query getProducts{
		products{
			id
			name
		}
	}
`;

export const GET_PRODUCT_BY_ID = gql`
	query getProductById($id: String!){
		product(id: $id){
			id
			name
			material
			price
		}
	}
`;
