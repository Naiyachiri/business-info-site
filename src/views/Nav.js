import React from 'react';
import { Link } from 'react-router-dom';
import BusinessLogo from './BusinessLogo';

class Nav extends React.Component {
  
  render() {

    return (
      <nav className="top-nav">
        <BusinessLogo />
          <div class="flex nav-list">
            <Link to={{ pathname: '/'}}><p className="nav-item"> Home </p></Link>
            <Link to={{ pathname: '/about'}}><p className="nav-item"> About </p></Link>
            <Link to={{ pathname: '/location'}}><p className="nav-item"> Location </p></Link>
            <Link to={{ pathname: '/price'}}><p className="nav-item"> Price </p></Link>
          </div>
      </nav>
    )
  }
}

export default Nav;