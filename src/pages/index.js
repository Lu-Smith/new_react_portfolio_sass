import React from "react";
import Home from "../components/Home/Home";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const home = ({mode, handleMode}) => {

  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="Luna Smith portfolio - a web developer and an artist" />
        <meta name="keywords" content="react, Luna, Smith, portfolio, web developer, artist, fine art, Scotland, games, engineer, programming" />
        <meta property="og:title" content="Luna Smith Art portfolio" />
        <meta property="og:description" content="una Smith portfolio - a web developer and an artist" />
        <meta property="og:image" content={Facebook} />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luna Smith Art portfolio" />
        <meta name="twitter:description" content="Luna Smith portfolio - a web developer and an artist" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <Home mode={mode} handleMode={handleMode} />
    </>
  );
};

export default home;