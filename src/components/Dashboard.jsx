import React, { Component } from "react";
import CreateButton from "./CreateButton";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    console.log("render", this.state);
    if (!this.props.user.loggedIn) {
      console.log("/");
      return <Redirect to="/" />;
    }
    console.log("/d");
    return (
      <div>
        <CreateButton />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(Dashboard);
