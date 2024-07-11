import React from 'react';
import './Footer.css';
import logo from '../assets/sk-logo.jpg'; // Adjust the path to your logo file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src={logo} alt="Dermique Logo" className="footer-logo" />
                    <h3>Durmiqe Clinic</h3>
                    <p>123 Skin Care Ave,</p>
                    <p>Dermatology City, DC 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@dermique.com</p>
                </div>
                <div className="footer-section">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>More Info</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>More Info</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>More Info</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Subscribe</h3>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter your email" />
                        <button>Go</button>
                    </div>
                    <div className="social-media">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
