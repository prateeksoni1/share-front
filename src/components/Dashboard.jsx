import React, { Component } from "react";
import CreateButton from "./CreateButton";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    console.log("mount");
    if (this.props.user) {
      console.log("if");
      this.setState({ loggedIn: true });
    }
  }

  render() {
    console.log("render", this.state);
    if (!this.state.loggedIn) {
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
