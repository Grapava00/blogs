import React from "react";
import { Routes, Route } from "react-router-dom";
import { nav } from "./navigation";

const App = () => {
  return (
    <Routes>
      {nav.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.isPrivate ? route.element : null}
        />
      ))}
    </Routes>
  );
};

export default App;
