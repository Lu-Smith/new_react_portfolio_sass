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
        <div className="painitngs">
          {paintings.map((painting, index) => {
            return <div className='painting' key={index}>
              <h3>{painting.title}</h3>
              {painting.project.map((item, index) => {
                return <div key={index}>
                  <div className="imageContainer">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
              })}
            </div>
          })}
          </div>
      </div>
    </div>
  )
}

export default FineArt