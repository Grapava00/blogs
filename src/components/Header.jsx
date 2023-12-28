import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";
import "./header.css";
import logoRedberry from ".././assets/logo.png";
import { UseAppData } from "../context/ContextProvider";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { authenticated } = UseAppData();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <header>
        <Link to='/'>
          <img src={logoRedberry} alt='redberry logo' className='logo' />
        </Link>
        {!authenticated ? (
          <button className='login-button' onClick={() => setShowModal(true)}>
            შესვლა
          </button>
        ) : (
          <Link to='/create-blog'>
            <button className='login-button'>ბლოგის დამატება</button>
          </Link>
        )}
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
