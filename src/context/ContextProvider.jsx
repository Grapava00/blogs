import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AppDataContext = createContext();
export const UseAppData = () => useContext(AppDataContext);

export function ContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
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
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <AppDataContext.Provider value={{ login, authenticated }}>
      {children}
    </AppDataContext.Provider>
  );
}

export default ContextProvider;
