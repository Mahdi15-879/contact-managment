import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./shared/Header";
import Modal from "./Modal/Modal";
import ContactList from "./ContactList";
import About from "./About";

import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [isShow, setIsShow] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const receiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (receiveContacts) setContacts(receiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactList contacts={contacts} />} />
        <Route path="/*" element={<Navigate to="/contact" />} />
      </Routes>
      <Modal
        show={isShow}
        modalClose={modalCloseHandler}
        addContactHandler={addContactHandler}
      />
    </div>
  );
}

export default App;
