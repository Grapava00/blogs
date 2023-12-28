import React from "react";
import { useForm } from "react-hook-form";
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
  } = useForm();

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

export default Input;
