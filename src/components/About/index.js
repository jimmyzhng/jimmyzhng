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

          <p> Hey, I'm Jimmy, a full-stack web developer based in Richmond, BC. Thanks for checking out my website, and I hope you've liked it so far :^&#41;</p>

          <p>
          I am currently open to new employment opportunities. I love working with JavaScript, and I am always looking to master new languages and technologies by building different projects. 
          If you are curious, the full list of my skills and tech stack can be found on my <a className="page-link" href="https://resume.creddle.io/resume/b0vfq90c1j7" >resume</a>, or you can check out my Github to see what I'm currently working on.

          </p>

          <p> In my free time nowadays, I am usually on my bike or going out for a run. I am also working on my swimming in order to prepare for Ironman 70.3 Victoria in 2025. 
            With whatever time is left, I enjoy spending my time on the trails: exploring, hiking, and trail running.</p>

          <p> If you are reading this, I would love to connect. Feel free to reach out if you want to chat, or if you have any questions about my experiences. I don't really ever know if anyone actually reads these things, so I would love to know if you checked my page out. Anyways, thanks for stopping by!  </p>



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