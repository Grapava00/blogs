import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppDataContext = createContext();
export const UseAppData = () => useContext(AppDataContext) || "";

export function ContextProvider({ children }) {
  const initialAuthenticated =
    JSON.parse(localStorage.getItem("authenticated")) || false;
  const categoriesList = JSON.parse(localStorage.getItem("categories")) || null;
  const [authenticated, setAuthenticated] =
    useState(initialAuthenticated) || null;
  const [categories, setCategories] = useState(categoriesList);
  const initialFetchedData =
    JSON.parse(localStorage.getItem("fetchedData")) || "";
  const [fetchedData, setFetchData] = useState(initialFetchedData);
  const initialBlog = JSON.parse(localStorage.getItem("blog")) || "";
  const [blog, setBlog] = useState(initialBlog);

  const token =
    "cb90f018dbc5cf4f85e3209a37d2f9df1a2cfb530cc5c15f9bfae50300ca5550";

  async function sendFileToServer(formData) {
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:${value}`);
      console.log(typeof value);
    }
    const uploadUrl = "https://api.blog.redberryinternship.ge/api/blogs";

    const uploadResponse = await axios.post(uploadUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    await fetchBlogs();
  }

  const fetchBlogs = async () => {
    try {
      const fetchDataResponse = await axios.get(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFetchData(fetchDataResponse.data);

      localStorage.setItem(
        "fetchedData",
        JSON.stringify(fetchDataResponse.data)
      );
      // console.log("Fetched data:", fetchDataResponse.data);
    } catch (error) {
      // Handle error
      console.error("Failed to fetch data:", error);
    }
  };

  const openBlog = async (id) => {
    try {
      const response = await axios.get(
        `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlog(response.data);
      localStorage.setItem("blog", JSON.stringify(response.data));
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
        setAuthenticated(true);
        localStorage.setItem("authenticated", JSON.stringify(true));
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
        localStorage.setItem("categories", JSON.stringify(response.data.data));
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
        authenticated,
        getCategories,
        categories,
        sendFileToServer,
        fetchedData,
        openBlog,
        blog,
        fetchBlogs,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export default ContextProvider;
