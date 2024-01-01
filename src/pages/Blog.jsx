import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import arrow from "../assets/Arrow.svg";
import arrowGray from "../assets/Arrow-gray.svg";
import arrowBlue from "../assets/Arrow-blue.svg";
import showFullBlogIcon from "../assets/show-full-blog.svg";
import { Link } from "react-router-dom";
import { UseAppData } from "../context/ContextProvider";
import "./blog.css";

function Blog() {
  const [filteredData, setFilteredData] = useState([]) || "";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goNextArrow, setGoNextArrow] = useState(true);
  const [goPrevArrow, setGoPrevArrow] = useState(false);

 
  const { blog, fetchedData, openBlog } = UseAppData();

  const passId = async (id) => {
    await openBlog(id);
  };

  useEffect(() => {
    if (fetchedData) {
      const filteredBlogs = fetchedData.data.filter((data) => {
        return data.categories.some((category) =>
          blog.categories.some(
            (blogCategory) => blogCategory.title === category.title
          )
        );
      });
      setFilteredData(filteredBlogs);
    }
  }, [blog]);

  function goNext() {
    setCurrentIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex >= filteredData.length - newIndex) {
        newIndex = oldIndex;
        setGoNextArrow(false);
        setGoPrevArrow(true);
      } else {
        setGoNextArrow(true);
        setGoPrevArrow(true);
      }
      return newIndex;
    });
  }

  function goPrev() {
    setCurrentIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = oldIndex;
        setGoPrevArrow(false);
        setGoNextArrow(true);
      } else {
        setGoPrevArrow(true);
        setGoNextArrow(true);
      }
      return newIndex;
    });
  }

  return (
    <>
      <Header content={"შესვლა"} />
      <Link to='/'>
        <img src={arrow} alt='go back arrow' className='go-back-arrow' />
      </Link>
      <div className='blogs-container'>
        <article className='blog-container-main'>
          <img
            src={blog.image}
            alt='Blog Cover'
            className='blog-cover blog-cover-large'
          />
          <div className='grid-container'>
            <h3>{blog.author}</h3>
            <time dateTime={blog.publish_date}>
              {blog.publish_date} {`• ${blog.email}`}
            </time>
            <h2 className='h2-large'>{blog.title}</h2>
            <ul className='flex-container'>
              {blog.categories &&
                blog.categories.map((category) => (
                  <li
                    className='category'
                    style={{
                      color: category.text_color,
                      background: category.background_color,
                    }}
                    key={category.title}
                  >
                    {category.title}
                  </li>
                ))}
            </ul>
            <p className='content'>{blog.description}</p>
          </div>
        </article>
      </div>
      <div className='related-sarticles'>
        <div className='related-articles-top'>
          <p>მსგავსი სტატიები</p>
          <div>
            <svg
              onClick={goPrev}
              style={{ marginRight: "24px", cursor: "pointer" }}
              xmlns='http://www.w3.org/2000/svg'
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
            >
              <rect
                width='44'
                height='44'
                rx='22'
                fill={goPrevArrow ? " #5D37F3" : "#E4E3EB"}
              />
              <path
                d='M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z'
                fill='#F3F2FA'
              />
            </svg>

            <svg
              onClick={goNext}
              style={{ cursor: "pointer" }}
              xmlns='http://www.w3.org/2000/svg'
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
            >
              <rect
                x='44'
                y='44'
                width='44'
                height='44'
                rx='22'
                transform='rotate(180 44 44)'
                fill={goNextArrow ? " #5D37F3" : "#E4E3EB"}
              />
              <path
                d='M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <div className='related-articles-list'>
          {filteredData.slice(currentIndex, currentIndex + 3).map((data) => {
            return (
              <article className='blog' key={data.id}>
                <img src={data.image} alt='Blog Cover' className='blog-cover' />
                <div className='grid-container'>
                  <h3>{data.author}</h3>
                  <time dateTime={data.publish_date}>{data.publish_date}</time>
                  <h2>{data.title}</h2>
                  <ul className='flex-container'>
                    {data.categories.map((category) => (
                      <li
                        className='category'
                        style={{
                          color: category.text_color,
                          background: category.background_color,
                        }}
                        key={category.title}
                      >
                        {category.title}
                      </li>
                    ))}
                  </ul>
                  <p className='description'>{data.description}</p>
                  <Link to='/blog' onClick={() => passId(data.id)}>
                    სრულად ნახვა
                    <img src={showFullBlogIcon} alt='show full blog icon' />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blog;
