import { useEffect, useState } from "react";
import cover from ".././assets/cover.png";
import showFullBlogIcon from ".././assets/show-full-blog.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { UseAppData } from "../context/ContextProvider";
import "./home.css";

function Home() {
  const [filteredData, setFilteredData] = useState([]) || "";
  const { fetchedData, openBlog, categories } = UseAppData();

  const passId = async (id) => {
    await openBlog(id);
  };

  useEffect(() => {
    const filteredBlogs = fetchedData.data.filter((data) => {
      return data.categories.some((category) =>
        categories.some((blogCategory) => blogCategory.title === category.title)
      );
    });
    setFilteredData(filteredBlogs);
  }, [fetchedData]);

  const filter = (title) => {
    const filteredBlogs = fetchedData.data.filter((data) => {
      return data.categories.some((category) => category.title === title);
    });
    setFilteredData(filteredBlogs);
  };

  return (
    <>
      <Header content={"შესვლა"} />
      <main className='container'>
        <div className='cover'>
          <h1>ბლოგი</h1>
          <img src={cover} alt='cover' />
        </div>
        <ul className='categories'>
          {categories.map((category) => (
            <li
              onClick={() => filter(category.title)}
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

        <div className='blogs-list'>
          {Array.isArray(filteredData) ? (
            <>
              {filteredData.map((data) => {
                return (
                  <article className='blog' key={data.id}>
                    <img
                      src={data.image}
                      alt='Blog Cover'
                      className='blog-cover'
                    />
                    <div className='grid-container'>
                      <h3>{data.author}</h3>
                      <time dateTime={data.publish_date}>
                        {data.publish_date}
                      </time>
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
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default Home;
