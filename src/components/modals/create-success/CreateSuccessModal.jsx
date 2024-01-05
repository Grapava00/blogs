import React from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import closeIcon from "../../../assets/close.svg";
import successIcon from "../../../assets/success-icon.svg";

function CreateSuccessModal() {
  return createPortal(
    <div className='create-success-modal__background'>
      <div className='create-success-modal__content'>
        <img
          className='create-success-modal__close-icon'
          src={closeIcon}
          alt='close-icon'
        />
        <img src={successIcon} alt='Success Icon' />
        <p className='create-success-modal__success-text'>
          ჩანაწი წარმატებით დაემატა
        </p>
        <Link to='/' className='create-success-modal__button'>
          მთავარ გვერდზე დაბრუნება
        </Link>
      </div>
    </div>,
    document.body
  );
}

export default CreateSuccessModal;
