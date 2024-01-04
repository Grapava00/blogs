import React from "react";
import PropTypes from "prop-types";
import {
  titleSymbolsValidateForBorder,
  titleSymbolsValidate,
} from "../../utils/validations";
import "./BlogTitleInputStyles.css";

const MIN_TITLE_LENGTH = 4;

function BlogTitleInput({ register, watch }) {
  const titleValue = watch("title") ?? "";

  return (
    <>
      <div className='blog-title-input__container'>
        <label htmlFor='title' className='blog-title-input__label'>
          სათაური *
        </label>
        <input
          className={`blog-title-input__input ${titleSymbolsValidateForBorder(
            titleValue
          )}`}
          type='text'
          id='title'
          placeholder='შეიყვანეთ სათაური'
          {...register("title", {
            required: true,
            minLength: MIN_TITLE_LENGTH,
          })}
        />

        <p className='blog-title-input__warning'>
          <span className={titleSymbolsValidate(titleValue)}>
            მინიმუმ {MIN_TITLE_LENGTH} სიმბოლო
          </span>
        </p>
      </div>
    </>
  );
}

BlogTitleInput.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};

export default BlogTitleInput;
