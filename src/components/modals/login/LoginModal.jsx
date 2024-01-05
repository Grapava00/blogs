import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import close from "../../../assets/close.svg";
import errorIcon from "../../../assets/error-icon.svg";
import successIcon from "../../../assets/success-icon.svg";
import { UseAppData } from "../../../context/ContextProvider";

function LoginModal({ handleShowModal, showModal }) {
  const { login, authenticated } = UseAppData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data.email);
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
          <div className='modal'>
            <div className='modal__content'>
              <img
                onClick={() => handleShowModal(false)}
                src={close}
                className='modal__close-button'
              />

              <div>
                {!authenticated ? (
                  <>
                    <h3 className='modal__heading'>შესვლა</h3>
                    <p className='modal__email-title'>ელ-ფოსტა</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        className='modal__email-login'
                        placeholder='Example@redberry.ge'
                        {...register("email", {
                          pattern: {
                            value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/i,
                            message: "ელ-ფოსტა არ მოიძებნა",
                          },
                        })}
                      />

                      {errors.email && (
                        <div className='modal__error-container'>
                          <img
                            src={errorIcon}
                            className='modal__error-icon'
                            alt='Error Icon'
                          />
                          <p className='modal__error-message'>
                            {errors.email.message}
                          </p>
                        </div>
                      )}
                      <button className='modal__enter-button' type='submit'>
                        შესვლა
                      </button>
                    </form>
                  </>
                ) : (
                  <div className='modal__success-container'>
                    <img
                      src={successIcon}
                      className='modal__success-icon'
                      alt='Success Icon'
                    />
                    <p className='modal__success-message'>
                      წარმატებული ავტორიზაცია
                    </p>
                    <button
                      className='modal__success-button'
                      onClick={()=>handleShowModal(false)}
                    >
                      კარგი
                    </button>
                  </div>
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
