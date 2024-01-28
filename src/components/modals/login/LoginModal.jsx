import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import close from "../../../assets/close.svg";
import LoginForm from "../../login-form/LoginForm";
import SuccessMessage from "../../success-message/SuccessMessage";
import { AuthContext } from "../../../context/AuthContext";

function LoginModal({ handleShowModal, showModal }) {
  const { isAuthenticated, login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    await login(data);
  };

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
      {showModal &&
        createPortal(
          <div>
            <div>
              <img
                onClick={() => handleShowModal(false)}
                src={close}
                alt='Close Button'
              />

              <div>
                {!isAuthenticated ? (
                  <>
                    <LoginForm onSubmit={onSubmit} />
                  </>
                ) : (
                  <SuccessMessage
                    handleShowModal={() => handleShowModal(false)}
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

LoginModal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default LoginModal;
