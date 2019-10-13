import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ProductTable from "./components/ProductTable";
import Alert from "./components/Alert";

import ProductState from "./context/products/ProductState";

const App = () => (
  <ProductState>
    <Navbar />
    <div className='container'>
      <Alert />
      <Search />
      <ProductTable />
    </div>
  </ProductState>
);

export default App;
