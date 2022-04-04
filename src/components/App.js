import React, { useState } from "react";

import Header from "./shared/Header";
import Modal from "./Modal/Modal";

import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(false);

  const showHandler = () => {
    setIsShow(true);
  };

  const modalCloseHandler = () => {
    setIsShow(false);
  };

  return (
    <div className="App">
      <Header showHandler={showHandler} />
      <Modal show={isShow} modalClose={modalCloseHandler} />
    </div>
  );
}

export default App;
