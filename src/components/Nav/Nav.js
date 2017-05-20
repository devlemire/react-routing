import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';

export default function Nav() {
  return (
    <div className="outline">
      <p> This is the Nav Component </p>

      <Link className="navLink" to="/">
        <span>Home</span>
      </Link>

      <Link className="navLink" to="/store">
        <span>Store</span>
      </Link>

      <Link className="navLink fr" to="/checkout">
        <span>Checkout</span>
      </Link>
    </div>
  )
}