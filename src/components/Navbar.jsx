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

  componentDidMount() {
    console.log("outside if");
    if (this.props.user && this.state.loggedIn === false) {
      this.setState({ loggedIn: true });
      console.log("if");
    }
  }

  logout = () => {
    Axios.get("/api/auth/logout").then(res => {
      console.log("logout", res);
      if (res.status === 200) {
        this.props.logoutAction();
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    console.log("state", this.state);
    console.log("props", this.props);
    const home = this.props.user.loggedIn ? "/dashboard" : "/";
    return (
      <div>
        {this.state.redirect ? <Redirect to="/" /> : null}
        {this.props.user.loggedIn ? (
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#e74c3c" }}
          >
            <a
              className="navbar-brand text-white"
              style={{ textShadow: "5px", fontStyle: "italic" }}
              href={home}
            >
              Share
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  My thoughts
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li
                className="text-white h4 my-1 mx-3"
                style={{ textTransform: "capitalize" }}
              >
                {this.props.user.name}
              </li>
              <li>
                <button className="btn btn-outline-light" onClick={this.logout}>
                  <span> Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#e74c3c" }}
          >
            <ul className="navbar-nav mr-auto">
              <li>
                <a
                  className="navbar-brand text-white"
                  style={{ textShadow: "5px", fontStyle: "italic" }}
                  href={home}
                >
                  Share
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li>
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
              </li>
            </ul>
          </nav>
        )}
      </div>
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
