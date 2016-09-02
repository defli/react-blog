
import React, {Component} from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

class Login extends Component {

  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';
  }

  emailChanged(event) {
    let val = event.target.value;
    this.email = val;
  }

  passwordChanged(event) {
    let val = event.target.value;
    this.password = val;
  }

  submitHandler() {
    console.log(this.email, this.password);
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-offset-4 col-sm-4">
          <h4>Login Form</h4>
          <form onSubmit={this.submitHandler.bind(this)}>
            <div className="form-group">
              <label>Email address
              <TextInput changeHandler={this.emailChanged.bind(this)}/>
              </label>
            </div>
            <div className="form-group">
              <label>Password
              <PasswordInput changeHandler={this.passwordChanged.bind(this)} />
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Check me out
              </label>
            </div>
            <input type="submit" className="btn btn-default" value="Submit"></input>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
