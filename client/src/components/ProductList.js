import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCTS } from "../queries/productQueries";
import ProductItem from "./ProductItem";
import Loader from "./Loader";


const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <><Loader /></>;
  if (error) return <p>Error :(</p>;
  console.table(data);
	const { products } = data;
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
          <Link
            to="/add-product"
            className="btn-floating btn-large waves-effect waves-light red right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
