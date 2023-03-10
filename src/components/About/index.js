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
          <h1 className="about-me-header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={`About me`.split('')}
              index={15} />
          </h1>

          <p> Hey, I'm Jimmy, a full-stack web developer based in Vancouver, BC. Thanks for checking out my website, and I hope you like it :^&#41;</p>

          <p>
            I am a recent graduate of Lighthouse Labs, and am eagerly looking for employment opportunities as a developer.
            I currently specialize in JavaScript and Ruby, but I am always looking to master new languages and technologies by working on new projects.
            Full list of my skills can be found on my <a className="page-link" href="https://resume.creddle.io/resume/b0vfq90c1j7" >resume</a>,
            or you can check out my Github to see what I'm currently working on!
          </p>

          <p> I have always been deeply passionate about tech, and through my academic experiences, I found that I love it
            when I can use my skills and abilities to solve complex problems.
            After earning my Economics degree at UBC in 2022, I knew I had to make the transition into the tech world,
            and that is where I found Lighthouse Labs. Now, here I am!  </p>

          <p> When I am not busy working on websites like this one, you can probably find me skateboarding, or playing Valorant with some friends. </p>



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