import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../../AnimatedLetters';

export default function PortfolioInfoBox({ title, description, stack, url, demo }) {
  const [letterClass, setLetterClass] = useState('text-animate');
  // console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="info-box">
      <div className="project-title">
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={title.split('')}
            index={15}
          />
        </h2>
      </div>

      <div className="project-description"> {description}</div>
      <div className="project-stack"> Built with {stack}</div>

      <div>
        <Link to={url[0]} target="_blank" className='flat-button project-link'>View Code</Link>
      </div>
    </div>);
}
