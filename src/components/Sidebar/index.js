import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logoJC.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCode, FaMedium, FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';

export default function Sidebar() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="jimmyzhng" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
          <FaHome color="#4d4d4e" />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
          <FaUser color="#4d4d4e" />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FaCode color="#4d4d4e" />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FaEnvelope color="#4d4d4e" />
        </NavLink>

        <FaWindowClose onClick={() => setShowNav(false)} className="close-icon" color="#ffe77a" size="35" />
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jimmyzhng/'>
            <FaLinkedin color="4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/jimmyzhng'>
            <FaGithub color="4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel='noreferrer' href='https://medium.com/@jimmyzhng'>
            <FaMedium color="4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel='noreferrer' href='https://twitter.com/jimmyzhangio'>
            <FaTwitter color="4d4d4e" />
          </a>
        </li>
      </ul>

      <FaBars onClick={() => setShowNav(true)} className="dropdown" color="#ffe77a" size="35" />
    </div>
  );
}