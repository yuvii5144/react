import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";

import Home from "./pages/Home";
import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customers";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;