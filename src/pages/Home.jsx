import { useEffect, useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { CategoryContext } from "../context/CategoryContext";

import BlogcoverImage from ".././assets/cover.png";
import showFullBlogIcon from ".././assets/show-full-blog.svg";

import Header from "../components/header/Header";
import Cover from "../components/cover/Cover";
import Categories from "../components/categories/Categories";
import BlogList from "../components/blog-list/BlogList";

function Home() {
  const [filteredBlogsData, setFilteredBlogsData] = useState([]) || "";
  const { allBlogData, getBlogById } = useContext(BlogContext);

  const { categoriesData } = useContext(CategoryContext);

  const passId = async (id) => {
    await getBlogById(id);
  };

  useEffect(() => {
    const filteredBlogs = allBlogData.data?.filter((data) => {
      return data.categories.some((category) =>
        categoriesData.some(
          (blogCategory) => blogCategory.title === category.title
        )
      );
    });

    setFilteredBlogsData(filteredBlogs);
  }, [allBlogData, categoriesData, setFilteredBlogsData]);

  const handleCategoryClick = (title) => {
    const filteredBlogs = allBlogData.data.filter((data) => {
      return data.categories.some((category) => category.title === title);
    });
    setFilteredBlogsData(filteredBlogs);
  };

  return (
    <>
      <Header />
      <main className='blogs-container'>
        <Cover title='ბლოგი' image={BlogcoverImage} />
        <Categories
          categoriesData={categoriesData}
          handleCategoryClick={handleCategoryClick}
        />
        <BlogList
          blogsData={filteredBlogsData}
          passId={passId}
          showFullBlogIcon={showFullBlogIcon}
        />
      </main>
    </>
  );
}

export default Home;
