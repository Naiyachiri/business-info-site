import React from 'react';
import { Link } from 'react-router-dom';
import BusinessLogo from './BusinessLogo';

class Nav extends React.Component {
  
  render() {

    return (
      <nav className="top-nav">
        <BusinessLogo />
          <div class="flex">
            <Link to={{ pathname: '/'}}><p className="nav-item" value="home"> Home </p></Link>
            <Link to={{ pathname: '/about'}}><p className="nav-item" value="about"> About </p></Link>
            <Link to={{ pathname: '/location'}}><p className="nav-item" value="location"> Location </p></Link>
            <Link to={{ pathname: '/price'}}><p className="nav-item" value="price"> Price </p></Link>
          </div>
      </nav>
    )
  }
}

export default Nav;