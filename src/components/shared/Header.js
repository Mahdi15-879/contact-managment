import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ showHandler }) => {
  return (
    <nav className="Header">
      <div>
        <h1>
          <Link to="/">Contact Manager</Link>
        </h1>
        <ul>
          <li>
            <button onClick={showHandler}>Add Contact</button>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
