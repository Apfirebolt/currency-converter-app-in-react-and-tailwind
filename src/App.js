import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import CurrencyCompare from "./screens/CurrencyCompare";
import CurrencyList from "./screens/CurrencyList";
import CurrencyDetail from "./screens/CurrencyDetail";
import ContextDemo from "./screens/ContextDemo";
import MemoDemo from "./screens/MemoDemo";
import CallbackDemo from "./screens/CallbackDemo";
import TestPage from "./screens/TestPage";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/context" element={<ContextDemo/>} />
          <Route path="/compare" element={<CurrencyCompare/>} />
          <Route path="/detail/:name" element={<CurrencyDetail/>} />
          <Route path="/list" element={<CurrencyList/>} />
          <Route path="/memo" element={<MemoDemo/>} />
          <Route path="/callback" element={<CallbackDemo/>} />
          <Route path="/test" element={<TestPage/>} />
        </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;