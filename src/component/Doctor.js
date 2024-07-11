import React from 'react';
import './Doctor.css';
import doctorImage from '../assets/Doctorpic.png'; // Adjust the path to your image file

const Doctor = () => {
    return (
        <div className="doctor-page">
            <div className="doctor-content">
                <div className="image-section">
                    <img src={doctorImage} alt="Doctor" className="doctor-image" />
                </div>
                <div className="text-section">
                    <h2>Dr. Shweta Kesarwani </h2>
                    <p className='doctor-p'>
                    Dr. Shweta Kesarwani is one of the top dermatologists in Greater Faridabad, 
boasting 20 years of experience in dermatology and cosmetology. She 
completed her post-graduation in dermatology at LLRM Medical College, 
Meerut. 
Dr. Kesarwani has served as a consultant dermatologist at Asian Hospital, 
Faridabad, from 2009 to 2016, and at QRG Hospital, Sector 16, Faridabad. Her 
extensive experience and dedication to her field have made her a trusted name 
in dermatological care. 
Committed to continuous learning, Dr. Kesarwani regularly attends various 
conferences and workshops to stay updated with the latest advancements and 
technologies in dermatology. Her holistic approach to skincare ensures 
comprehensive and personalized treatments for her patients. 
Dr. Kesarwani’s expertise and dedication to patient care make her an excellent 
choice for anyone seeking top-quality dermatological and cosmetic treatments 
in Greater Faridabad.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
