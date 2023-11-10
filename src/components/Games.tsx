import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Games = () => {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Games ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
        <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
        </div>
        <div className="componentContainer">
          <h2>Games</h2>
        </div>
    </div>
  )
}

export default Games