import React from "react";
import JavaScriptProjects from "../components/Projects/JavaScriptProjects";
import ScrollToTop from "../components/ScrollToTop";

const javaScript = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <JavaScriptProjects mode={mode} handleMode={handleMode} />
    </>
  );
};

export default javaScript;