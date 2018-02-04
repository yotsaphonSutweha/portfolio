import React from 'react';

const NavBar = props => {
    return (
      
      <div className="navbar-fixed">
      <nav>
          <div className="nav-wrapper">
           
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="badges.html">Portfolio</a></li>
              <li><a href="collapsible.html">Work I do</a></li>
              <li><a href="collapsible.html">Contact</a></li>
            </ul>
       
       
          
          </div>
      </nav>
    </div>
    );
};

export default NavBar;

