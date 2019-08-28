import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="comtainer">
        <div className="row">
          <div className="col-12">
          <img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
          <img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
          <div className="col-8"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col-7"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
          <div className="col-5"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col-3"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
          <div className="col-3"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
          <div className="col-3"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
          <div className="col-3"><img src={'./images/wolf.jpg'} className="img-fluid" />
          </div>
        </div>
      </div>
    )
  }
}

export default About;