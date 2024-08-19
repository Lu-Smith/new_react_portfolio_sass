import React from "react";
import Projects from "../components/Projects/Projects";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const projects = ({mode, handleMode}) => {
  return (
    <>
     <Helmet>
        <title>Projects created by Luna Smith</title>
        <meta name="description" content="Projects created by Luna Smith" />
        <link rel="canonical" href="https://www.lunasmithart.com/projects" />
        <meta name="keywords" content="react, Luna, Smith, portfolio, web developer, react, javascript, vue, Scotland, games, engineer, programming" />
        <meta property="og:title" content="Projects created by Luna Smith" />
        <meta property="og:description" content="Projects created by Luna Smith - a web developer" />
        <meta property="og:image" content={Facebook} />
        <meta property="og:type" content="profile" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects created by Luna Smith" />
        <meta name="twitter:description" content="Projects created by Luna Smith - a web developer" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <ScrollToTop />
      <Projects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default projects;