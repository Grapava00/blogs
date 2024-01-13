import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import Header from "../components/header/Header";
import GoBack from "../components/go-back/GoBack";
import BlogCard from "../components/blog-card/BlogCard";
import RelatedArticles from "../components/related-articles/RelatedArticles";
import arrow from "../assets/Arrow.svg";
import showFullBlogIcon from "../assets/show-full-blog.svg";

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
      <div className='centered'>
        <BlogCard
          showFullDescription={true}
          isLinkVisible={false}
          blog={singleBlog}
          size='32px'
          width='720px'
        />
      </div>
      <RelatedArticles
        goNext={goNext}
        goPrev={goPrev}
        goNextArrow={goNextArrow}
        goPrevArrow={goPrevArrow}
        articles={filteredData}
        passId={passId}
        showFullBlogIcon={showFullBlogIcon}
        currentIndex={currentIndex}
      />
    </>
  );
}

export default Blog;
