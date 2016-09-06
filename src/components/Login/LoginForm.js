import React, {Component} from 'react';

import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-4 col-sm-4">
            <h4>Login Form</h4>
            <form onSubmit={this.props.submitHandler}>
              <div className="form-group">
                <label>Email address
                <TextInput name="email" />
                </label>
              </div>
              <div className="form-group">
                <label>Password
                <PasswordInput />
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Check me out
                </label>
              </div>
              <input type="submit" disabled={!this.props.isValid} className="btn btn-default" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginForm;
