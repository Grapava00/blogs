import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";
import "./header.css";
import logoRedberry from ".././assets/logo.png";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header>
        <img src={logoRedberry} alt='redberry logo' className='logo' />
        <button className='login-button' onClick={()=>setShowModal(true)}>
          შესვლა
        </button>
      </header>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Header;
