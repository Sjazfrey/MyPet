import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <Link className="navwords" to="/">
          Home
        </Link>

        <Link className="navwords" to="/health">
          Health
        </Link>

        <Link className="navwords" to="/pictures">
          Pictures
        </Link>

        <Link className="navwords" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
