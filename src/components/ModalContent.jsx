import { useEffect } from "react";
import close from "../assets/close.svg";
import "./modalcontent.css";
export default function ModalContent({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <img onClick={onClose} src={close} className='close-button' />
        <h3 className='modal-heading'>შესვლა</h3>
        <div>
          <p className='email-title'>ელ-ფოსტა</p>
          <input className='email-login' placeholder='Example@redberry.ge' />
        </div>
        <button className='enter-button'>შესვლა</button>
      </div>
    </div>
  );
}
