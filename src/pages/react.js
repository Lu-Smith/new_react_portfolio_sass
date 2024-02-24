import React from "react";
import ReactProjects from "../components/Projects/ReactProjects";
import ScrollToTop from "../components/ScrollToTop";

const react = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <ReactProjects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default react;