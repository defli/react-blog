var React = require('react');
var TitleForm = require('./TitleForm');
var DescriptionForm = require('./DescriptionForm');

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

  render: function() {
    return (
        <div className="row">
          <div className="medium-12">
            <div className="callout success">
              <TitleForm changeState={this.changeState}  />
              <DescriptionForm changeState={this.changeState} />
              <button type="button" disabled={!this.state.isValid} className="button pull-right">Create</button>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Create;
