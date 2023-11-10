import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Contact = () => {

  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Contact ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>Fine Art</h2>
      </div>
    </div>
  )
}

export default Contact