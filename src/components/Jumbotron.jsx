import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Jumbotron extends React.Component {
  state = { loggedIn: false };
  componentWillMount() {
    if (this.props.user) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="jumbotron bg-light">
        <h1 className="display-1">
          Share. <br />
          Whatever you want.
        </h1>
        <p className="lead">Sharing made simple.</p>
        <Link to="/signup">
          <button className="btn btn-lg btn-primary red-btn">
            Get Started Now
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Jumbotron);
