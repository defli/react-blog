/**
 * LoginActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LoginConstants = require('../constants/LoginConstants');

const LoginActions = {

  /**
   * @param  {string} text
   */
  logged_in(uid) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.LOGGED_IN,
      uid: uid
    });
  },

  /**
   * @param  {string} text
   */
  email_valid(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.EMAIL_VALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  email_invalid(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.EMAIL_INVALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  password_valid(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.PASSWORD_VALID,
      value: value
    });
  },

  /**
   * @param  {string} text
   */
  password_invalid(value) {
    AppDispatcher.handleViewAction({
      actionType: LoginConstants.PASSWORD_INVALID,
      value: value
    });
  }

};

export default LoginActions;
