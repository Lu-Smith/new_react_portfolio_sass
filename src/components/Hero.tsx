import React from 'react';
import { Link } from 'react-router-dom';
import FuturedComponents from './FuturedComponents';
import { motion } from 'framer-motion';

interface ModeProps {
  mode: string,
};

const contactVariants = {
  initial: {
      x: 100,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 3,
      }
  },
}

const Hero = ({ mode }: ModeProps) => {
  return (
    <div className={`Hero ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className="futuredContainer">
        <div className="futuredProjects">
          <FuturedComponents mode={mode} />
        </div>
        <div className="recentProjects">
          <Link to="/projects">
            <div>
              <svg height="200px" 
              width="200px" version="1.1" 
              id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="-51.2 -51.2 614.40 614.40" 
              xmlSpace="preserve" 
              fill="#000000" 
              stroke="#000000" 
              stroke-width="0.00512" 
              transform="rotate(90)">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"/>
                <g id="SVGRepo_iconCarrier"> 
                <path style={{ fill: '#FFFFFF' }} d="M100.848,88.899v148.021c31.443-9.908,54.303-39.339,54.303-74.01S132.291,98.807,100.848,88.899z"/> 
                <path style={{ fill: 'rgb(25, 181, 157)' }} d="M77.576,38.788H54.303V287.03h23.273c68.44,0,124.121-55.681,124.121-124.121 S146.016,38.788,77.576,38.788z"/> 
                <path style={{ fill: 'rgb(27, 24, 29)' }} d="M100.848,236.919V88.899c31.443,9.908,54.303,39.339,54.303,74.01S132.291,227.011,100.848,236.919z"/> 
                <path style={{ fill: '#FFFFFF' }} d="M356.848,162.909c0,34.672,22.86,64.102,54.303,74.01V88.899 C379.708,98.807,356.848,128.237,356.848,162.909z"/> 
                <path style={{ fill: 'rgb(48, 101, 90)' }} d="M434.424,38.788c-68.44,0-124.121,55.681-124.121,124.121S365.984,287.03,434.424,287.03h23.273 V38.788H434.424z"/> 
                <path style={{ fill: 'rgb(27, 24, 29)' }} d="M411.151,236.919c-31.443-9.908-54.303-39.339-54.303-74.01s22.86-64.102,54.303-74.01V236.919z"/> 
                <path style={{ fill: 'rgb(20, 235, 202)' }} d="M433.909,152.77c-16.161-11.312-34.081-20.902-53.299-28.649H131.39 c-19.219,7.747-37.139,17.337-53.299,28.649C27.733,188.022,0,235.702,0,287.03s27.733,99.008,78.091,134.26 c47.832,33.482,111.016,51.921,177.909,51.921s130.077-18.44,177.909-51.921C484.267,386.039,512,338.359,512,287.03 S484.267,188.022,433.909,152.77z"/> 
                <path style={{ fill: 'rgb(26, 127, 112)' }} d="M433.909,152.77c-16.161-11.312-34.081-20.902-53.299-28.649H256v349.091 c66.894,0,130.077-18.44,177.909-51.921C484.267,386.039,512,338.359,512,287.03S484.267,188.022,433.909,152.77z"/> 
                <path style={{ fill: 'rgb(27, 24, 29)' }} d="M287.03,356.848c0-4.231-1.699-8.063-4.444-10.861C274.01,334.832,256,325.818,256,325.818 s-18.01,9.014-26.587,20.17c-2.746,2.797-4.444,6.63-4.444,10.861s1.699,8.063,4.444,10.861c8.575,11.155,26.587,20.17,26.587,20.17 s18.01-9.014,26.587-20.17C285.331,364.912,287.03,361.079,287.03,356.848z"/> 
                <path style={{ fill: 'rgb(25, 181, 157)' }} d="M108.606,395.636C48.719,395.636,0,346.917,0,287.03s48.719-108.606,108.606-108.606 s108.606,48.719,108.606,108.606S168.493,395.636,108.606,395.636z"/> 
                <path style={{ fill: 'rgb(20, 235, 202)' }} d="M108.606,224.97c-34.22,0-62.061,27.84-62.061,62.061s27.84,62.061,62.061,62.061 s62.061-27.84,62.061-62.061S142.826,224.97,108.606,224.97z"/> 
                <path style={{ fill: 'rgb(48, 101, 90)' }} d="M403.394,395.636c-59.887,0-108.606-48.719-108.606-108.606s48.719-108.606,108.606-108.606 S512,227.143,512,287.03S463.281,395.636,403.394,395.636z"/> 
                <path style={{ fill: 'rgb(26, 127, 112)' }} d="M403.394,224.97c-34.22,0-62.061,27.84-62.061,62.061s27.84,62.061,62.061,62.061 s62.061-27.84,62.061-62.061S437.614,224.97,403.394,224.97z"/> 
                <g> 
                  <circle style={{ fill: 'rgb(27, 24, 29)' }} cx="108.606" cy="287.03" r="23.273"/> 
                  <circle style={{ fill: 'rgb(27, 24, 29)' }} cx="403.394" cy="287.03" r="23.273"/> 
                </g> 
                <path style={{ fill: 'rgb(25, 181, 157)' }} d="M256,100.848c-51.38,0-100.537,10.918-142.262,31.134c66.399,2.171,122.374,46.251,142.262,106.592 C275.887,178.233,307.38,100.848,256,100.848z"/> 
                <path style={{ fill: 'rgb(48, 101, 90)' }} d="M256,238.576V100.848c51.38,0,100.537,10.918,142.262,31.134 C331.863,134.155,275.887,178.233,256,238.576z"/> </g>
              </svg>
            </div>
            <h2>Futured Projects</h2></Link>
        </div>
      </div>
      <div className="messageContainer">
        <div className='mainInfo'>
          <Link to='/about'>
            <h2>A Web Developer with a Brushstroke of Excellence!</h2>
            <span>I'm an artist weaving creativity into every line of code. With a palette of 100+ successful projects, I bring a unique blend of technical prowess and artistic finesse to the digital realm. Let's transform your ideas into web wonders!</span>
          </Link>
        </div>
        <div>
            <a 
            href="https://luartgallery.com/"
            target='_blank'
            rel="noreferrer"
            aria-label='LuArt Gallery' >
              <h2>Check my art gallery</h2>
            </a>
        </div>
        <motion.div 
        className='contact'
        variants={contactVariants}
        initial="initial"
        animate="animate">
          <Link to='/contact'>
              <h2>Contact me</h2>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero