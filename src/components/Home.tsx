import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className='Home'>
        <Sidebar />
        <div className="mainContainer">
            <Navbar />
            <Hero />
        </div>
    </div>
  )
}

export default Home