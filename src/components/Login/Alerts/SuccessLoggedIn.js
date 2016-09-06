import React, {Component} from 'react';

class SuccessLoggedIn extends Component {
  render() {
    return (
      <div className="container">
        <div className = "row">
          <div className=" col-sm-offset-4 col-sm-4 alert alert-success" role="alert">
            <strong>Success!</strong>
            <span> You successfully logged in.</span>
          </div>
        </div>
      </div>
    );
  }
};

export default SuccessLoggedIn;
