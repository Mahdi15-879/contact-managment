import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./shared/Header";
import Modal from "./Modal/Modal";
import ContactList from "./ContactList";

import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [isShow, setIsShow] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    setIsShow(false);
  };

  const showHandler = () => {
    setIsShow(true);
  };

  const modalCloseHandler = () => {
    setIsShow(false);
  };

  return (
    <div className="App">
      <Header showHandler={showHandler} />
      <Modal
        show={isShow}
        modalClose={modalCloseHandler}
        addContactHandler={addContactHandler}
      />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
