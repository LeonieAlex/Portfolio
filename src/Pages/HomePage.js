import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className="HomePage">
      <div className="hero">
        <h1 className="hero-text">
          Hi, I am 
          <span> Leonie Alexandra.</span>
        </h1>
        <p className="bio">
          Bio
        </p>
        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon = {faGithub} className="icon gh"/>
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon = {faInstagram} className="icon ig"/>
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon = {faLinkedin} className="icon li" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
