import React from 'react';

export default class About extends React.Component {

  handleLinkClick = (event) => {
    event.preventDefault();
    let linkVal = event.target.getAttribute('value'); // gets the link value so that location changes
    this.props.changeLocation(linkVal); // change location to the clicked link
  }

  render() {
    
    return(
      <div className="about">
        <h2 className="heading"> THE MOTTO: <span>Professional Nails at a Hollywood Quality</span></h2>

        <p>Established in 1992, we have been in business for 26 years. We are a mom and pop business dedicated to allowing you to treat yourselves. A healthy self-esteem can be made with a healthy body!</p>

        <h3 className="hours-title">Our Hours of Operation: </h3>
        <p>Monday: 10-9</p>
        <p>Tuesday: 10-9</p>
        <p>Wednesday: 10-9</p>
        <p>Thursday: 10-9</p>
        <p>Friday: 10-9</p>
        <p>Saturday: 10-9</p>
        <p>Sunday: 12-6:30</p>

        <p>Our services include Nails, Skin and Lashes. For additional details go to our <a href="/prices" value="price" onClick={this.handleLinkClick} className="inline-link">Prices</a> Page</p>
      

      </div>
    )
  }
}