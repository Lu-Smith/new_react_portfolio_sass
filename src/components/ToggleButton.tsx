import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ToggleButton = ({setOpen}: ButtonProps) => {
  
  return (
    <div>
      <button onClick={() => setOpen((prev: boolean) => !prev)}>
      <svg width='23' height='23' viewBox='0 0 23 23' >
        <motion.path 
        strokeWidth='3' 
        stroke='black' 
        strokeLinecap='round'
        variants={{ 
          closed: { d: 'M 2 5.5 L 20 5.5'},
          open: { d: 'M 3 19.5 L 17 5.5'},
        }} 
        />
        <motion.path 
        strokeWidth='3' 
        stroke='black' 
        strokeLinecap='round' 
        d='M 2 12.423 L 20 12.423'
        variants={{ 
          closed: { opacity: 1},
          open: { opacity: 0},
        }}/>
        <motion.path 
        strokeWidth='3' 
        stroke='black' 
        strokeLinecap='round' 
        variants={{ 
          closed: { d: 'M 2 19.346 L 20 19.346'},
          open: { d: 'M 3 5.5 L 17 19.346'},
        }} />
      </svg>
      </button>
    </div>
  )
}

export default ToggleButton