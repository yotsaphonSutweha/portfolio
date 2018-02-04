import React from 'react';

const NavBar = props => {
    return (
      <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">
              <i className="large material-icons">insert_face</i>
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="badges.html">Portfolio</a></li>
              <li><a href="collapsible.html">Work I do</a></li>
              <li><a href="collapsible.html">Contact</a></li>
            </ul>
          </div>
      </nav>
      
    );
};

export default NavBar;

