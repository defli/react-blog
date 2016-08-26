var React = require('react');

var TitleForm = React.createClass({
  getInitialState: function() {
    return {
      isValid: true
    }
  },

  _changed: function(event) {
    var val = event.target.value;
    var valid;

    if (val == '') {
      valid = false;
    } else {
      valid = true;
    }

    this.setState({
      isValid: valid
    });

    this.props.changeState(valid);
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this._changed} placeholder="Title Form"/>
        <div style={ {display: this.state.isValid ? 'none' : 'block' } } className="callout alert">
          Title field should not be empty...
        </div>
      </div>
    );
  }
});

module.exports = TitleForm;
