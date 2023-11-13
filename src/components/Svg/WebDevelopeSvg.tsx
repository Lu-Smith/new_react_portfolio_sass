import { motion } from 'framer-motion';

const WebDevelopeSvg = () => {

    const textWeb = "Web";
    const textDeveloper = "Developer";

    const letterVariants = {
      hidden: { opacity: 0, x: -200 },
      visible: { opacity: 1, x: 0 },
    };

  return (
    <div className='WebDeveloper'>
<motion.div
    className="webSvg"
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 2 }}
  >
    <svg
      height="200px"
      width="300px"
      version="1.1"
      strokeWidth="2"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      {textWeb.split('').map((letter, index) => (
        <motion.text
          key={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          transition={{ delay: 0.2 * index, duration: 1 }}
          style={{ fill: 'rgb(27, 24, 29)', 
          stroke: 'rgb(231, 226, 233)', 
          fontSize: '60px', 
          fontFamily: 'Ariel' }}
          x={160 + index * 80} 
          y="70%"
        >
          {letter}
        </motion.text>
      ))}
    </svg>
  </motion.div>
  <motion.div
    className="webDeveloperSvg"
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 2 }}
  >
    <svg
      height="200px"
      width="300px"
      version="1.1"
      strokeWidth="2"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      {textDeveloper.split('').map((letter, index) => (
        <motion.text
          key={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          transition={{ delay: 0.2 * index, duration: 1 }}
          style={{ fill: 'rgb(27, 24, 29)', 
          stroke: 'rgb(231, 226, 233)', 
          fontSize: '100px', 
          fontFamily: 'Ariel' }}
          x={30 + index * 55} 
          y="40%"
        >
          {letter}
        </motion.text>
      ))}
    </svg>
  </motion.div>
    </div>
    
  )
}

export default WebDevelopeSvg