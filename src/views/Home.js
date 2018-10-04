import React from 'react';

const nailImage460617 = require('../images/camilla-carvalho-460617-unsplash1000x1500.jpg');
const nailImage565222 = require('../images/designecologist-565222-unsplash2000x1250.jpg');
const nailImage327652 = require('../images/felipe-p-lima-rizo-327652-unsplash2000x1333.jpg');
const nailImage407158 = require('../images/nicole-honeywill-407158-unsplash1000x1500.jpg');

export default class Home extends React.Component {

  render() {
    return(
      <div class="" id="photos">
        <img src={nailImage460617} alt="purple nails on hands bejeweled with golden accessories" />
        <p> Classy </p>
        <img src={nailImage565222} alt="red pointed nails with heart shaped paint and a cursive love written across the ring and middle fingers" />
        <p> Ideal </p>
        <img src={nailImage327652} alt="white pointed nails holding a vintage camera" />
        <p> Timeless </p>
        <img src={nailImage407158} alt="purple-beige rounded nails holding a sunflower infront of a sun flare" />
        <p> Spectacular </p>
      </div>
    )
  }
}