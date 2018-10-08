import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.js'
import About from './About.js'
import Location from './Location.js'
import Price from './Price.js'

// we are using location prop to manage the render here until we setup router
// note localhost/{link} no longer accurate

function loadScript(url) { // load google map script so we can use it in locations child
  let script = window.document.createElement('script'); // generate our script tag
  let index = window.document.getElementsByTagName('script')[0]; // target the first script tag
  script.src = url; // set the url
  script.async = true;// give our script tag the async attr
  script.defer = true; // give our script tag the defer attr
  index.parentNode.insertBefore(script, index);
  // insert our script in front of all the scripts
}

class Main extends React.Component {

  componentDidMount() {
    this.loadMap(); // load map
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDyiFC-chvpMddIZBmKhH1t2Bvf--OYkes&callback=initMap");
    window.initMap = this.initMap; // set the global variable initMap to our initMap method (for callback access)
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.1113, lng: -76.4950},
      zoom: 16
    });
    this.setState({ map: map })

    let infowindow = new window.google.maps.InfoWindow({});

    let contentString = `
    <div class='info-window'>
    <h5>Hollywood Nails</h5>
    <p>12300 Jefferson Ave,</p>
    <p> Newport News, VA 23602</p>
    <a href='https://maps.google.com/?daddr=12300%20Jefferson%20Avenue%20Newport%20News%2C%20VA%2023608'> Get directions here! </a>
    `

    let marker = new window.google.maps.Marker({
      position: {lat: 37.1113, lng: -76.4950},
      map: map,
      title: 'Hollywood Nails',
      contentString: contentString,
    })
    marker.addListener('click', function() {
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    });

    this.setState({
      infoWindow: infowindow,
    })
  }

  render() {
    return(
      <Switch>
      <Route exact path='/' render={(props) => (
      <Home {...props} />)} />
      <Route  path='/about' render={(props) => (
      <About {...props} />)} />
      <Route  path='/location' render={(props) => (
      <Location {...props} initMap={this.loadMap}/>)} />
      <Route  path='/price' render={(props) => (
      <Price {...props} />)} />
    </Switch>
    )
  }
}

export default Main;