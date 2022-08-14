import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import CurrencyCompare from "./screens/CurrencyCompare";
import CurrencyList from "./screens/CurrencyList";
import CurrencyDetail from "./screens/CurrencyDetail";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/compare" element={<CurrencyCompare/>} />
          <Route path="/detail/:name" element={<CurrencyDetail/>} />
          <Route path="/list" element={<CurrencyList/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
