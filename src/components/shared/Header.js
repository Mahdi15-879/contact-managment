import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <nav className="Header">
      <div>
        <h1>Contact Manager</h1>
        <ul>
          <li>
            <button>Add Contact</button>
          </li>
          <li>About us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
