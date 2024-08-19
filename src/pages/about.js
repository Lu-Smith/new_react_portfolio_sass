import React from "react";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Artist from '../assets/media/artist-Facebook.jpg';

const about = ({mode, handleMode}) => {
  return (
    <>
      <Helmet>
        <title>Luna Smith - an artist and a web developer</title>
        <link rel="canonical" href="https://www.lunasmithart.com/about" />
        <meta name="description" content="Luna Smith - an artist and a web developer" />
        <meta name="keywords" content="codine,code, react, vue, javascript, art, Luna, Smith, portfolio, oil paintings, art, contemporary, Scottish art, Scotland, art gallery" />
        <meta property="og:title" content="Luna Smith - an artist and a web developer" />
        <meta property="og:description" content="Luna Smith - an artist and a web developer - a Scottish contemporary artist" />
        <meta property="og:image" content={Artist} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luna Smith - an artist and a web developer" />
        <meta name="twitter:description" content="Luna Smith - an artist and a web developer - a Scottish contemporary artist" />
        <meta name="twitter:image" content={Artist} />
      </Helmet>
      <ScrollToTop />
      <About mode={mode} handleMode={handleMode} />
    </>
  );
};

export default about;