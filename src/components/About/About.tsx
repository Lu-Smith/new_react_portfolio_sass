import {useRef, useEffect}  from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileSidebar from '../Sidebar/MobileSidebar';
import Bio from './Bio';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const About = ({mode, handleMode}: ModeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (context) {
        // Example of drawing something on the canvas, like a background color or pattern
        context.fillStyle = mode === 'light' ? 'rgb(231, 226, 233)' : 'rgb(32, 36, 41)';
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context?.fillRect(0, 0, canvas.width, canvas.height); 
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mode]);

  return (
    <div className={`About ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
          <canvas ref={canvasRef} className="backgroundCanvas" />
          <Bio mode={mode} />
      </div>
    </div>
  )
}

export default About