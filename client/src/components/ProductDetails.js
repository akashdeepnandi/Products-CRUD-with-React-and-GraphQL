import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../queries/productQueries";
import Loader from "./Loader";

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <p>Error :(</p>;
	const { product } = data;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card center">
            <div className="card-content">
              <h5 className="blue-text text-darken-2">{product.name}</h5>
              <h6 className="blue-text text-lighten-1">
                Made with {product.material}
              </h6>

              <h6 className="blue-text text-lighten-1">Price: Rs.{product.price}</h6>
            </div>
            <div className="card-action">
              <Link
                to={`/edit-product/${id}`}
                className="blue-text text-darken-2"
              >
                <span style={{ fontSize: "1.1rem" }}>Edit</span>
                {"  "}
                <i className="tiny material-icons">edit</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
