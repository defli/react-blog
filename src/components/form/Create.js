var React = require('react');
var TitleForm = require('./TitleForm');
var DescriptionForm = require('./DescriptionForm');
var PostActions = require('../../actions/PostActions');

var Create = React.createClass({
  getInitialState: function() {
    return {
      isValid: false
    }
  },

  changeState: function(valid) {
    this.setState({
      isValid: valid
    });
  },

  _submit: function(event) {
    var _this = this;
    event.preventDefault(); // Let's stop this event.
    PostActions.create({
        title: _this.titleValue,
        text: _this.descValue
    });
  },

  _handleDescValue: function(val) {
    this.descValue = val;
  },

  _handleTitleValue: function(val) {
    this.titleValue = val;
  },

  render: function() {
    return (
        <div className="row">
          <div className="medium-12">
            <form onSubmit={this._submit} action="POST" className="callout success">
              <TitleForm changeState={this.changeState} handleTitleValue={this._handleTitleValue}  />
              <DescriptionForm changeState={this.changeState} handleDescValue={this._handleDescValue} />
              <input type="submit" disabled={!this.state.isValid} className="button pull-right" value="Create" />
            </form>
          </div>
        </div>
    );
  }
});

module.exports = Create;
