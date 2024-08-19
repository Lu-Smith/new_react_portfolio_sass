import React from "react";
import FineArt from "../components/FineArt/FineArt";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from 'react-helmet';
import Artist from '../assets/media/artist.jpg';

const fineart = ({mode, handleMode}) => {
  return (
    <>
     <Helmet>
        <title>Fine Art by Luna Smith</title>
        <link rel="canonical" href="https://www.lunasmithart.com/fineart" />
        <meta name="description" content="Fine Art by Luna Smith" />
        <meta name="keywords" content="art, Luna, Smith, portfolio, oil paintings, art, contemporary, Scottish art, Scotland, art gallery" />
        <meta property="og:title" content="Fine Art by Luna Smith" />
        <meta property="og:description" content="Fine Art by Luna Smith - a Scottish contemporary artist" />
        <meta property="og:image" content={Artist} />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fine Art by Luna Smith" />
        <meta name="twitter:description" content="Fine Art by Luna Smith - a Scottish contemporary artist" />
        <meta name="twitter:image" content={Artist} />
      </Helmet>
      <ScrollToTop />
      <FineArt mode={mode} handleMode={handleMode} />
    </>
  );
};

export default fineart;