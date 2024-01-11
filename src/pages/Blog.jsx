import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import arrow from "../assets/Arrow.svg";
import showFullBlogIcon from "../assets/show-full-blog.svg";
import { BlogContext } from "../context/BlogContext";
import GoBack from "../components/go-back/GoBack";
import BlogCard from "../components/blog-card/BlogCard";
import ArrowButton from "../components/arrow-button/ArrowButton";
import "./blog.css";

function Blog() {
  const [filteredData, setFilteredData] = useState([]) || "";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goNextArrow, setGoNextArrow] = useState(true);
  const [goPrevArrow, setGoPrevArrow] = useState(false);

  const { allBlogData, getBlogById, singleBlog } = useContext(BlogContext);

  const passId = async (id) => {
    await getBlogById(id);
  };

  useEffect(() => {
    if (allBlogData) {
      const filteredBlogs = allBlogData.data?.filter((data) => {
        return data.categories.some((category) =>
          singleBlog.categories.some(
            (blogCategory) => blogCategory.title === category.title
          )
        );
      });
      setFilteredData(filteredBlogs);
    }
  }, [singleBlog, allBlogData, setFilteredData]);

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
      <Header />
      <GoBack arrow={arrow} />
      <BlogCard isLinkVisible={false} blog={singleBlog} />
      <div className='related-sarticles'>
        <div className='related-articles-top'>
          <p>მსგავსი სტატიები</p>
          <div>
            <ArrowButton
              goNext={goNext}
              goPrev={goPrev}
              goNextArrow={goNextArrow}
              goPrevArrow={goPrevArrow}
            />
          </div>
        </div>
        <div className='related-articles-list'>
          {filteredData
            .slice(currentIndex, currentIndex + 3)
            .map((data, index) => {
              return (
                <BlogCard
                  key={data.id || index}
                  showFullBlogIcon={showFullBlogIcon}
                  passId={passId}
                  isLinkVisible={true}
                  blog={data}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Blog;
