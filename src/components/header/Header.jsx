import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../modals/login/LoginModal";
import logoRedberry from "../../assets/logo.png";
import { UseAppData } from "../../context/ContextProvider";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { authenticated } = UseAppData();

  const handleShowModal = (condition) => {
    setShowModal(condition);
  };

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
        <ModalLogin handleShowModal={handleShowModal} showModal={showModal} />
      </header>
    </>
  );
}

export default Header;
