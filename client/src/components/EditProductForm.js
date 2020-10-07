import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { EDIT_PRODUCT, GET_PRODUCT_BY_ID } from "../queries/productQueries";
import Loader from "./Loader";

const EditProductForm = ({
  match: {
    params: { id },
  },
}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [
    editProduct,
    { data: editData, loading: editLoading, error: editError },
  ] = useMutation(EDIT_PRODUCT);
  useEffect(() => {
    if (data) {
      setName(data.product.name);
      setMaterial(data.product.material);
      setPrice(data.product.price);
    }
  }, [data]);
  if (loading)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <p>Error :(</p>;
  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct({
      variables: {
        id,
        name,
        material,
        price: Number(price),
      },
    });
    setName("");
    setMaterial("");
    setPrice("");
  };
  if (editLoading) return <Loader />;
  if (editError) {
    console.log(editError);
    return <p>Error :(</p>;
  }
  if (editData)
    return (
      <div className="container">
        <h4 className="blue-text center">Product Successfully Edited</h4>
      </div>
    );
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
            <label className={name ? "active" : "no"} htmlFor="">
              Product Name
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              required
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
            <label className={name ? "active" : "no"} htmlFor="">
              Product Material
            </label>
          </div>
          <div className="input-field">
            <input
              type="number"
              required
              className="active"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className={name ? "active" : "no"} htmlFor="">
              Product Price
            </label>
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
