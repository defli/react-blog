/**
 * PostActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PostConstants = require('../constants/PostConstants');

var PostActions = {

  /**
   * @param  {string} text
   */
  create: function(obj) {
    AppDispatcher.handleViewAction({
      actionType: PostConstants.POST_CREATE,
      obj: obj
    });
  }

};

module.exports = PostActions;
