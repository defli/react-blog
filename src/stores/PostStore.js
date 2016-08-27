var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PostConstants = require('../constants/PostConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _posts = [
  {
    title: 'Başlık parası',
    text: 'Bodyguard hahahga'
  },

  {
    title: 'Ahmet Telli',
    text: 'Sülfür inceldi ve en yorgun yerinden kırıldı ayna...' +
           'Ayna pusluydu bunca zaman nice sır taşımaktaan...'
  }
];

/**
 * Create a POST item.
 * @param {string} text The content of the POST
 */
function create(obj) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  var elm = {
    id: id,
    title: obj.title,
    text: obj.text
  };

  _posts.unshift(elm);
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete _posts[id];
}

var PostStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _posts;
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
      case PostConstants.POST_CREATE:
        var obj = action.obj;
        if (obj !== '') {
          create(obj);
          PostStore.emitChange();
        }
        break;

    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = PostStore;
