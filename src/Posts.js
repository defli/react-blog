var React = require('react');
var Post = require('./Post');

var _posts = [
  {
    title: 'Başlık parası',
    text: 'Bodyguard hahahga'
  },

  {
    title: 'Ahmet Telli',
    text: 'Sülfür inceldi ve en yorgun yerinden kırıldı ayna...' +
           'Ayna pusluydu bunca zaman nice sır taşımaktaan...'
  }
];

var allPosts = _posts.map(function(item) {
  return (
    <Post key= {Math.random()} title={item.title} text={item.text}/>
  );
});

var styles = {
  marginTop: '10px'
};

var Posts = React.createClass({
  render: function() {
    return (
      <div>
        {allPosts}
      </div>
    );
  }
});

module.exports = Posts;
