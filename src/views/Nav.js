import React from 'react';

import BusinessLogo from './BusinessLogo';

class Nav extends React.Component {
  

  handleLinkClick = (event) => {
    event.preventDefault();
    let linkVal = event.target.getAttribute('value'); // gets the link value so that location changes
    this.props.changeLocation(linkVal); // change location to the clicked link
  }

  render() {

    return (
      <nav className="top-nav">
        <BusinessLogo />
          <div class="flex">
            <a href="/" className="nav-item" value="home" onClick={this.handleLinkClick}> Home </a>
            <a href="/about" className="nav-item" value="about" onClick={this.handleLinkClick}> About </a>
            <a href="/location" className="nav-item" value="location" onClick={this.handleLinkClick}> Location </a>
            <a href="/price" className="nav-item" value="price" onClick={this.handleLinkClick}> Price </a>
          </div>
      </nav>
    )
  }
}

export default Nav;