import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import arrow from "../assets/Arrow.svg";
import arrowGray from "../assets/Arrow-gray.svg";
import arrowBlue from "../assets/Arrow-blue.svg";
import blogCover from "../assets/blog-cover.png";
import showFullBlogIcon from "../assets/show-full-blog.svg";
import { Link } from "react-router-dom";
import { UseAppData } from "../context/ContextProvider";
import "./blog.css";

function Blog() {
  const [filteredData, setFilteredData] = useState([]) || "";

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
            <img
              src={arrowGray}
              alt='move another article arrow'
              className='margin-right-24'
            />
            <img src={arrowBlue} alt='move another article arrow' />
          </div>
        </div>
        <div className='related-articles-list'>
          {filteredData.map((data) => {
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
