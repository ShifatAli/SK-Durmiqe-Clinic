import React from 'react';
import './Home.css';
import chatIcon from '../assets/chat-logo.png';
import image1 from '../assets/Home-pic1.png';
import image2 from '../assets/Home-pic2.png';
import image3 from '../assets/Home-pic3.png';

function Home() {
    return (
        <div className="home">
            <div className="text-section">
                <div className="text-content">
                    <h3 className='text-h3'>We care for healthier skin and hair</h3>
                    <h1>Get the Best Skin & Hair <br /> Treatment</h1>
                    <p>
                        Revitalize Your Beauty, Naturally. Transform Your Skin, Elevate Your Hair. Unleash the Radiance Within You.
                    </p>
                    <div className="buttons-row">
                        <a href="/appointment" className="buttonss appointment-button">Book Appointment</a>
                        <a href="/chat" className="chat-button">
                            <img src={chatIcon} alt="Chat" className="chat-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src={image1} alt="image1" className="image zigzag" />
                <img src={image2} alt="image2" className="image zigzag" />
                <img src={image3} alt="image3" className="image zigzag" />
            </div>
        </div>
    );
}

export default Home;
