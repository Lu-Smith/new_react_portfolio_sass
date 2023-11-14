import React from "react";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop";

const about = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <About mode={mode} handleMode={handleMode} />
    </>
  );
};

export default about;