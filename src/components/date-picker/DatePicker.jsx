import React from "react";
import PropTypes from "prop-types";
import "./DatePickerStyles.css";

function DatePicker({ register }) {
  return (
    <>
      <div className='input__container'>
        <label htmlFor='date' className='input__title'>
          გამოქვეყნების თარიღი *
        </label>
        <input
          className='input'
          type='date'
          id='date'
          {...register("publish_date", { required: true })}
        />
      </div>
    </>
  );
}

DatePicker.propTypes = {
  register: PropTypes.func.isRequired,
};

export default DatePicker;
