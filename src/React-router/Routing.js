import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import MenuComponent from "../Components/MenuComponent";
import Contact from "../Components/Contact";
import About from "../Components/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="MenuComponent" element={<MenuComponent />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing