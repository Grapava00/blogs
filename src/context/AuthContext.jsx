import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const token =
  "06ddeb4ccd918497b40250d8886bd91d5f6cb174053a32a69f7a7ea2036a17eb";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedIsAuthenticated =
    JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);

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
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
