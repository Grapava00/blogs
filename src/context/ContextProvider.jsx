import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppDataContext = createContext();
export const UseAppData = () => useContext(AppDataContext);

export function ContextProvider({ children }) {
  const initialAuthenticated =
    JSON.parse(localStorage.getItem("authenticated")) || false;
  const categoriesList = JSON.parse(localStorage.getItem("categories")) || null;
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [categories, setCategories] = useState(categoriesList);
  const [allFormData, setAllFormData] = useState(null);
  const formData = new FormData();

  formData.append("date", allFormData?.date);
  formData.append("multiSelect", allFormData?.multiSelect);
  formData.append("email", allFormData?.email);
  formData.append("textArea", allFormData?.textArea);
  formData.append("author", allFormData?.author);
  formData.append("title", allFormData?.title);
  formData.append("file", allFormData?.file);

  const token =
    "d843f82fa4b7c67fcafa5d878f862da170d9d93c1d09e6b8a8f6183a44b56289";

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

  const getAllFormData = (data) => {
    setAllFormData(data);
  };

  const createBlog = async () => {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success
      console.log("Blog created:", response.data);
    } catch (error) {
      // Handle error
      console.error("Failed to create blog:", error);
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
        getAllFormData,
        categories,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export default ContextProvider;
