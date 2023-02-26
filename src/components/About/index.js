import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaNode } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { Loader } from 'react-loaders';


export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);
  }, []);


  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={`About me`.split('')}
              index={15} />
          </h1>

          <p> I am a recent graduate of Lighthouse Labs, looking for employment opportunities
          </p>

          <p> I specialize in JavaScript and Ruby, but am always learning new frameworks.</p>

          <p> I like men</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FaReact color="#5ed4f4" />
            </div>

            <div className='face2'>
              <FaHtml5 color="#F06529" />
            </div>

            <div className='face3'>
              <FaCss3 color="#28a4d9" />
            </div>

            <div className='face4'>
              <FaJsSquare color="#EFD81D" />
            </div>

            <div className='face5'>
              <FaNode color="#3C873A" />
            </div>

            <div className='face6'>
              <DiRuby color="#9b111e" />
            </div>

          </div>
        </div>

      </div>

      <Loader type="pacman" />
    </>

  );

}