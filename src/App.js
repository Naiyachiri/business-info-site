import React, { Component } from 'react';

import './styles/App.css';
import './styles/responsive.css';

import Nav from './views/Nav';
import Main from './views/Main';
import Footer from './views/Footer';

class App extends Component {


  render() {
    return (
      <div className="home">
        <Nav changeLocation={this.changeLocation}/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
