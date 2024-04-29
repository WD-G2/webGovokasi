import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";
import Hero from "./layouts/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ServiceCard from "./layouts/ServiceCard.jsx";
import BlogCard from "./components/BlogCard.jsx";
import { useState, useEffect } from "react";
import BlogSection from "./layouts/BlogSection.jsx";

import CertificateSection from "./layouts/CertificationSection.jsx";
import DeptCard from "./components/DeptCard.jsx";
import DeptSection from "./layouts/DeptSection.jsx";
import ValuesSection from "./layouts/ValuesSection.jsx";

function App() {
  useEffect(() => {
    document.title = "Pelatihan dan Magang Gratis | GOVOKASi";
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <ServiceCard />
      <ValuesSection />
      <DeptSection />
      <CertificateSection />
      <BlogSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
