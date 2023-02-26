import './index.scss';
import Loader from "react-loaders";
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const renderPortfolio = () => {
    return;
  };


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split('')}
            index={15}
          />
        </h1>

        <div>{renderPortfolio}</div>


      </div>
      <Loader type='pacman' />


    </>
  );
}