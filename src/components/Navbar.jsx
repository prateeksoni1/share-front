import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class Navbar extends Component {
  state = {
    redirect: false
  };

  logout = () => {
    Axios.get("/api/auth/logout").then(res => {
      console.log("logout", res);
      this.props.logoutAction();
      this.setState({ redirect: true });
    });
  };

  render() {
    const home = this.props.user ? "/dashboard" : "/";
    return (
      <nav
        className="navbar  .navbar-expand{-sm|-md|-lg|-xl}"
        style={{ backgroundColor: "#e74c3c" }}
      >
        <a
          className="navbar-brand text-white"
          style={{ textShadow: "5px", fontStyle: "italic" }}
          href={home}
        >
          Share
        </a>
        {this.props.user ? (
          <div className="form-inline my-2 my-lg-0">
            <div
              className="mx-4 my-1 text-white h4"
              style={{ textTransform: "capitalize" }}
            >
              {this.props.user.name}
            </div>

            <button className="btn btn-outline-light" onClick={this.logout}>
              <span> Logout</span>
            </button>
          </div>
        ) : (
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
        )}
        {this.state.redirect ? <Redirect to="/" /> : null}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  {
    logoutAction
  }
)(Navbar);
