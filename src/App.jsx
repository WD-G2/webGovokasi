import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";
import Hero from "./layouts/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ServiceCard from "./layouts/ServiceCard.jsx";
import BlogCard from "./layouts/BlogCard.jsx";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = 'Pelatihan dan Magang Gratis | GOVOKASi';
  }, []);
  const [service, setService] = useState('Talent')

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <div className="flex flex-col h-auto justify-center items-center">
        {service === 'Talent' ? <ServiceCard service={'Talent'}/> : <ServiceCard service={'Partner'}/>}
      </div>
      <BlogCard />
      <Footer />
    </BrowserRouter>
  );

}

export default App;
