import React from 'react';
import Header from './Header';
import Create from './form/Create';
import Posts from './Posts';

class HomePage extends React.Component {
  render() {
    return <div>
        <Header />
        { this.props.children }
      </div>;
  }
};

export default HomePage;
