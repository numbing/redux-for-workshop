import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/details" className="navbar-brand">
          details
        </Link>
      </div>
    );
  }
}

export default Navbar;
