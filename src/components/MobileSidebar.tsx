import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import ToggleButton from './ToggleButton';

const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 30px 30px)',
            transition: {
                type: 'spring',
                stiffnes: 100,
                delay: 0.4,
                damping: 10,
            }
        },
        closed: {
            clipPath: 'circle(20px at 30px 30px',
            transition: {
                delay: 0.2,
                type: 'spring', 
                stiffnes: 300,
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
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default MobileSidebar