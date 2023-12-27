import React from "react";
import Header from "../components/Header";
import arrow from "../assets/Arrow.svg";
import arrowGray from "../assets/Arrow-gray.svg";
import arrowBlue from "../assets/Arrow-blue.svg";
import blogCover from "../assets/blog-cover.png";
import showFullBlogIcon from "../assets/show-full-blog.svg";
import "./blog.css";

function Blog() {
  return (
    <>
      <Header content={"შესვლა"} />
      <img src={arrow} alt='go back arrow' className='go-back-arrow' />
      <div className='blogs-container'>
        <article className='blog-container-main'>
          <img
            src={blogCover}
            alt='Blog Cover'
            className='blog-cover blog-cover-large'
          />
          <div className='grid-container'>
            <h3>ნია გოგსაძე</h3>
            <time dateTime='2023-11-02'>
              02.11.2023 • lile.kvaratskhelia@redberry.ge
            </time>
            <h2 className='h2-large'>
              EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
            </h2>
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
            <p className='content'>
              6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
              სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
              მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
              ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
              ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა
              თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
              გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
              სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
              შეაჯიბრონ ერთმანეთს. აქვე საგულისხმოა, რომ როგორც ბერნის
              მეცნიერები განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის
              გაუმჯობესებული წარმოება, არამედ კულტურული საკითხები დაედო. მათი
              თქმით, ადამიანებს უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ
              ორის კავშირის დანახვა.
            </p>
            <p>
              6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
              სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
              მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
              ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
              ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა
              თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
              გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
              სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
              შეაჯიბრონ ერთმანეთს.
            </p>
          </div>
        </article>
      </div>
      <div className='related-sarticles'>
        <div className='related-articles-top'>
          <p>მსგავსი სტატიები</p>
          <div>
            <img
              src={arrowGray}
              alt='move another article arrow'
              className='margin-right-24'
            />
            <img src={arrowBlue} alt='move another article arrow' />
          </div>
        </div>
        <div className='related-articles-list'>
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
      </div>
    </>
  );
}

export default Blog;
