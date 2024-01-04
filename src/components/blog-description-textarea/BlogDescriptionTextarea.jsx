import React from "react";
import PropTypes from "prop-types";
import {
  textAreaSymbolsValidateForBorder,
  textAreaSymbolsValidate,
} from "../../utils/validations";
import "./BlogDescriptionTextareaStyles.css";

const ROWS = 5;
const COLS = 33;
const MIN_LENGTH = 2;

function BlogDescriptionTextarea({ register, watch }) {
  const textAreaValue = watch("description") ?? "";

  return (
    <>
      <div className='blog-description-textarea__input-container'>
        <label
          htmlFor='textarea'
          className='blog-description-textarea__input-title'
        >
          აღწერა *
        </label>
        <textarea
          className={textAreaSymbolsValidateForBorder(textAreaValue)}
          type='textarea'
          id='textarea'
          placeholder='შეიყვნეთ აღწერა'
          rows={ROWS}
          cols={COLS}
          {...register("description", {
            required: true,
            minLength: MIN_LENGTH,
          })}
        ></textarea>
        {/* validation warning */}
        <p className='blog-description-textarea__inputs-warning'>
          <span className={textAreaSymbolsValidate(textAreaValue)}>
            მინიმუმ {MIN_LENGTH} სიმბოლო
          </span>
        </p>
      </div>
    </>
  );
}

BlogDescriptionTextarea.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};

export default BlogDescriptionTextarea;
