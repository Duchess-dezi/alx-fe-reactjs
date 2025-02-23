import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <BrowserRouter>
        <Navbar /> {/* Include the Navbar component */}
        {/* <Home />
        <Services />
        <About />
        <Contact /> */}
        <Routes>
          <Route path="./Home" element={<Home />} /> {/* Home page */}
          <Route path="./About" element={<About />} /> {/* About page */}
          <Route path="./Services" element={<Services />} /> {/* Services page */}
          <Route path="./Contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;