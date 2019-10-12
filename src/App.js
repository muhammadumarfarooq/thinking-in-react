import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ProductTable from "./components/ProductTable";

function App() {
  const [text, setText] = useState("");
  const [checkBox, setcheckBox] = useState(false);

  const products = [
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

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onCheckBoxChange = () => {
    setcheckBox(!checkBox);
    console.log(checkBox);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Search
          text={text}
          onFormSubmit={onFormSubmit}
          setText={onInputChange}
          onCheckBoxChange={onCheckBoxChange}
        />
        <ProductTable products={products} checkBox={checkBox} />
      </div>
    </Fragment>
  );
}

export default App;
