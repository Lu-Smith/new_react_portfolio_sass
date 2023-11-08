import React from 'react';
import './styles/app.scss';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Sidebar />
        <Hero />
        </section>
      <section></section>
    </div>
  );
}

export default App;
