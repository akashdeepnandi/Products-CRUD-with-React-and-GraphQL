import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ name, id }) => {
  return (
    <Link to={`/product-list/${id}`} className="collection-item">
      {name}
    </Link>
  );
};

export default ProductItem;
