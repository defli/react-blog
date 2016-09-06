import React, {Component} from 'react';

class ErrorLoggedIn extends Component {
  render() {
    return (
      <div className="alert alert-danger" style={{textAlign: 'center'}} role="alert">
        <strong>Error!</strong>
        <span> Your credentials isn't correct</span>
      </div>
    );
  }
};

export default ErrorLoggedIn;
