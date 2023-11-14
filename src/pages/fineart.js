import React from "react";
import FineArt from "../components/FineArt/FineArt";
import ScrollToTop from "../components/ScrollToTop";

const fineart = ({mode, handleMode}) => {
  return (
    <>
      <ScrollToTop />
      <FineArt mode={mode} handleMode={handleMode} />
    </>
  );
};

export default fineart;