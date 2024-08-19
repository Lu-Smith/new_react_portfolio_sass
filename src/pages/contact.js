import React from "react";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const contact = ({mode, handleMode}) => {
  return (
    <>
      <Helmet>
        <title>Contact Luna Smith</title>
        <link rel="canonical" href="https://www.lunasmithart.com/contact" />
        <meta name="description" content="Luna Smith portfolio - a web developer and an artist" />
        <meta name="keywords" content="contact, Luna, Smith, portfolio, web developer, artist, fine art, Scotland, games, engineer, programming" />
        <meta property="og:title" content="Contact Luna Smith" />
        <meta property="og:description" content="Luna Smith portfolio - a web developer and an artist" />
        <meta property="og:image" content={Facebook} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lunasmithart.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Luna Smith" />
        <meta name="twitter:description" content="Luna Smith portfolio - a web developer and an artist" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <ScrollToTop />
      <Contact mode={mode} handleMode={handleMode} />
    </>
  );
};

export default contact;