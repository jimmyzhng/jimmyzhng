import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logoJC.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCode, FaMedium } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="jimmyzhng" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FaUser color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FaCode color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
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
    </div>
  );
}