
import React, {Component} from 'react';
import LoginActions from '../../actions/LoginActions';

class TextInput extends Component {
    constructor(props) {
      super(props);

      this.errorMessages = {
        required: 'This area is required.'
      };

      this.state = {
        isValid: true,
        message: this.errorMessages.required
      };
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

      return {
        isValid: true,
        message: ''
      };
    }

    _onChange(event) {
      let val = event.target.value;
      var validObj = this.tryValidation(val);

      if (validObj.isValid) {
        LoginActions.password_valid(val);
      } else {
        LoginActions.password_invalid(val);
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
          <input type="password" className="form-control" onChange={ this._onChange.bind(this) } />
          { errorMessage }
        </div>
      );
    }
}

export default TextInput;
