import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import "./textarea.css";

function Textarea({ title, id, name, rows, cols, placeholder }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const inputValue = watch(`${name}`) ?? "";

  console.log(inputValue);

  const textValidate = () => {
    if (inputValue.length > 2 || inputValue.length === 2) {
      return "text-green";
    } else if (inputValue.length < 2 && inputValue !== "") {
      return "text-red";
    } else {
      return "";
    }
  };

  const borderValidate = () => {
    if (inputValue.length > 2 || inputValue.length === 2) {
      return "border-green";
    } else if (inputValue.length < 2 && inputValue !== "") {
      return "border-red";
    } else {
      return "";
    }
  };

  return (
    <div>
      <label htmlFor={id} className='textarea-title'>
        {title}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        rows={rows}
        cols={cols}
        {...register(`${name}`, { minLength: 2 })}
        className={borderValidate()}
      ></textarea>
      <p className={`blog-content-requirement ${textValidate()}`}>
        მინიმუმ 2 სიმბოლო
      </p>
    </div>
  );
}

Textarea.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;
