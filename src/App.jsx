import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-blog' element={<Create />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};

export default App;
