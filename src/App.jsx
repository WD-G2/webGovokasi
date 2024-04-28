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
    document.title = "Pelatihan dan Magang Gratis | GOVOKASi";
  }, []);
  const [service, setService] = useState("Talent");

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      {/* Disini tambah button untuk ganti service */}
      <div
        id="services"
        className="flex flex-col h-auto justify-center items-center"
      >
        {service === "Talent" ? (
          <ServiceCard service={"Talent"} />
        ) : (
          <ServiceCard service={"Partner"} />
        )}
      </div>
      <div id="blogs" className="relative pt-2 lg:pt-2 min-h-screen">
        <div
          className="bg-cover w-full flex justify-center items-center"
          style={{ "background-image": "url('/images/mybackground.jpeg')" }}
        >
          <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <BlogCard key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
