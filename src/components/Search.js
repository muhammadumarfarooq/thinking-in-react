import React, { useState, useContext } from "react";

const Search = () => {
  return (
    <div>
      <form className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          // value={text}
          // onChange={onInputChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn btn-success btn-block'
        />
      </form>

      <div className='card'>
        <input type='checkbox' />
        <span className='text-success'>Only show products in stock</span>
      </div>
    </div>
  );
};

export default Search;
