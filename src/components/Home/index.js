import LogoJ from '../../assets/images/logoJC.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = `immy,`.split('');
  const jobArray = `web developer.`.split('');
  // console.log(nameArray);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>

            <br />

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoJ} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={20} />
          </h1>
          <h2>Full-stack Web Developer | JavaScript Developer  </h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
          <Link to="https://resume.creddle.io/resume/b0vfq90c1j7" target="_blank" className='flat-button'>RESUME</Link>

        </div>
        <Logo />
      </div>
      <Loader type='pacman' />

    </>
  );
}