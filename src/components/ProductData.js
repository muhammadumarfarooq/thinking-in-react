import React from "react";

const ProductData = ({ product, checkBox }) => {
  let productDetail;
  if (!product.stocked) {
    productDetail = checkBox || (
      <tr style={{ color: "red" }}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  } else {
    productDetail = (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

  return productDetail;
};

export default ProductData;
