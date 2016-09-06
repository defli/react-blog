import React from 'react';
import LoginStore from '../stores/LoginStore';
import HeaderLoggedIn from './form/HeaderLoggedIn';
import HeaderLoggedOut from './form/HeaderLoggedOut';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      isLoggedIn: false
    };
  }

  _onLoggedIn() {
    this.setState({
       isLoggedIn: true
    });
  }

  componentDidMount() {
    LoginStore.addLoggedInListener(this._onLoggedIn.bind(this));
  }

  componentWillUnmount() {
    LoginStore.removeLoggedInListener(this._onLoggedIn.bind(this));
  }

  render() {
    var loggedInOrOut = <HeaderLoggedOut />;

    if (!this.state.isLoggedIn) {
      loggedInOrOut = <HeaderLoggedIn />;
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Quotes</a>
          </div>
          <div className="collapse navbar-collapse">
              { loggedInOrOut }
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
