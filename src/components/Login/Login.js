
import React, {Component} from 'react';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import SuccessLoggedIn from './Alerts/SuccessLoggedIn';
import ErrorLoggedIn from './Alerts/ErrorLoggedIn';

import LoginStore from '../../stores/LoginStore';
import LoginActions from '../../actions/LoginActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';

    this.state = {
      isValid: false,
      isLoggedIn: false,
      isError: false
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
  }

  submitHandler(event) {
    event.preventDefault();
    let model = LoginStore.getModel();
    let email = model.email;
    let password = model.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      this.setState({
        isLoggedIn: true
      });

      LoginActions.logged_in();
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;


      if (!errorCode) {
        LoginActions.logged_in();
      }

      this.setState({
        isLoggedIn: false,
        isError: true
      });
      // ...
    });
  }

  componentDidMount() {
    LoginStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    var ViewArea;
    var AlertArea;
    if (!this.state.isLoggedIn && this.state.isError) {
      AlertArea = <ErrorLoggedIn />;
    }

    if (!this.state.isLoggedIn) {
      ViewArea = <LoginForm submitHandler={this.submitHandler.bind(this)} isValid={this.state.isValid}/>;
    } else {
      ViewArea = <SuccessLoggedIn />;
    }
    return (
      <div>
        { AlertArea }
        { ViewArea }
      </div>
    );
  }
}

export default Login;
