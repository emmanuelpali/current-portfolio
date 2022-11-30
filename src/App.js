import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
