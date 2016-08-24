var React = require('react');

var Post = React.createClass({
  render: function() {
    var title = this.props.title;
    var text = this.props.text;

    return (
      <div className="row">
        <h2 className="medium-12">{title}</h2>
        <div className="medium-12">{text}</div>
      </div>
    );
  }
});

module.exports = Post;
