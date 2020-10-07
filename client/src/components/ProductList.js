import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    {
      name: "Product 1",
      id: 1,
    },
    {
      name: "Product 2",
      id: 2,
    },
    {
      name: "Product 3",
      id: 3,
    },
    {
      name: "Product 4",
      id: 4,
    },
  ];
  return (
    <div className="container">
      <h4 className="blue-text center">Product list</h4>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="collection" style={{ margin: "2rem" }}>
            {products.map(({ name, id }) => (
              <ProductItem key={id} name={name} id={id} />
            ))}
          </div>
          <Link to="/add-product" className="btn-floating btn-large waves-effect waves-light red right">
            <i className="material-icons">add</i> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
