import React, { Component } from "react";
import Axios from "axios";
import Post from "./Post";

import { connect } from "react-redux";

class MyPosts extends Component {
  state = { posts: [] };

  renderPosts = () => {
    this.state.posts.map(post => <Post {...post} />);
  };

  componentDidMount() {
    const url = "/api/posts?id=" + this.props.userId;
    console.log(url);
    Axios.get(url).then(res => {
      console.log(res);
      this.setState({ posts: res.data.posts });
    });
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return { userId: state.user._id };
};

export default connect(mapStateToProps)(MyPosts);
