import React, { Component } from 'react';

import './styles/App.css';
import './styles/responsive.css';

import Nav from './views/Nav';
import Main from './views/Main';
import Footer from './views/Footer';

class App extends Component {

  state = {
    location: "home" // stores the location of the app so the main can render properly
  }

  changeLocation = (location) => { // handles link clicks
    this.setState({
      location
    })
  }

  render() {
    return (
      <div className="home">
        <Nav changeLocation={this.changeLocation}/>
        <Main 
          location={this.state.location}
          changeLocation={this.changeLocation}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
