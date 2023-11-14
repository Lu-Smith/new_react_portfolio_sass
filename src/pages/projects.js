import React from "react";
import Projects from "../components/Projects/Projects";
import ScrollToTop from "../components/ScrollToTop";

const projects = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <Projects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default projects;