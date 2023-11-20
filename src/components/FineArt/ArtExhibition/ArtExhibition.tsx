import React, { useState, useEffect, useRef } from 'react';
import artExhibtionPages from '../../../assets/content/artExhibitionPages';
import Navigation from './Navigation/Navigation';
import { motion } from 'framer-motion';

function ArtExhibition() {

  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollValue, setScrollValue] = useState(0);

  const [playFromBeginning, setPlayFromBeginning] = useState(false);

  const handleScroll = () => {
    if(scrollValue >= -600) {
      setPlayFromBeginning(false);
      setScrollValue(scrollValue - 100);
    } else {
      setScrollValue(100);
      setPlayFromBeginning(true);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      let screenWidth;
      
      if (window.innerWidth < 820) {
        screenWidth = window.innerWidth;
      } else  if (window.innerWidth < 1050) {
        screenWidth = 600;
      } else {
        screenWidth = 800;
      }

      const percentageFactor = 0.01; 

      containerRef.current.scrollTo({
        left: -scrollValue * (screenWidth * percentageFactor),
        behavior: 'smooth',
      });
    }
  }, [scrollValue]);

  return (
    <div className="ArtExhibition">
      <section className='mainSection' ref={containerRef}>
      {artExhibtionPages.map((Page, index) => (
          <div key={index}>
            <motion.div 
            className='inViewPage'>
              {React.createElement(Page.page, { artwork: Page.artwork } )}
            </motion.div>
          </div>
        ))}
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} playFromBeginning={playFromBeginning} />
      </section>
    </div>
  );
}

export default ArtExhibition;