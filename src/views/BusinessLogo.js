import React from 'react';

const businessImgRef = require('../images/nail.svg');

export default class BusinessLogo extends React.Component {

  render() {
    return(
      <div className="business-logo-container">
        <img id="business-img" src={businessImgRef} alt='Painted nails rotated 45 degrees Logo'></img>
        <p class='business-title'> HOLLYWOOD NAILS </p>
      </div>
    )
  }
}