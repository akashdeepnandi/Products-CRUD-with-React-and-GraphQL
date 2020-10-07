import React from "react";

const ProductForm = ({
  match: {
    params: { id },
  },
}) => {
  if (id) console.log(id);
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "2rem" }}>
        <form className="col s12 m4 offset-m4">
          <div className="input-field">
            <input type="text" required />
            <label htmlFor="">Product Name</label>
          </div>

          <div className="input-field">
            <input type="text" required />
            <label htmlFor="">Product Material</label>
          </div>
          <div className="input-field">
            <input type="number" required />
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

export default ProductForm;
