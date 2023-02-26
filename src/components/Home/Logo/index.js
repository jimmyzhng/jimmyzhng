import './index.scss';
import LogoJ from '../../../assets/images/JLogo3.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
    }
  }
};

export default function Logo() {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {

    gsap.fromTo(
      solidLogoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      delay: 4,
      duration: 1.5
    }
    );
  }, []);

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt='J' />
      <svg
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        width="409.836" zoomAndPan="magnify" viewBox="0 0 307.5 374.999991"
        height="500" preserveAspectRatio="xMidYMid meet" version="1.0">

        <g
          clip-path="url(#3a0f778c88)">
          <motion.path className="svg-container" stroke-linecap="butt" transform="matrix(0.75, 0, 0, 0.75, -3.306095, -183.931376)" fill="none" stroke-linejoin="miter" d="M 275.699814 555.184584 C 275.699814 603.976254 275.038356 667.648134 195.8196 667.648134 C 112.465427 667.648134 111.803969 605.96063 111.803969 555.846043 L 10.090419 555.846043 C 10.090419 626.960631 12.236253 743.559598 197.142516 743.559598 C 348.142528 743.559598 377.251905 651.4398 377.251905 583.632503 L 377.251905 246.241853 L 275.699814 246.241853 Z M 275.699814 555.184584 "
            stroke="#000000" stroke-width="4.657366" stroke-opacity="1" stroke-miterlimit="4"
            variants={pathVariants}
            initial="hidden"
            animate="visible" />
          <motion.path className="svg-container" stroke-linecap="butt" transform="matrix(0.75, 0, 0, 0.75, 17.084106, -183.931376)" fill="none" stroke-linejoin="miter" d="M 275.70038 555.184584 C 275.70038 603.976254 275.038921 667.648134 195.820165 667.648134 C 112.465993 667.648134 111.804534 605.96063 111.804534 555.846043 L 10.090985 555.846043 C 10.090985 626.960631 12.236819 743.559598 197.143082 743.559598 C 348.143093 743.559598 377.25247 651.4398 377.25247 583.632503 L 377.25247 246.241853 L 275.70038 246.241853 Z M 275.70038 555.184584 "
            stroke="#000000" stroke-width="4.657366" stroke-opacity="1" stroke-miterlimit="4"
            variants={pathVariants}
            initial="hidden"
            animate="visible" />
        </g>
      </svg>

    </div>
  );
};