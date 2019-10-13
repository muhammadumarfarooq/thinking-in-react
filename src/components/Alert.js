import React, { useContext } from "react";

import ProductContext from "../context/products/productContext";

const Alert = () => {
  const productContext = useContext(ProductContext);
  const { alert } = productContext;
  return (
    alert !== null && (
      <div className='alert alert-dark'>
        {" "}
        <i className='fas fa-exclamation-triangle'></i>
        <span>{alert}</span>
      </div>
    )
  );
};

export default Alert;
