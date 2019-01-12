import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

class Signup extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      );
    }
  }

  inputForm = ({ input, label, meta }) => {
    // console.log(formProps);
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  inputPassword = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" type="password" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
    axios.post("/auth", formValues).then(res => {});
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="my-4 mx-auto">
          <h1 className="m-4">Sign Up Now to share your thoughts</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="name" component={this.inputForm} label="Name" />
            <Field name="email" component={this.inputForm} label="Email" />
            <Field
              name="password"
              component={this.inputPassword}
              label="Password"
            />
            <Field
              name="passwordConfirm"
              component={this.inputPassword}
              label="Confirm Password"
            />
            <button className="btn btn-primary red-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  console.log("form", formValues);

  if (!formValues.name) {
    errors.name = "You must enter a Name";
  }

  if (!formValues.email || !formValues.email.includes("@")) {
    errors.email = "You must enter a valid email address";
  }

  if (!formValues.password || formValues.password.length < 4) {
    errors.password = "Password is too short";
  }

  if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match";
  }

  return errors;
};

export default reduxForm({
  form: "SignUp",
  validate
})(Signup);
