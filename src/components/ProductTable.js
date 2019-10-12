import React from "react";
import ProductCatagory from "./ProductCategory";
import ProductData from "./ProductData";

const ProductTable = ({ products, checkBox }) => {
  const tableData = [];
  let categoryName = null;
  products.map(product => {
    if (product.category !== categoryName) {
      tableData.push(
        <ProductCatagory key={product.category} category={product.category} />
      );
    }
    tableData.push(
      <ProductData checkBox={checkBox} key={product.name} product={product} />
    );
    categoryName = product.category;
    return undefined;
  });

  return (
    <table className='all-center'>
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
