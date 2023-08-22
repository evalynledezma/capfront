import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to my store!</h1>

      <div className="home-buttons-wrapper">
        <Link to="/items">See all my Items</Link>
        <Link to="/add-items">Add an Item</Link>
      </div>
    </div>
  );
}
