
import React, {Component} from 'react';

class TextInput extends Component {
  render() {
    return (
      <input type="password" className="form-control" onChange={this.props.changeHandler}/>
    );
  }
}

export default TextInput;
