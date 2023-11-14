import React from "react";
import Home from "../components/Home/Home";

const home = ({mode, handleMode}) => {

  return (
    <>
      <Home mode={mode} handleMode={handleMode} />
    </>
  );
};

export default home;