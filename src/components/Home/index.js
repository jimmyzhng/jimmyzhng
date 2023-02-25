import LogoJ from '../../assets/images/logoJC.png';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Home() {
  return (
    <div className="container home-page">

      <div className="text-zone">
        <h1>Hi, <br />I'm
          <img src={LogoJ} alt="developer" />
          immy,
          <br />
          web developer
        </h1>
        <h2>Full-stack Web Developer | JavaScript Developer  </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        <Link to="https://resume.creddle.io/resume/b0vfq90c1j7" target="_blank" className='flat-button'>RESUME</Link>

      </div>
    </div>
  );
}