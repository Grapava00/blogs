import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
import errorIcon from "../assets/error-icon.svg";
import successIcon from "../assets/success-icon.svg";
import closeIcon from "../assets/close.svg";
import logoRedberry from "../assets/logo.png";
import arrow from "../assets/Arrow.svg";
import "./create.css";

function Create() {
  const [showModal, setShowModal] = useState(false);
  const { register, control, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      author: "",
      title: "",
      textarea: "",
      date: "",
      email: "",
    },
  });
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  const authorValue = watch("author") ?? "";
  const titleValue = watch("title") ?? "";
  const textAreaValue = watch("textarea") ?? "";

  const wordsValidate = () => {
    if (authorValue.split(" ").length >= 2) {
      return "correct-text";
    } else if (authorValue.split(" ").length < 2 && authorValue !== "") {
      return "error-text";
    } else {
      return "";
    }
  };

  const wordsValidateForBorder = () => {
    if (authorValue.split(" ").length >= 2) {
      return "correct-border";
    } else if (authorValue.split(" ").length < 2 && authorValue !== "") {
      return "error-border";
    } else {
      return "";
    }
  };

  const authorSymbolsValidate = () => {
    if (authorValue.length >= 4) {
      return "correct-text";
    } else if (authorValue.length < 4 && authorValue !== "") {
      return "error-text";
    } else {
      return "";
    }
  };

  const titleSymbolsValidate = () => {
    if (titleValue.length >= 4) {
      return "correct-text";
    } else if (titleValue.length < 4 && titleValue !== "") {
      return "error-text";
    } else {
      return "";
    }
  };

  const titleSymbolsValidateForBorder = () => {
    if (titleValue.length >= 4) {
      return "correct-border";
    } else if (titleValue.length < 4 && titleValue !== "") {
      return "error-border";
    } else {
      return "";
    }
  };

  const textAreaSymbolsValidate = () => {
    if (textAreaValue.length >= 2) {
      return "correct-text";
    } else if (textAreaValue.length < 2 && textAreaValue !== "") {
      return "error-text";
    } else {
      return "";
    }
  };

  const textAreaSymbolsValidateForBorder = () => {
    if (textAreaValue.length >= 2) {
      return "correct-border";
    } else if (textAreaValue.length < 2 && textAreaValue !== "") {
      return "error-border";
    } else {
      return "";
    }
  };

  const patternValidate = () => {
    if (authorValue === "") {
      return "";
    } else if (/^[ა-ჰ ]+$/.test(authorValue)) {
      return "correct-text";
    } else {
      return "error-text";
    }
  };

  const customWordCountValidation = (value) => {
    const words = value.split(" ").filter((word) => word.trim() !== ""); // Split by spaces and remove empty strings
    return words.length >= 2;
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const onClose = () => {
    setShowModal(false);
  };

  const moveHomePage = () => {
    setShowModal(false);
  };
  return (
    <div className='create-blog-container'>
      <header className='center-redberry'>
        <Link to='/'>
          <img src={logoRedberry} alt='redberry logo' className='logo' />
        </Link>
      </header>
      <Link to='/'>
        <img src={arrow} alt='go back arrow' className='go-back-arrow' />
      </Link>
      <form
        className='create-blog-form-container'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className='create-blog-form--title'>ბლოგის დამატება</h2>
        {/* enter author name */}
        <div className='create-blog-form--inputs-container'>
          <div className='create-blog-form--wrap-inputs'>
            <div className='create-blog-form--input-container'>
              <label htmlFor='author' className='create-blog-form--input-title'>
                ავტორი *
              </label>
              <input
                className={`create-blog-form--input ${wordsValidateForBorder()}`}
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
              {/* validation warning */}
              <ul className='create-blog-form--author-warnings create-blog-form--inputs-warning'>
                <li className={authorSymbolsValidate()}>მინიმუმ 4 სიმბოლო</li>
                <li className={wordsValidate()}>მინიმუმ ორი სიტყვა</li>
                <li className={patternValidate()}>მხოლოდ ქართული სიმბოლოები</li>
              </ul>
            </div>

            {/* enter blog title */}
            <div className='create-blog-form--input-container'>
              <label htmlFor='title' className='create-blog-form--input-title'>
                სათაური *
              </label>
              <input
                className={`create-blog-form--input ${titleSymbolsValidateForBorder()}`}
                type='text'
                id='title'
                placeholder='შეიყვანეთ სათაური'
                {...register("title", {
                  required: true,
                  minLength: 4,
                })}
              />
              {/* validation warning */}
              <p className='create-blog-form--inputs-warning'>
                <span className={titleSymbolsValidate()}>
                  მინიმუმ 4 სიმბოლო
                </span>
              </p>
            </div>
          </div>
          {/* enter blog content */}
          <div className='create-blog-form--input-container'>
            <label htmlFor='textarea' className='create-blog-form--input-title'>
              აღწერა *
            </label>
            <textarea
              className={textAreaSymbolsValidateForBorder()}
              type='textarea'
              id='textarea'
              placeholder='შეიყვნეთ აღწერა'
              rows='5'
              cols='33'
              {...register("textarea", { required: true, minLength: 2 })}
            ></textarea>
            {/* validation warning */}
            <p className='create-blog-form--inputs-warning'>
              <span className={textAreaSymbolsValidate()}>
                მინიმუმ 2 სიმბოლო
              </span>
            </p>
          </div>

          {/* enter blog creation date */}
          <div className='create-blog-form--input-container'>
            <label htmlFor='date' className='create-blog-form--input-title'>
              გამოქვეყნების თარიღი *
            </label>
            <input
              className='create-blog-form--input '
              type='date'
              id='date'
              {...register("date", { valueAsDate: true, required: true })}
            />
          </div>

          {/* enter your email */}
          <div className='create-blog-form--input-container'>
            <label htmlFor='email' className='create-blog-form--input-title'>
              ელ-ფოსტა *
            </label>
            <input
              className='create-blog-form--input '
              id='email'
              placeholder='Example@redberry.ge'
              {...register("email", {
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/i,
                  message: "ელ-ფოსტა არ მოიძებნა",
                },
              })}
            />
            {/* validation warning */}
            <p
              className='error-text'
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              {errors.email && <img src={errorIcon} alt='error-icon' />}
              {errors.email?.message}
            </p>
          </div>
          {!isDirty || !isValid ? (
            <button
              className='create-blog-form--submit-button create-blog-form--submit-button-disabled '
              disabled={!isDirty || !isValid}
            >
              გამოქვეყნება
            </button>
          ) : (
            <button className='create-blog-form--submit-button'>
              გამოქვეყნება
            </button>
          )}
          {isSubmitSuccessful
            ? createPortal(
                <div className='create-form-blog--modal-background'>
                  <div className='create-form-blog--success-modal'>
                    <img
                      onClick={onClose}
                      className='create-form-blog--modal-close-icon'
                      src={closeIcon}
                      alt='close-icon'
                    />
                    <img src={successIcon} alt='Success Icon' />
                    <p className='create-form-blog--modal-success-text'>
                      ჩანაწი წარმატებით დაემატა
                    </p>
                    <Link
                      to='/'
                      className='create-form-blog--modal-button'
                      onClick={moveHomePage}
                    >
                      მთავარ გვერდზე დაბრუნება
                    </Link>
                  </div>
                </div>,
                document.body
              )
            : ""}
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
}

export default Create;
