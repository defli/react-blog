
import React, {Component} from 'react';

class TextInput extends Component {
    render() {
      return (
        <input type="text" className="form-control" onChange={this.props.changeHandler}/>
      );
    }
}

export default TextInput;
