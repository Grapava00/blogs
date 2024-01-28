import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CreateForm from "./pages/CreateForm";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {isAuthenticated ? (
        <Route path='/create-blog' element={<CreateForm />} />
      ) : (
        ""
      )}
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};

export default App;
