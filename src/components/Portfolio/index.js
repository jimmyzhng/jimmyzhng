import './index.scss';
import Loader from "react-loaders";
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';
import PortfolioInfoBox from './PortfolioInfoBox';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((project, index) => {
            return (
              <div className="project-container" key={index}>
                <video className="portfolio-video" alt="portfolio" width="800" height="800" autoPlay muted>
                  <source src={project.video} type="video/mp4" />
                </video>

                <PortfolioInfoBox
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  demo={project.demo}
                />
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