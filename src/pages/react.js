import React from "react";
import ReactProjects from "../components/Projects/ReactProjects";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const react = ({mode, handleMode}) => {
  return (
    <>
      <Helmet>
        <title>React projects</title>
        <meta name="description" content="Luna Smith portfolio - a web developer" />
        <link rel="canonical" href="https://www.lunasmithart.com/reactProjects" />
        <meta name="keywords" content="react, Luna, Smith, portfolio, web developer, games, engineer, programming" />
        <meta property="og:title" content="React projects" />
        <meta property="og:description" content="Luna Smith portfolio - a web developer" />
        <meta property="og:image" content={Facebook} />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React projects" />
        <meta name="twitter:description" content="Luna Smith portfolio - a web developer" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <ScrollToTop />
      <ReactProjects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default react;