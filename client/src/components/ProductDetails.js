import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCT_BY_ID, REMOVE_PRODUCT } from "../queries/productQueries";
import Loader from "./Loader";

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
	});
	const [
    removeProduct,
    { data: removeData, loading: removeLoading, error: removeError },
  ] = useMutation(REMOVE_PRODUCT);
  const [IsDeleting, setDelete] = useState(false);

  if (loading)
    return (
      <>
        <Loader />
      </>
    );
	if (error) return <p>Error :(</p>;
	
  if (IsDeleting)
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m3 offset-m6 center">
            <h4 className="red-text">Are you sure?</h4>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                removeProduct({
									variables: {
										id
									}
								});
								setDelete(false)
              }}
            >
              Yes
            </button>
            <button className="btn" onClick={(e) => setDelete(false)}>
              No
            </button>
          </div>
        </div>
      </div>
		);
	if (removeLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (removeError) return <p>Error :(</p>;
	if (removeData) {
		return (
			<div className="container center">
				<h4 className="blue-text">Product has been deleted</h4>
			</div>
		)
	}
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

              <h6 className="blue-text text-lighten-1">
                Price: Rs.{product.price}
              </h6>
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
              <button
                className="waves-effect waves-light btn red"
                onClick={(e) => setDelete(true)}
              >
                <i className="material-icons right">delete</i>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
