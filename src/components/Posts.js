import React from 'react';
import Post from './Post';
import PostStore from '../stores/PostStore';

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
  getInitialState() {
    var _posts = PostStore.getAll();
    return {
      _posts: _posts
    };
  },

  _onChange() {
    this.setState({
      _posts: PostStore.getAll()
    });
  },

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        {getPosts(this.state._posts)}
      </div>
    );
  }
});

module.exports = Posts;
