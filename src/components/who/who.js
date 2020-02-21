import React from 'react';
import './who.css';
import Headshot from '../../images/headshot.jpg';

class Who extends React.Component
{
  render()
  {
    return (
      <div className="who-spa row">
        <div className="title col-sm-12 col-md-12 col-xl-2">
          <h1>Who</h1>
          <img src={<Headshot/>}/>
        </div>
      </div>
    )
  }
}

export default Who;