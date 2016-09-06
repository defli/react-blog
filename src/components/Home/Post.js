
import React from 'react';

class Post extends React.Component {
  render() {
    var title = this.props.title;
    var text = this.props.text;

    return (
      <div className="row">
        <h5 className="col-sm-12">{title}</h5>
        <div className="col-sm-12">{text}</div>
        <div className="col-sm-12">
        <div className="">
            <a className="secondary button">Edit</a>
            <a className="alert button">Delete</a>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Post;
