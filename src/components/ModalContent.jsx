import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import close from "../assets/close.svg";
import "./modalcontent.css";
import errorIcon from "../assets/error-icon.svg";
import successIcon from "../assets/success-icon.svg";
import { UseAppData } from "../context/ContextProvider";

export default function ModalContent({ onClose }) {
  const { login, authenticated } = UseAppData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await login(data.email);
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <img onClick={onClose} src={close} className='close-button' />

        <div>
          {!authenticated ? (
            <>
              <h3 className='modal-heading'>შესვლა</h3>
              <p className='email-title'>ელ-ფოსტა</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className='email-login'
                  placeholder='Example@redberry.ge'
                  {...register("email", {
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/i,
                      message: "ელ-ფოსტა არ მოიძებნა",
                    },
                  })}
                />

                {errors.email && (
                  <div className='error-container'>
                    <img
                      src={errorIcon}
                      className='error-icon'
                      alt='Error Icon'
                    />
                    <p className='error-message'>{errors.email.message}</p>
                  </div>
                )}
                <button className='enter-button' type='submit'>
                  შესვლა
                </button>
              </form>
            </>
          ) : (
            <div className='success-container'>
              <img
                src={successIcon}
                className='success-icon'
                alt='Success Icon'
              />
              <p className='success-message'>წარმატებული ავტორიზაცია</p>
              <button className='success-button' onClick={onClose}>
                კარგი
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
