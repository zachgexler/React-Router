import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/stocks">
          <li>DASHBOARD</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
