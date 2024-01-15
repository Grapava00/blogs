import PropTypes from "prop-types";
import { useState, useContext } from "react";
import NavLink from "../nav-link/NavLink";
import LoginModal from "../modals/login/LoginModal";
import logoRedberry from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import Button from "../button/Button";
import { StyledHeader } from "./header.styles";

function Header({ display }) {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const handleShowModal = (condition) => {
    setShowModal(condition);
  };

  return (
    <>
      <StyledHeader
        style={display === "none" ? { justifyContent: "center" } : {}}
      >
        <NavLink to='/'>
          <img src={logoRedberry} alt='redberry logo' />
        </NavLink>
        {!isAuthenticated ? (
          <Button onClick={() => setShowModal(true)}>შესვლა</Button>
        ) : (
          <NavLink to='/create-blog'>
            <Button display={display}>ბლოგის დამატება</Button>
          </NavLink>
        )}
        <LoginModal handleShowModal={handleShowModal} showModal={showModal} />
      </StyledHeader>
    </>
  );
}

Header.propTypes = {
  display: PropTypes.string,
};

export default Header;
