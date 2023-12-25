import React, { useState } from "react";
import logoRedberry from "../assets/logo.png";
import arrow from "../assets/Arrow.svg";
import fileIcon from "../assets/file-icon.svg";
import "./addblogpage.css";

function AddBlogPage() {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Submitted");
  };

  return (
    <div>
      <header className='center-redberry'>
        <img src={logoRedberry} alt='redberry logo' className='logo' />
      </header>
      <img src={arrow} alt='go back arrow' className='go-back-arrow' />
      <form onSubmit={handleSubmit} className='blog-form'>
        <h2 className='title'>ბლოგის დამატება</h2>
        <div className='main-form-content'>
          <div className='file-upload-container'>
            <h3 className='file-upload-heading'>ატვირთეთ ფოტო</h3>
            <label htmlFor='image' className='file-upload'>
              <img src={fileIcon} />
              <p className='file-upload-text'>
                ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
              </p>
              <input type='file' id='image' onChange={handleChange}></input>
            </label>
          </div>
          <div className='blog-title-author-container'>
            <div className='blog-author-container'>
              <p>ავტორი *</p>
              <input placeholder='შეიყვანეთ სახელი' />
              <ul className='requirements-list'>
                <li>მინიმუმ 4 სიმბოლო</li>
                <li>მინიმუმ ორი სიტყვა</li>
                <li>მხოლოდ ქართული სიმბოლოები</li>
              </ul>
            </div>
            <div className='blog-title-container'>
              <p className='blog-title'>სათური *</p>
              <input placeholder='შეიყვანეთ სათაური' />
              <p className='blog-title-requirement'>მინიმუმ 4 სიმბოლო</p>
            </div>
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
            <button className='publish'>გამოქვეყნება</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBlogPage;
