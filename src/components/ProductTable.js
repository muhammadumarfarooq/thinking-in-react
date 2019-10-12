import React from "react";
import ProductCatagory from "./ProductCategory";
import ProductData from "./ProductData";

const ProductTable = () => {
  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    },
    {
      category: "Wearing",
      price: "$19.99",
      stocked: false,
      name: "T-Shirt"
    },
    {
      category: "Wearing",
      price: "$59.99",
      stocked: true,
      name: "Pant & Shirt"
    }
  ];

  const tableData = [];
  let categoryName = null;
  PRODUCTS.map(product => {
    if (product.category !== categoryName) {
      tableData.push(
        <ProductCatagory key={product.catagory} category={product.category} />
      );
    }
    tableData.push(<ProductData product={product} />);
    categoryName = product.category;
  });

  return (
    <table className='all-center'>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {tableData}
    </table>
  );
};

export default ProductTable;
