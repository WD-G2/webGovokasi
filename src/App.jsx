import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";
import Hero from "./layouts/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ServiceCard from "./layouts/ServiceCard.jsx";
import { useState } from "react";

function App() {
  const [service, setService] = useState('Talent')

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      {/* Disini tambah button untuk ganti service */}
      <div className="flex flex-col h-auto justify-center items-center">
        {service === 'Talent' ? <ServiceCard service={'Talent'}/> : <ServiceCard service={'Partner'}/>}
      </div>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
