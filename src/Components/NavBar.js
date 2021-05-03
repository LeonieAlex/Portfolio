import React from 'react'
import Moon from '../img/moon.png';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={Moon} alt=""/>
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="skills" spy={true} smooth={true}>Skill</Link>
          </li>
          <li className="nav-item">
            <Link activeClass="portfolio" to="portfolio" spy={true} smooth={true}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link>
          </li>
        </ul>

        <footer className="footer">
          <p>
            @2021 Leonie Alexandra
          </p>
        </footer>
      </nav>  
    </div>
  )
}

export default Navbar;
