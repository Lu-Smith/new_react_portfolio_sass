import React from "react";
import Games from "../components/Projects/Games";
import ScrollToTop from "../components/ScrollToTop";

const games = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <Games mode={mode} handleMode={handleMode} />
    </>
  );
};

export default games;