import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import closeIcon from "../../../assets/close.svg";
import successIcon from "../../../assets/success-icon.svg";

function CreateSuccessModal() {
  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal(false);
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

  return createPortal(
    showModal && (
      <div className='create-success-modal__background'>
        <div className='create-success-modal__content'>
          <img
            onClick={handleShowModal}
            className='create-success-modal__close-icon'
            src={closeIcon}
            alt='close-icon'
          />
          <img src={successIcon} alt='Success Icon' />
          <p className='create-success-modal__success-text'>
            ჩანაწერი წარმატებით დაემატა
          </p>
          <Link to='/' className='create-success-modal__button'>
            მთავარ გვერდზე დაბრუნება
          </Link>
        </div>
      </div>
    ),
    document.body
  );
}

export default CreateSuccessModal;
