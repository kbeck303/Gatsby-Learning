// src/components/MainMenu.js
import * as React from "react";
import { Link } from 'gatsby';

const MainMenuRender = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenuRender
