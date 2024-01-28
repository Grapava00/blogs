import React from "react";
import "./EmailInputStyles.css";
import PropTypes from "prop-types";
import errorIcon from "../../assets/error-icon.svg";

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@redberry\.ge$/i;

function EmailInput({ register, errors }) {
  return (
    <>
      <div className='input__container'>
        <label htmlFor='email' className='email-input__title'>
          ელ-ფოსტა *
        </label>
        <input
          className='input'
          id='email'
          placeholder='Example@redberry.ge'
          {...register("email", {
            pattern: {
              value: EMAIL_PATTERN,
              message: "ელ-ფოსტა არ მოიძებნა",
            },
          })}
        />

        <p
          className='email-input__error-text'
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {errors.email && <img src={errorIcon} alt='error-icon' />}
          {errors.email?.message}
        </p>
      </div>
    </>
  );
}

EmailInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EmailInput;
