var React = require('react');

var Create = React.createClass({
  render: function() {
    return (
        <div className="row">
          <div className="medium-12">
            <div className="callout success">
              <input type="text" placeholder="Title"/>
              <textarea placeholder="Description"></textarea>
              <button type="button" className="button pull-right">Create</button>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Create;
