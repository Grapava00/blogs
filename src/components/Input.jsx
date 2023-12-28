import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import "./input.css";

function Input({
  title,
  name,
  required,
  customWordCountValidation,
  minLength,
  pattern,
  placeholder,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const inputValue = watch(`${name}`);

  console.log(inputValue);

  return (
    <>
      <div className='input-container'>
        <p className='input-title'>{title}</p>

        <input
          {...register(`${name}`, {
            required: { required },
            validate: customWordCountValidation,
            minLength: { minLength },
            pattern: { pattern },
          })}
          placeholder={placeholder}
        />
        {pattern && customWordCountValidation ? (
          <ul className='requirements-list'>
            <li>მინიმუმ 4 სიმბოლო</li>
            <li>მინიმუმ ორი სიტყვა</li>
            <li>მხოლოდ ქართული სიმბოლოები</li>
          </ul>
        ) : (
          <ul className='requirements-list'>
            <li>მინიმუმ 4 სიმბოლო</li>
          </ul>
        )}
      </div>
    </>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  customWordCountValidation: PropTypes.func,
  minLength: PropTypes.number,
  pattern: PropTypes.instanceOf(RegExp),
  placeholder: PropTypes.string,
};

export default Input;
