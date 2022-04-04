import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const Modal = ({ show, modalClose }) => {
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
        <form>
          <label>First Name</label>
          <input type="text" placeholder="Fisrt Name" />
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
          <label>Phone Number</label>
          <input type="number" placeholder="Phone Number" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
