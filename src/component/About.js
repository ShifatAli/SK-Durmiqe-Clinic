import React from "react";
import "./About.css";
import aboutImage from "../assets/About-pic.png";

function About() {
    return (
        <div className="about-page">
            <h2>About Us</h2>
            <div className="about-content">
                <div className="image-section">
                    <img src={aboutImage} alt="About Us" className="about-image" />
                </div>
                <div className="text-section">
                    <h3>Welcome to SK Durmiqe Clinic</h3>
                    <p>
                    At SK Durmiqe Clinic, our mission is to offer the finest treatment options using 
the latest technologies. We believe in a holistic approach to skincare and 
haircare, ensuring comprehensive care for both aesthetic and health needs. Located in the heart of Greater Faridabad, SK Dermiqe Clinic is the premier 
destination for advanced skin and hair treatments. Our clinic is easily 
accessible, ensuring convenient access to top-tier dermatological care. We 
specialize in cutting-edge laser treatments, cosmetic enhancements, and anti
aging solutions tailored to each patient. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
