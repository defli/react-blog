import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter }  from 'events';
import LoginConstants from '../constants/LoginConstants';

const CHANGE_EVENT = 'change';
const LOGGED_IN_EVENT = 'loggedin';

var VALID = false;
var _model = {
  email: '',
  password: ''
};

var LoginStore = Object.assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getModel() {
    return _model;
  },

  emitChange(evt) {
    this.emit(evt);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  addLoggedInListener(callback) {
    this.on(LOGGED_IN_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeLoggedInListener(callback) {
    this.removeListener(LOGGED_IN_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var action = payload.action;

    switch(action.actionType) {
      case LoginConstants.EMAIL_VALID:
        var value = action.value;
        _model.email = value;
        LoginStore.emitChange(CHANGE_EVENT);
        break;

      case LoginConstants.EMAIL_INVALID:
        _model.email = '';
        LoginStore.emitChange(CHANGE_EVENT);
        break;

      case LoginConstants.PASSWORD_VALID:
        var value = action.value;
        _model.password = value;
        LoginStore.emitChange(CHANGE_EVENT);
        break;

      case LoginConstants.PASSWORD_INVALID:
        _model.password = '';
        LoginStore.emitChange(CHANGE_EVENT);
        break;

        case LoginConstants.LOGGED_IN:
          _model.uid = action.uid;
          LoginStore.emitChange(LOGGED_IN_EVENT);
          break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

export default LoginStore;
