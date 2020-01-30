import React from 'react';
import './navbar.css';

class Navbar extends React.Component
{
  render()
  {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Barry Russell</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Skills</a>
            <a className="nav-item nav-link" href="/">Projects</a>
            <a className="nav-item nav-link" href="/">History</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;