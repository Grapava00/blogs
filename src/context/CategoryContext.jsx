import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const token =
  "06ddeb4ccd918497b40250d8886bd91d5f6cb174053a32a69f7a7ea2036a17eb";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const storedCategoriesData =
    JSON.parse(localStorage.getItem("categoriesDataList")) || [];
  const [categoriesData, setCategoriesData] = useState(storedCategoriesData);

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
    <CategoryContext.Provider value={{ getCategories, categoriesData }}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
