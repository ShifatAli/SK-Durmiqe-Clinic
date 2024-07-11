import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Services.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import serviceImage1 from '../assets/Servicepic1.png';
import serviceImage2 from '../assets/Servicepic2.png';
import serviceImage3 from '../assets/Servicepic3.png';
import serviceImage4 from '../assets/Servicepic4.png';
import serviceImage5 from '../assets/Servicepic5.png';
import serviceImage6 from '../assets/Servicepic6.png';
import serviceImage7 from '../assets/Servicepic7.png';

const Services = () => {
    const carouselRef = useRef(null);

    const services = [
        { img: serviceImage1, title: 'Aquafacial', desc: 'Aquafacial or Hydrafacial, is a skincare treatment that cleanses & nourishes the skin with hydrating serums.               '},
        { img: serviceImage2, title: 'Photofacial', desc: 'IPL Photofacial is a quick, half-hour procedure where intense pulses of light penetrate deep into the skin.                               '},
        { img: serviceImage3, title: 'Carbon facial', desc: 'Carbon peel, or carbon laser peel, is a non-invasive procedure treating acne, oily skin, and uneven skin tone.                          '},
        { img: serviceImage4, title: 'Laser Hair reduction', desc: 'Laser hair reduction is a popular procedure at SK Dermiqe Clinic, designed to target hair roots and reduce hair growth.          '},
        { img: serviceImage5, title: 'Laser Tattoo Removal', desc: 'Laser tattoo removal is a safe and effective treatment designed to eliminate unwanted tattoos.                                   '},
        { img: serviceImage6, title: 'Laser for Acne Scars ', desc: 'Acne scars are marks left behind after severe acne, commonly seen after grade 4 or nodulocystic acne.                           '},
        { img: serviceImage7, title: 'Laser for Acne ', desc: 'Acne is a skin condition where hair follicles clog with sebum and dead skin cells, causing lesions.                                   '},
    ];

    const items = services.map((service, index) => (
        <div className="card" key={index}>
            <img src={service.img} alt={service.title} className="card-image" />
            <h3>{service.title}</h3>
            <p className='service-p'>{service.desc}</p>
        </div>
    ));

    const slidePrev = () => {
        carouselRef.current.slidePrev();
    };

    const slideNext = () => {
        carouselRef.current.slideNext();
    };

    return (
        <div className="services-page">
            <section className="intro-section">
                <h2>Special Services</h2>
                <p>We offer a variety of treatments and services to help you achieve optimal health and wellness. Our team of experts is here to provide you with the best care possible.</p>
            </section>
            <div className="carousel-wrapper">
                <FaChevronLeft className="carousel-button prev-button" onClick={slidePrev} />
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    autoPlay
                    autoPlayInterval={2000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                        0: { items: 1 },
                        576: { items: 2 },
                        768: { items: 3 },
                        1024: { items: 4 },
                    }}
                />
                <FaChevronRight className="carousel-button next-button" onClick={slideNext} />
            </div>
        </div>
    );
};

export default Services;