import './index.scss';
import Loader from "react-loaders";
import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';
import PortfolioInfoBox from './PortfolioInfoBox';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');
  // console.log(portfolioData);

  const videoRef = useRef(undefined);

  useEffect(() => {
    videoRef.current.defaultMuted = true;

    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="portfolio-container">
        {
          portfolio.map((project, index) => {
            return (
              <div className={`project-container project-${index + 1}`} key={index}>
                <video ref={videoRef} className="portfolio-video" alt="portfolio" autoPlay controls muted playsInline loop>
                  <source src={project.video} type="video/mp4" />
                </video>

                <div className="portfolio-info">
                  <PortfolioInfoBox
                    className="portfolio-infobox"
                    title={project.title}
                    description={project.description}
                    stack={project.stack}
                    url={project.url}
                  />
                </div>
              </div>
            );

          })
        }
      </div>
    );
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

        <div>{renderPortfolio(portfolioData.portfolio)}</div>


      </div>
      <Loader type='pacman' />


    </>
  );
};