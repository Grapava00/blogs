import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";
import "./header.css";
import logoRedberry from ".././assets/logo.png";

function Header({ content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header>
        <Link to='/'>
          <img src={logoRedberry} alt='redberry logo' className='logo' />
        </Link>
        <button className='login-button' onClick={() => setShowModal(true)}>
          {content}
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
