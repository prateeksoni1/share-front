import React, { Component } from "react";
import CreateButton from "./CreateButton";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Post from "./Post";
import Axios from "axios";

class Dashboard extends Component {
  state = { posts: [] };

  renderPosts = () => {
    this.state.posts.map(post => <Post {...post} />);
  };

  componentDidMount() {
    Axios.get("/api/posts").then(res => {
      console.log(res);
      this.setState({ posts: res.data.posts });
    });
  }

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
