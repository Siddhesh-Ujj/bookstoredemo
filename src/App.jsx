import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, BookList } from "./components";
import { GlobalStyle } from "./styles";
import "./App.css";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/books/:category" element={<BookList />} />
      </Routes>
    </Router>
  );
};

export default App;
