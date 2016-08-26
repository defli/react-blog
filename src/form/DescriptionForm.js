var React = require('react');

var DescriptionForm = React.createClass({
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
        <textarea onChange={this._changed} placeholder="Description Area"></textarea>
        <div style={ {display: this.state.isValid ? 'none' : 'block' } } className="callout alert">
          Description field should not be empty...
        </div>
      </div>
    );
  }
});

module.exports = DescriptionForm;
