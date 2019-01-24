import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class CreatePost extends Component {
  state = { loading: false, redirect: false };

  onSubmit = formValues => {
    console.log(formValues);
    this.setState({ loading: true });
    Axios.post("/api/posts", {
      ...formValues,
      userId: this.props.userId
    }).then(res => {
      console.log(res);
      this.setState({ loading: false, redirect: true });
    });
  };

  textInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
      </div>
    );
  };
  postInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <textarea className="form-control" rows="10" {...input} />
      </div>
    );
  };

  render() {
    console.log("efcws");
    return (
      <div className="my-4 mx-auto">
        <h1 className="m-4">Create A Post</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.textInput} label="Title" />
          <Field name="tags" component={this.textInput} label="Tags" />
          <Field
            name="post"
            component={this.postInput}
            label="Write your thought"
          />
          <button className="btn btn-primary red-btn">Submit</button>
        </form>
        {this.state.loading ? <ReactLoading color="#e74c3c" /> : null}
        {this.state.redirect ? <Redirect to="/dashboard" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.user._id };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "CreatePost" })(CreatePost)
);
