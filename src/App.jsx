import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AddBlogPage from "./pages/AddBlogPage";
// import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='addblog' element={<AddBlogPage />} />
      </Routes>
    </>
  );
};

export default App;
