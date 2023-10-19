import React from "react";
import { Link,NavLink } from "react-router-dom";
import LogoS from  "./images/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faHome, faToolbox, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
      <img className="logo" src={LogoS} alt="" />
      
      <nav>
        <NavLink exact='true' activeclassname="active" className='home-link' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        
        <NavLink exact='true' activeclassname="active" className='services-link' to='/services'>
            <FontAwesomeIcon icon={faToolbox} color='#4d4d4e'/>
        </NavLink>

        <NavLink exact='true' activeclassname="active" className='about-link' to='/about'>
            <FontAwesomeIcon icon={faCircleInfo} color='#4d4d4e'/>
        </NavLink>

        <NavLink exact='true' activeclassname="active" className="contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
    </Link>
    </div>
  );
};

export default Navbar;
