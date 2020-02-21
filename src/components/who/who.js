import React from 'react';
import Headshot from '../../images/headshot.jpg';
import './who.css';

class Who extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {url: Headshot};
  }
  render()
  {
    return (
      <div className="who-spa">
        <div className="row">
          <div className="col-sm-12">
            <h1>Who I am </h1>
          </div>
        </div>
        <div className="title col-sm-12 col-md-12 col-xl-1">
          <img classname="headshot" src={this.state.url} alt="Barry Russell"/>
        </div>
      </div>
    )
  }
}

export default Who;