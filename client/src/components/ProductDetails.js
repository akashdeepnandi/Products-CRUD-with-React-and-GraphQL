import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card center">
            <div className="card-content">
              <h5 className="blue-text text-darken-2">Product name</h5>
              <h6 className="blue-text text-lighten-1">
                Made with Product material
              </h6>

              <h6 className="blue-text text-lighten-1">Price: Rs.x</h6>
            </div>
            <div className="card-action">
              <Link to={`/edit-product/${id}`} className="blue-text text-darken-2">
                <span style={{ fontSize: "1.1rem" }}>Edit</span>{'  '}
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
