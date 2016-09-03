import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter }  from 'events';
import LoginConstants from '../constants/LoginConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

var VALID = false;
var _model = {
  email: '',
  password: ''
};

var LoginStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getModel: function() {
    return _model;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case LoginConstants.EMAIL_VALID:
        var value = action.value;
        _model.email = value;
        LoginStore.emitChange();
        break;

      case LoginConstants.EMAIL_INVALID:
        _model.email = '';
        LoginStore.emitChange();
        break;

      case LoginConstants.PASSWORD_VALID:
        var value = action.value;
        _model.password = value;
        LoginStore.emitChange();
        break;

      case LoginConstants.PASSWORD_INVALID:
        _model.password = '';
        LoginStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

export default LoginStore;
