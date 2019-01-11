import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Signup extends Component {
  inputForm({ input, label }) {
    // console.log(formProps);
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
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
              component={this.inputForm}
              label="Password"
            />
            <Field
              name="passwordConfirm"
              component={this.inputForm}
              label="Confirm Password"
            />
            <button className="btn btn-primary red-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "SignUp"
})(Signup);
