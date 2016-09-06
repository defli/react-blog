
import React, {Component} from 'react';
import LoginActions from '../../actions/LoginActions';

class TextInput extends Component {
    constructor(props) {
      super(props);

      this.errorMessages = {
        required: 'This area is required.',
        email: 'The email isn\'t valid'
      };

      this.state = {
        isValid: true,
        message: this.errorMessages.required
      };
    }

    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    validateRequired(val) {
      if (!val) {
        return false;
      }

      return true;
    }

    tryValidation(val) {
      if (!this.validateRequired(val)) {
        return {
          isValid: false,
          message: this.errorMessages.required
        };
      }

      if (!this.validateEmail(val))  {
        return {
          isValid: false,
          message: this.errorMessages.email
        };
      }

      return {
        isValid: true,
        message: ''
      };
    }

    _onChange(event) {
      let val = event.target.value;
      var validObj = this.tryValidation(val);

      if (validObj.isValid) {
        LoginActions.email_valid(val);
      } else {
        LoginActions.email_invalid(val);
      }

      this.setState({
        isValid: validObj.isValid,
        message: validObj.message
      });
    }

    render() {
      if (!this.state.isValid) {
        var errorMessage = <div className="alert alert-danger">{ this.state.message }</div>;
      }

      return (
        <div>
          <input type="text" className="form-control" onChange={ this._onChange.bind(this) } />
          { errorMessage }
        </div>
      );
    }
}

export default TextInput;
