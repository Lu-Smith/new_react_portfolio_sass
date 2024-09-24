import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import MovingText from './MovingText';
import MobileSidebar from '../Sidebar/MobileSidebar';
import OwlSvg from '../Svg/OwlSvg';
import PhoneSvg from '../Svg/PhoneSvg';

interface ModeProps {
  mode: string,
  handleMode: () => void,
};

const variants = {
  initial: {
      y: 500,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 3,
          staggerChildren: 0.1,
      }
  }
};

const Contact = ({mode, handleMode}: ModeProps) => {

  const ref = useRef<HTMLDivElement>(null);

  const [message, SetMessage] = useState("");

  const submitForm = () => {
    SetMessage("Thank you");
  };

  const formId = process.env.REACT_APP_CONTACT_FORM_ID;
  const fromSparkUrl = `https://submit-form.com/${formId}`;

  return (
    <div className={`Contact ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className='menuMobile'>
        <MobileSidebar mode={mode} handleMode={handleMode} />
      </div>
        <motion.div 
            ref = { ref }
            variants={variants}
            initial='initial'
            whileInView='animate'
            className="componentContainer">
                <motion.div 
                className="textContainer"
                variants={variants}>
                    <motion.h1 variants={variants}>Let's work together</motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>lunasmithart@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Address</h2>
                        <span>Edinburgh, Scotland</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone</h2>
                        <span>07863734874</span>
                    </motion.div>
                </motion.div>
                <div className="formContainer">
                    <PhoneSvg />
                    <motion.form 
                    action={fromSparkUrl} 
                    onSubmit={submitForm}
                    initial={{ opacity: 0}} 
                    whileInView={{opacity: 1}} 
                    transition={{ delay: 7, duration: 1}}>
                        <input type="hidden" name="_feedback.dark" value="true" />
                        <input
                            type="hidden"
                            name="_feedback.success.title"
                            value="Thank you! Have a wonderful day 🌞"
                        />
                        <input type="text" id="name" required placeholder='Name' name='name' />
                        <input type="email" id="email" required placeholder='Email' name='email' />
                        <textarea placeholder='Message'rows={8} name='message' id="message" ></textarea>
                        <button type="submit">Submit</button>
                        <div>{message}</div>
                    </motion.form>
                    
                </div>
        </motion.div>
        <MovingText />
        <div className='owl'>
          <OwlSvg />
        </div>
    </div>
  )
}

export default Contact