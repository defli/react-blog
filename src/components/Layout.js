import React from 'react';
import Header from './Header';
import Posts from './Home/Posts';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
};

export default Layout;
