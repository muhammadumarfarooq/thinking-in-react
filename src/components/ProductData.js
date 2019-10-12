import React from "react";

const ProductData = ({ product }) => {
  let productName;
  if (!product.stocked) {
    productName = <td style={{ color: "red" }}>{product.name}</td>;
  } else {
    productName = <td>{product.name}</td>;
  }

  return (
    <tr>
      {productName}
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductData;
