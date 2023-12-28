import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import Input from "./components/Input";
import { UseAppData } from "./context/ContextProvider";
const App = () => {
  const { authenticated } = UseAppData();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {authenticated ? (
        <Route path='/create-blog' element={<Create />} />
      ) : (
        "You "
      )}
      <Route path='/blog' element={<Blog />} />
      <Route path='/input' element={<Input />} />
    </Routes>
  );
};

export default App;
