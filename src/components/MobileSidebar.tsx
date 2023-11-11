import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import ToggleButton from './ToggleButton';
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';

interface ModeProps {
    mode: string,
    handleMode: () => void,
  };

const MobileSidebar = ({ mode, handleMode }: ModeProps) => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 30px 30px)',
            transition: {
                type: 'spring',
                stiffnes: 250,
                delay: 0.3,
                damping: 40,
            }
        },
        closed: {
            clipPath: 'circle(20px at 30px 30px',
            transition: {
                delay: 0.2,
                type: 'spring', 
                stiffnes: 250,
                damping: 40,
            }
        },
    }

  return (
    <motion.div 
    className='MobileSidebar'
    animate={open ? 'open' : 'closed'}>
        <motion.div 
        className="container"
        variants={variants}>
            {open && <div>
                <div className="mode">
                    <button onClick={handleMode}>
                    {mode === 'light' && <span><FaRegLightbulb /></span>}
                    {mode === 'dark' && <span><FaMoon /></span>}
                    Mode
                    </button>  
                </div>
                <Links />
         
            </div>}
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default MobileSidebar