import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import { connect } from "react-redux";
import { loginAction } from "../actions";

class Login extends Component {
  state = {
    error: null,
    redirect: false,
    loading: false
  };

  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      );
    }
  }

  textInput = ({ input, label, meta }) => {
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

  showError = error => {
    this.setState({
      error
    });
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.setState({ loading: true });
    axios.post("/api/auth/login", formValues).then(res => {
      console.log(res);
      this.setState({ loading: false });
      this.props.loginAction(res.data.user);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="my-4 mx-auto">
          <h1 className="m-4">Login to Share</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="email" component={this.textInput} label="Email" />
            <Field
              name="password"
              component={this.inputPassword}
              label="Password"
            />
            <button className="btn btn-primary red-btn">Submit</button>
            <div className="invalid-feedback" style={{ display: "block" }}>
              <h4>{this.state.error}</h4>
            </div>
          </form>
          {this.state.redirect ? <Redirect to="/dashboard" /> : null}
          {this.state.loading ? <ReactLoading color="#e74c3c" /> : null}
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  console.log("form", formValues);

  if (!formValues.email || !formValues.email.includes("@")) {
    errors.email = "You must enter a valid email address";
  }

  return errors;
};

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  {
    loginAction
  }
)(
  reduxForm({
    form: "Login",
    validate
  })(Login)
);
