import React, { useState } from "react";
import cover from ".././assets/cover.png";
import blogCover from ".././assets/blog-cover.png";
import showFullBlogIcon from ".././assets/show-full-blog.svg";
import Header from "../components/Header";
import "./homepage.css";

function HomePage() {
  return (
    <>
      <Header content={"შესვლა"} />
      <main className='container'>
        <div className='cover'>
          <h1>ბლოგი</h1>
          <img src={cover} alt='cover' />
        </div>
        <ul className='categories'>
          <li className='category ' data-item-type='accent-1'>
            მარკეტი
          </li>
          <li className='category' data-item-type='accent-2'>
            აპლიკაცია
          </li>
          <li className='category' data-item-type='accent-3'>
            ხელოვნური ინტელექტი
          </li>
          <li className='category' data-item-type='accent-4'>
            UI/UX
          </li>
          <li className='category' data-item-type='accent-5'>
            კვლევა
          </li>
          <li className='category' data-item-type='accent-6'>
            Figma
          </li>
        </ul>
        <div className='blogs-list'>
          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>

          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>

          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>

          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>

          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>

          <article className='blog'>
            <img src={blogCover} alt='Blog Cover' className='blog-cover' />
            <div className='grid-container'>
              <h3>ნია გოგსაძე</h3>
              <time dateTime='2023-11-02'>02.11.2023</time>
              <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
              <ul className='flex-container'>
                <li className='category' data-item-type='accent-1'>
                  მარკეტი
                </li>
                <li className='category' data-item-type='accent-2'>
                  აპლიკაცია
                </li>
                <li className='category' data-item-type='accent-3'>
                  ხელოვნური ინტელექტი
                </li>
              </ul>
              <p className='description'>
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი...
              </p>
              <a href='full-article.html'>
                სრულად ნახვა
                <img src={showFullBlogIcon} alt='show full blog icon' />
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default HomePage;
