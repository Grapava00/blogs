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
      <div>
        <div>
          <img onClick={handleShowModal} src={closeIcon} alt='close-icon' />
          <img src={successIcon} alt='Success Icon' />
          <p>ჩანაწერი წარმატებით დაემატა</p>
          <Link to='/'>მთავარ გვერდზე დაბრუნება</Link>
        </div>
      </div>
    ),
    document.body
  );
}

export default CreateSuccessModal;
