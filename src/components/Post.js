
import React from 'react';

class Post extends React.Component {
    render() {
      var title = this.props.title;
      var text = this.props.text;

      return (
        <div className="row">
          <h5 className="medium-12 subheader">{title}</h5>
          <div className="medium-12">{text}</div>
          <div className="medium-12">
          <div className="small button-group float-right">
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
