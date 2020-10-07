import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query getProducts{
		products{
			id
			name
		}
	}
`;
