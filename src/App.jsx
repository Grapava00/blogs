import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import FileInput from "./pages/File";

import { UseAppData } from "./context/ContextProvider";
const App = () => {
  const { authenticated } = UseAppData();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {authenticated ? <Route path='/create-blog' element={<Create />} /> : ""}
      <Route path='/blog' element={<Blog />} />
      <Route path='/file' element={<FileInput />} />
    </Routes>
  );
};

export default App;
