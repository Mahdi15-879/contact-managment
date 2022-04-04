import React from "react";

import ContactCard from "./ContactCard";

import "./ContactList.css";

const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return <div className="ContactList">{renderContactList}</div>;
};

export default ContactList;
