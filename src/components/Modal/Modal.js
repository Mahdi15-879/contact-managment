import React, { useState } from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const Modal = ({ show, modalClose, addContactHandler }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "") {
      alert("All fields are required!");
      return;
    }
    addContactHandler([name, phone, email]);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <>
      <Backdrop show={show} click={modalClose} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <form onSubmit={add}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
