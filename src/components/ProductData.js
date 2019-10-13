import React, { useContext } from "react";
import ProductContext from "../context/products/productContext";

const ProductData = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { checkBox } = productContext;
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
