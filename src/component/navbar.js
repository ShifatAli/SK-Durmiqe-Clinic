import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/sk-logo.jpg";

const Navbar = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (event, path, ref) => {
        event.preventDefault();
        if (ref) {
            scrollToSection(ref);
        } else {
            navigate(path);
        }
        setIsMenuOpen(false); // Close menu after navigation
    };

    return (
        <nav className="navbar">
            {/* logo-section */}
            <div className="logo-section">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <span className="spanDermique ">Durmiqe Clinic</span>
                </Link>
                <span className="logo-tag">Skin Hair & Laser</span>
            </div>

            {/* menu-section */}
            <div className={`menu-section ${isMenuOpen ? "open" : ""}`}>
                <a href="/" className="menu-item" onClick={(event) => handleNavigation(event, "/", null)}>Home</a>
                <a href="/" className="menu-item" onClick={(event) => handleNavigation(event, "/", refs.aboutRef)}>About</a>
                <a href="/services" className="menu-item" onClick={(event) => handleNavigation(event, "/services", null)}>Services</a>
                <a href="/" className="menu-item" onClick={(event) => handleNavigation(event, "/", refs.contactRef)}>Contact</a>
                <a href="/" className="menu-item" onClick={(event) => handleNavigation(event, "/", refs.blogRef)}>Blog</a>
            </div>

            {/* appointment-section */}
            <div className="appointment-section">
                <Link to="/appointment" className="appointment-button">Appointment</Link>
            </div>

            {/* hamburger menu icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
