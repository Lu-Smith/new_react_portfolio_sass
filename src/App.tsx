import React from 'react';
import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <section>
        <Sidebar />
        <Hero />
        </section>
      <section></section>
    </div>
  );
}

export default App;
