
import React, {Component} from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import LoginStore from '../../stores/LoginStore';

class Login extends Component {

  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';

    this.state = {
      isValid: false
    };
  }
  _onChange() {
    var _this = this;
    let model = LoginStore.getModel();
    let isValid = false;
    if (model.email && model.password) {
      isValid = true;
    }

    _this.setState({
      isValid: isValid  
    });

    console.log(model);

  }

  componentDidMount() {
    LoginStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this._onChange);
  }


  submitHandler() {
      console.log('ok');
  }

  render() {

    var isDisabled = 'disabled';

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-4 col-sm-4">
            <h4>Login Form</h4>
            <form onSubmit={this.submitHandler.bind(this)}>
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
              <input type="submit" disabled={!this.state.isValid} className="btn btn-default" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
