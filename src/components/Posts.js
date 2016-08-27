var React = require('react');
var Post = require('./post');
var PostStore = require('../stores/PostStore');

function getPosts(_posts) {

  var allPosts = _posts.map(function(item) {
    return (
      <Post key= {Math.random()} title={item.title} text={item.text}/>
    );
  });

  return allPosts;
}


var styles = {
  marginTop: '10px'
};

var Posts = React.createClass({
  getInitialState: function() {
    var _posts = PostStore.getAll();
    return {
      _posts: _posts
    };
  },

  _onChange: function() {
    this.setState({
      _posts: PostStore.getAll()
    })
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {getPosts(this.state._posts)}
      </div>
    );
  }
});

module.exports = Posts;
