import React, { useContext } from "react";
import ProductCatagory from "./ProductCategory";
import ProductData from "./ProductData";

import ProductContext from "../context/products/productContext";

const ProductTable = () => {
  const productContext = useContext(ProductContext);
  const { filteredArray, products } = productContext;

  const tableData = [];
  let categoryName = null;
  if (filteredArray.length >= 1) {
    filteredArray.map(product => {
      if (product.category !== categoryName) {
        tableData.push(
          <ProductCatagory key={product.category} category={product.category} />
        );
      }
      tableData.push(<ProductData key={product.name} product={product} />);
      categoryName = product.category;
      return undefined;
    });
  } else {
    products.map(product => {
      if (product.category !== categoryName) {
        tableData.push(
          <ProductCatagory key={product.category} category={product.category} />
        );
      }
      tableData.push(<ProductData key={product.name} product={product} />);
      categoryName = product.category;
      return undefined;
    });
  }

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default ProductTable;
