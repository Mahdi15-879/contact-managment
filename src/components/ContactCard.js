import React from "react";
import user from "../images/user.png";

import "./ContactCard.css";

const CntactCard = ({ contact }) => {
  return (
    <div className="ContactCard">
      <img src={user} alt="User" />
      <div className="content">
        <h5>{contact[0]}</h5>
        <h6>{contact[1]}</h6>
        <h6>{contact[2]}</h6>
      </div>
    </div>
  );
};

export default CntactCard;
