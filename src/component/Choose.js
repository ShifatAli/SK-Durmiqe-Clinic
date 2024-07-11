import React from 'react';
import './Choose.css';
import icon1 from '../assets/Choose-pic1.png';
import icon2 from '../assets/Choose-pic2.png';
import icon3 from '../assets/Choose-pic3.png';
import icon4 from '../assets/Choose-pic4.png';

function Choose() {
    return (
        <section className="why-choose-us">
            <h2 className='h2-class'>Why Choose Us</h2>
            <div className="cards">
                <div className="card">
                    <img src={icon1} alt="Icon 1" className="card-icon" />
                    <h3>Quality Service</h3>
                    <p>We provide top-notch services to our clients ensuring satisfaction and reliability.</p>
                </div>
                <div className="card">
                    <img src={icon2} alt="Icon 2" className="card-icon" />
                    <h3>Expert Team</h3>
                    <p>Our team consists of experienced professionals dedicated to your success.</p>
                </div>
                <div className="card">
                    <img src={icon3} alt="Icon 3" className="card-icon" />
                    <h3>24/7 Support</h3>
                    <p>We offer round-the-clock support to address all your concerns promptly.</p>
                </div>
                <div className="card">
                    <img src={icon4} alt="Icon 4" className="card-icon" />
                    <h3>Advanced Technology</h3>
                    <p>We use the latest technology and equipment to provide the best treatments.</p>
                </div>
            </div>
        </section>
    );
}

export default Choose;
