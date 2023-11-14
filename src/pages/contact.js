import React from "react";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop";

const contact = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <Contact mode={mode} handleMode={handleMode} />
    </>
  );
};

export default contact;