import React from "react";
import Games from "../components/Projects/Games";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const games = ({mode, handleMode}) => {
  return (
    <>
     <Helmet>
        <title>Games coded by Luna Smith</title>
        <meta name="description" content="Games coded by Luna Smith" />
        <link rel="canonical" href="https://www.lunasmithart.com/games" />
        <meta name="keywords" content="react, Luna, Smith, portfolio, web developer, react, javascript, vue, Scotland, games, engineer, programming" />
        <meta property="og:title" content="Games coded by Luna Smith" />
        <meta property="og:description" content="Games coded by Luna Smith - a web developer" />
        <meta property="og:image" content={Facebook} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.lunasmithart.com/games" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Games coded by Luna Smith" />
        <meta name="twitter:description" content="Games coded by Luna Smith - a web developer" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <ScrollToTop />
      <Games mode={mode} handleMode={handleMode} />
    </>
  );
};

export default games;