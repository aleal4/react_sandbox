import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      Hello! I'm Nav!
      <ul>
        <Link to="/home">Home </Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
      </ul>
    </div>
  );
}

export default NavBar;
