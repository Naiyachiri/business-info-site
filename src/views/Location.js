import React from 'react';



export default class Location extends React.Component {

  componentDidMount() {
    if (window.google !== undefined) {
      this.props.initMap();
      
    } else { // note by setting a timeout the init map will be called again in 1 second if the map has not loaded yet
      setTimeout(this.props.initMap(), 1000)
    }
    
  }
  render() {
    
    return (
      <div className="locations-container"> 
      <div className="locations-details">
        <h3> We are located inside of Patrick Henry Mall at:</h3>
        <p>12300 Jefferson Ave,</p>
        <p>Newport News, VA 23602</p>
        <a href='https://maps.google.com/?daddr=12300%20Jefferson%20Avenue%20Newport%20News%2C%20VA%2023608' className='inline-link' target="_blank"> Get directions here! </a>
      </div>
        <div id="map"></div>
      </div>
      
    )
  }
}