import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CreatePost extends Component {
  onSubmit = formValues => {
    console.log(formValues);
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
      </div>
    );
  }
}

export default reduxForm({ form: "CreatePost" })(CreatePost);
