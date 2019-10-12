import React from "react";

const Navbar = () => {
  return (
    <div className='navbar bg-success'>
      <h2>
        {" "}
        <i class='fab fa-think-peaks'></i> Thinking in React.js
      </h2>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
