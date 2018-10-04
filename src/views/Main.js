import React from 'react';

import Home from './Home.js'
import About from './About.js'
import Location from './Location.js'
import Price from './Price.js'

// we are using location prop to manage the render here until we setup router
// note localhost/{link} no longer accurate
class Main extends React.Component {

  render() {

    if (this.props.location === 'home') {
      return (
        <main>
          <Home />
        </main>
      )
    } else if (this.props.location === 'about') {
      return (
        <main>
          <About 
          changeLocation={this.props.changeLocation}/>
        </main>
      )
    } else if (this.props.location === 'location') {
      return (
        <main>
          <Location />
        </main>
      )
    } else {
      return (
        <main>
          <Price />
        </main>
      )
    }
  }
}

export default Main;