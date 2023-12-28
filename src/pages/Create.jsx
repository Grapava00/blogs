import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logoRedberry from "../assets/logo.png";
import arrow from "../assets/Arrow.svg";
import File from "../components/File";
import Input from "../components/Input";
import "./create.css";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data.file[0]);
  };

  const customWordCountValidation = (value) => {
    const words = value.split(" ").filter((word) => word.trim() !== ""); // Split by spaces and remove empty strings
    return words.length >= 2;
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
      <form onSubmit={handleSubmit(onSubmit)} className='blog-form'>
        <h2 className='title'>ბლოგის დამატება</h2>
        <div className='main-form-content'>
          <File />
          <div className='blog-title-author-container'>
            <Input
              pattern={/^[ა-ჰ]+$/}
              title='ავტორი *'
              name='author'
              customWordCountValidation={customWordCountValidation}
              minLength={4}
              placeholder='შეიყვანეთ სათაური'
            />
            <Input
              title='სათაური *'
              minLength={4}
              placeholder='შეიყვანეთ სახელი'
            />
          </div>
          <div>
            <label htmlFor='blog' className='textarea-title'>
              აღწერა *
            </label>
            <textarea
              placeholder='შეიყვნეთ აღწერა'
              id='blog'
              name='blog'
              rows='5'
              cols='33'
            ></textarea>
            <p className='blog-content-requirement'>მინიმუმ 2 სიმბოლო</p>
          </div>
          <div className='blog-title-author-container'>
            <div className='blog-author-container'>
              <p>გამოქვეყნების თარიღი *</p>
              <input type='date' />
            </div>
            <div className='blog-title-container'>
              <p className='blog-title'>კატეგორია *</p>
              <select className='categorySelect'>
                <option value='' disabled selected hidden>
                  აირჩიეთ კატეგორია
                </option>
                <option value='მარკეტინგი'>მარკეტინგი</option>
                <option value='ხელოვნური ინტელექტი'>ხელოვნური ინტელექტი</option>
              </select>
            </div>
          </div>
          <div className='blog-title-container'>
            <p className='blog-title'>ელ-ფოსტა *</p>
            <input placeholder='Example@redberry.ge' />
          </div>
          <div className='publish-container'>
            <input type='submit' className='publish' value='გამოქვეყნება' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
