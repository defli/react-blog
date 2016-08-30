import React from 'react';

class TitleForm extends React.Component {
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
    this.props.handleTitleValue(val);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this._changed.bind(this)} placeholder="Title Form"/>
        <div style={ {display: this.state.isValid ? 'none' : 'block' } } className="callout alert">
          Title field should not be empty...
        </div>
      </div>
    );
  }
};

export default TitleForm;
