import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="outline">
      <span> This is the Home Component </span>

      <p> Welcome message goes here </p>
      <p> DevMountain Logo goes here </p>

      <Link to="/store">
        <p> Link to Store Goes Here </p>
      </Link>
    </div>
  )
}