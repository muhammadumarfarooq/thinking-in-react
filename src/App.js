import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Search />
        <ProductTable />
      </div>
    </Fragment>
  );
}

export default App;
