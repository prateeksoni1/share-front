import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" style={{ backgroundColor: "#e74c3c" }}>
        <a
          className="navbar-brand text-white"
          style={{ textShadow: "5px", fontStyle: "italic" }}
          href="/"
        >
          Share
        </a>
        <div className="form-inline my-2 my-lg-0">
          <Link to="/login">
            <button className="btn btn-outline-light">
              <span> Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-outline-light ml-3">
              <span> Sign Up</span>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
