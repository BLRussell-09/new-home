import React from 'react';
import './navbar.css';

class Navbar extends React.Component
{
  render()
  {
    return (
      <header className="nav_bar">
        <h4 className="name">Barry Russell</h4>
        <nav>
          <ul className="nav_links">
            <li><a className="about" href="#">Who I Am</a></li>
            <li><a className="about" href="#">What I'm Doing</a></li>
            <li><a className="about" href="#">What I Know</a></li>
          </ul>
        </nav>
        <a className="contact-btn" href="#" ><button>Contact</button></a>
      </header>
    );
  }
}

export default Navbar;