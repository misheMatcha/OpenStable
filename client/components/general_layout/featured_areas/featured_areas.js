import React, { Component } from "react";
//import resetCSS from "../reset.css";
import featuredAreasCSS from "./featured_areas.css";

class FeaturedAreas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-featured-full-container">
        <div className="splash-featured-inner-container">
          <div className="splash-featured-top-heading">
            <h1>Featured Areas</h1>
          </div>
          <div className="splash-featured-divider"></div>
          <div className="featured-cities-container">
            <ul className="featured-random-ul">
              <div className="featured-li-ele featured-li-ele-first">
                <li id="featured-first-img">
                  <img src="/static/images/newyork.jpeg"></img>
                  <div className="overlay">
                    <h3>Marin Headlands</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li>
                  <img src="/static/images/chicago.jpeg"></img>
                  <div className="overlay">
                    <h3>Golden Gate Park</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/losangeles.jpeg"></img>
                  <div className="overlay">
                    <h3>Richmond / San Pablo</h3>
                    <p>stables</p>
                  </div>
                </li>
              </div>
              <div className="featured-li-ele featured-li-ele-second">
                <li id="featured-first-img">
                  <img src="/static/images/sanfrancisco.jpeg"></img>
                  <div className="overlay">
                    <h3>Oakland Hills / Tilden</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li>
                  <img src="/static/images/miami.jpeg"></img>
                  <div className="overlay">
                    <h3>Alemeda / Hayward</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/lasvegas.jpeg"></img>
                  <div className="overlay">
                    <h3>South San Francisco</h3>
                    <p>stables</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="splash-featured-text-container">
            <div>
              <p>Marin Headlands</p>
              <p>Mill Valley / San Rafael</p>
            </div>
            <div>
              <p>Richmond / San Pablo</p>
              <p>Oakland Hills / Tilden</p>
            </div>
            <div>
              <p>Alemeda / Hayward</p>
              <p>South San Francisco</p>
            </div>
            <div>
              <p>Daly City / Merced</p>
              <p>Golden Gate Park</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedAreas;
