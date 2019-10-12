import React, { useState, useContext } from "react";

const Search = ({
  checkBox,
  text,
  setText,
  onFormSubmit,
  onCheckBoxChange
}) => {
  return (
    <div>
      <form className='form' onSubmit={onFormSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={setText}
        />
        <input
          type='submit'
          value='Submit'
          className='btn btn-success btn-block'
        />
      </form>

      <div className='card'>
        <input type='checkbox' onChange={onCheckBoxChange} />
        <span className='text-success'>Only show products in stock</span>
      </div>
    </div>
  );
};

export default Search;
