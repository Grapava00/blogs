import React from "react";
import "./header.css";
import logoRedberry from ".././assets/logo.png";

function Header() {
  return (
    <>
      <header>
        <img src={logoRedberry} alt='redberry logo' className='logo' />
        <button className='login-button'>შესვლა</button>
      </header>
    </>
  );
}

export default Header;
