import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AppDataContext = createContext();
export const UseAppData = () => useContext(AppDataContext) || "";

export function ContextProvider({ children }) {
  const storedIsAuthenticated =
    JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);
  const storedCategoriesData =
    JSON.parse(localStorage.getItem("categoriesDataList")) || "";
  const [categoriesData, setCategoriesData] = useState(storedCategoriesData);
  const storedAllBlogData =
    JSON.parse(localStorage.getItem("allBlogData")) || "";
  const [allBlogData, setAllBlogData] = useState(storedAllBlogData);
  const storedSingleBlogData =
    JSON.parse(localStorage.getItem("singleBlogData")) || "";
  const [singleBlog, setSingleBlogData] = useState(storedSingleBlogData);

  const token =
    "cb90f018dbc5cf4f85e3209a37d2f9df1a2cfb530cc5c15f9bfae50300ca5550";

  async function sendFileToServer(formData) {
    const uploadUrl = "https://api.blog.redberryinternship.ge/api/blogs";

    await axios.post(uploadUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    await fetchAllBlogData();
  }

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
      // Handle error
      console.error("Failed to fetch all blog data:", error);
    }
  };

  const fetchSingleBlogData = async (id) => {
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

  const login = async (email) => {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.blog.redberryinternship.ge/api/categories",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem(
          "categoriesDataList",
          JSON.stringify(response.data.data)
        );
      }
    } catch (error) {
      // Handle error
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        login,
        isAuthenticated,
        getCategories,
        categoriesData,
        sendFileToServer,
        allBlogData,
        fetchSingleBlogData,
        singleBlog,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
