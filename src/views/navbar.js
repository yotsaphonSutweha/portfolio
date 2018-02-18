import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = props => {
    return (
      
      <div className="navbar-fixed">
      <nav>
          <div className="nav-wrapper">
           
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><AnchorLink href="#about">About</AnchorLink></li>
              <li><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
              <li><AnchorLink href="#experience">Work I do</AnchorLink></li>
              <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
       
       
          
          </div>
      </nav>
    </div>
    );
};

export default NavBar;

