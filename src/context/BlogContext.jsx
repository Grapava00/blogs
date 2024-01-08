import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const token =
  "06ddeb4ccd918497b40250d8886bd91d5f6cb174053a32a69f7a7ea2036a17eb";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const storedSingleBlogData =
    JSON.parse(localStorage.getItem("singleBlogData")) || [];
  const [singleBlog, setSingleBlogData] = useState(storedSingleBlogData);
  const storedAllBlogData =
    JSON.parse(localStorage.getItem("allBlogData")) || [];
  const [allBlogData, setAllBlogData] = useState(storedAllBlogData);
  console.log(allBlogData);

  const getBlogById = async (id) => {
    try {
      const response = await axios.get(
        `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSingleBlogData(response.data);
      localStorage.setItem("singleBlogData", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const fetchAllBlogData = async () => {
    try {
      const allBlogDataResponse = await axios.get(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAllBlogData(allBlogDataResponse.data);

      localStorage.setItem(
        "allBlogData",
        JSON.stringify(allBlogDataResponse.data)
      );
    } catch (error) {
      console.error("Failed to fetch all blog data:", error);
    }
  };

  async function uploadBlog(formData) {
    const uploadUrl = "https://api.blog.redberryinternship.ge/api/blogs";

    await axios.post(uploadUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    await fetchAllBlogData();
  }

  return (
    <BlogContext.Provider
      value={{ uploadBlog, allBlogData, getBlogById, singleBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
