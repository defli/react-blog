import React from 'react';

class DescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  _changed(event) {
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
    this.props.handleDescValue(val);
  }

  render() {
    return (
      <div>
        <textarea onChange={this._changed.bind(this)} placeholder="Description Area"></textarea>
        <div style={ {display: this.state.isValid ? 'none' : 'block' } } className="callout alert">
          Description field should not be empty...
        </div>
      </div>
    );
  }
};

export default DescriptionForm;
