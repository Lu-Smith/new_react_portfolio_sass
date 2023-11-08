import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className='Home'>
        <Sidebar />
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home