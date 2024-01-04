import React from "react";
import PropTypes from "prop-types";
import "./DatePickerStyles.css";

function DatePicker({ register }) {
  return (
    <>
      <div className='date-picker__input-container'>
        <label htmlFor='date' className='date-picker__input-title'>
          გამოქვეყნების თარიღი *
        </label>
        <input
          className='date-picker__input'
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
