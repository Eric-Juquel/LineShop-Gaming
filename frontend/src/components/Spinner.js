import React from "react";
import spinner from "../images/spinner/ZKZg.gif";

const Spinner = () => {
  return (
    <div style={{width:'100%', height:'100%', display:'flex'}}>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "3rem", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
