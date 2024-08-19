import React from "react";
import JavaScriptProjects from "../components/Projects/JavaScriptProjects";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Facebook from '../assets/media/facebook.jpg';

const javaScript = ({mode, handleMode}) => {
  return (
    <>
      <Helmet>
        <title>JavaScript projects</title>
        <meta name="description" content="Luna Smith portfolio - a web developer" />
        <link rel="canonical" href="https://www.lunasmithart.com/javaScriptProjects" />
        <meta name="keywords" content="JavaScript, Luna, Smith, portfolio, web developer, games, engineer, programming" />
        <meta property="og:title" content="JavaScript projects" />
        <meta property="og:description" content="Luna Smith portfolio - a web developer" />
        <meta property="og:image" content={Facebook} />
        <meta property="og:url" content="https://www.lunasmithart.com/javaScriptProjects" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JavaScript projects" />
        <meta name="twitter:description" content="Luna Smith portfolio - a web developer" />
        <meta name="twitter:image" content={Facebook} />
      </Helmet>
      <ScrollToTop />
      <JavaScriptProjects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default javaScript;