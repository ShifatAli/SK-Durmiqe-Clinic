import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Doctor from "./component/Doctor";
import Blog from "./component/Blog";
import Review from "./component/Review";
import ServicePage from "./component/ServicePage";
import AppointmentPage from "./component/AppointmentPage";
import Footer from "./component/Footer";

function MainPage() {
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, blogRef, contactRef }} />
      <Home />
      <div ref={aboutRef}>
        <About />
      </div>
      <Services />
      <Doctor />
      <div ref={blogRef}>
        <Blog />
      </div>
      <Review />
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<><Navbar /><ServicePage /><Footer /></>} />
          <Route path="/appointment" element={<><Navbar /><AppointmentPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
