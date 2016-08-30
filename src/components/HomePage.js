import React from 'react';
import Header from './Header';
import Posts from './Posts';
import Create from './form/Create';

class HomePage extends React.Component {
  render() {
    return <div>
        <Header />
        { this.props.children }
        <Posts />
      </div>;
  }
};

export default HomePage;
