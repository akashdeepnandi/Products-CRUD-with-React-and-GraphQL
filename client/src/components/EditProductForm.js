import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { CREATE_PRODUCT } from "../queries/productQueries";
import Loader from "./Loader";

const EditProductForm = ({
  match: {
    params: { id },
  },
}) => {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct, { data: createData , loading: createLoading, error: createError }] = useMutation(CREATE_PRODUCT);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct({
      variables: {
        name,
        material,
        price: Number(price),
      },
    });
    setName("");
    setMaterial("");
    setPrice("");
  };
  if (createLoading) return <Loader />;
	if (createError) return <p>Error :(</p>;
	if (createData) return <div className="container"><h4 className="blue-text center">Product Successfully Added</h4></div> 
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "2rem" }}>
        <form className="col s12 m4 offset-m4" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Product Name</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              required
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
            <label htmlFor="">Product Material</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="">Product Price</label>
          </div>
          <button className="btn waves-effect waves-light">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
