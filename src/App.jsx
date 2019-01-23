import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import CreatePost from "./components/CreatePost";

class App extends Component {
  render() {
    return (
      <main className="container">
        <BrowserRouter>
          <div>
            <Navbar />

            <Route exact path="/" render={() => <Jumbotron />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/create-post" render={() => <CreatePost />} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
