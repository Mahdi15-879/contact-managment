import React from "react";

import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
  return show ? <div className="Backdrop" onClick={click}></div> : null;
};

export default Backdrop;
