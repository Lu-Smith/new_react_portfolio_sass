import React, { useState } from 'react';
import Sidebar from './Sidebar';
import paintings from '../assets/content/fineart';

const FineArt = () => {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`FineArt ${mode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <div className='menu'>
        <Sidebar mode={mode} handleMode={handleMode} />
      </div>
      <div className="componentContainer">
        <h2>Fine Art</h2>
        {paintings.map((painting, index) => {
          return <div className={painting.title} key={index}>
            {painting.title}
          </div>
        })}
      </div>
    </div>
  )
}

export default FineArt