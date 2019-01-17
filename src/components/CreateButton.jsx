import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class CreateButton extends Component {
  state = { redirect: false };

  onCreateClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="m-4">
        <div className="card create-card" onClick={this.onCreateClick}>
          <h6 className="card-header text-center">Create A Post</h6>

          <div className="card-body mx-auto">
            <FontAwesomeIcon
              icon={faPlusCircle}
              fixedWidth
              size="4x"
              className="my-2"
            />
          </div>
        </div>
        {this.state.redirect ? <Redirect to="/create-post" /> : null}
      </div>
    );
  }
}

export default CreateButton;
