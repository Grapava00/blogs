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
      <div className='textarea-container'>
        <label htmlFor='textarea' className='input__title'>
          აღწერა *
        </label>
        <textarea
          className={`input  ${textAreaSymbolsValidateForBorder(
            textAreaValue
          )}`}
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

        <p className='input-warnings'>
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
