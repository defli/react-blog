/**
 * LoginActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LoginConstants = require('../constants/LoginConstants');

const LoginActions = {

  /**
   * @param  {string} text
   */
  email_valid: function(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.EMAIL_VALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  email_invalid: function(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.EMAIL_INVALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  password_valid: function(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.PASSWORD_VALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  password_invalid: function(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.PASSWORD_UNVALID,
      value: value
    });
  }

};

export default LoginActions;
