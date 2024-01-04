import React from "react";
import PropTypes from "prop-types";
import {
  customWordCountValidation,
  wordsValidateForBorder,
  authorSymbolsValidate,
  wordsValidate,
  patternValidate,
} from "../../utils/validations";
import "./NameInputStyles.css";

const validationMessages = {
  authorMinimumSymbols: "მინიმუმ 4 სიმბოლო",
  minimumWords: "მინიმუმ ორი სიტყვა",
  georgianSymbols: "მხოლოდ ქართული სიმბოლოები",
};

function NameInput({ register, watch }) {
  const authorValue = watch("author") ?? "";

  return (
    <>
      <div className='name-input__container'>
        <label htmlFor='author' className='name-input__title'>
          ავტორი *
        </label>
        <input
          className={`name-input__input ${wordsValidateForBorder(authorValue)}`}
          type='text'
          id='author'
          placeholder='შეიყვანეთ სახელი'
          {...register("author", {
            required: true,
            minLength: 4,
            pattern: /^[ა-ჰ ]+$/,
            validate: customWordCountValidation,
          })}
        />

        <ul className='name-input__warnings name-input__input-warning'>
          <li className={authorSymbolsValidate(authorValue)}>
            {validationMessages.authorMinimumSymbols}
          </li>
          <li className={wordsValidate(authorValue)}>
            {validationMessages.minimumWords}
          </li>
          <li className={patternValidate(authorValue)}>
            {validationMessages.georgianSymbols}
          </li>
        </ul>
      </div>
    </>
  );
}

NameInput.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};

export default NameInput;
