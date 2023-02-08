import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import { GlobalStyle } from "./styles/global/GlobalStyle";
// Components
import Home from "./components/Home";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId" element={<Movie />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
