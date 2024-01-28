import React from "react";
import PropTypes from "prop-types";
import {
  customWordCountValidation,
  wordsValidateForBorder,
  authorSymbolsValidate,
  wordsValidate,
  patternValidate,
} from "../../utils/validations";

const MIN_TITLE_LENGTH = 4;

const validationMessages = {
  authorMinimumSymbols: `მინიმუმ ${MIN_TITLE_LENGTH} სიმბოლო`,
  minimumWords: "მინიმუმ ორი სიტყვა",
  georgianSymbols: "მხოლოდ ქართული სიმბოლოები",
};

function NameInput({ register, watch }) {
  const authorValue = watch("author") ?? "";

  return (
    <>
      <div className='input__container'>
        <label htmlFor='author' className='input__title'>
          ავტორი *
        </label>
        <input
          className={`input ${wordsValidateForBorder(authorValue)}`}
          type='text'
          id='author'
          placeholder='შეიყვანეთ სახელი'
          {...register("author", {
            required: true,
            minLength: MIN_TITLE_LENGTH,
            pattern: /^[ა-ჰ ]+$/,
            validate: customWordCountValidation,
          })}
        />

        <ul className='author-ul input-warnings'>
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
