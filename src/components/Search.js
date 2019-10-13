import React, { useContext } from "react";
import ProductContext from "../context/products/productContext";

const Search = () => {
  const productContext = useContext(ProductContext);
  const { onCheckBoxChange, onInputChange, checkBox } = productContext;
  return (
    <div>
      <form className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Products...'
          onChange={onInputChange}
        />
      </form>

      <div className='card'>
        <div>
          <input type='checkbox' onChange={onCheckBoxChange} />
          <span className='text-success'>Only show products in stock</span>
        </div>
        {checkBox && <div className='badge bg-success'>In stock</div>}
      </div>
    </div>
  );
};

export default Search;
