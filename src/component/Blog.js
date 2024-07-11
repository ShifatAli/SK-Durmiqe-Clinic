import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Blog.css';
import blogImage1 from '../assets/blog1.png';
import blogImage2 from '../assets/blog2.png';
import blogImage3 from '../assets/blog3.png';

const Blog = () => {
    const carouselRef = useRef(null);

    const blogs = [
        { img: blogImage1, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.', link: '/blog1' },
        { img: blogImage2, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.', link: '/blog2' },
        { img: blogImage3, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.', link: '/blog3' },
    ];

    const items = blogs.map((blog, index) => (
        <div className="card" key={index}>
            <img src={blog.img} alt={`Blog ${index + 1}`} className="card-image" />
            <div className="card-content">
                <p>{blog.desc}</p>
                <a href={blog.link} className="button read-more-button">Read More</a>
            </div>
        </div>
    ));

    const slidePrev = () => {
        carouselRef.current.slidePrev();
    };

    const slideNext = () => {
        carouselRef.current.slideNext();
    };

    return (
        <div className="blog-page">
            <h1>Blog</h1>
            <div className="skin-care-tips">
                <h2>Skin Care Tips</h2>
            </div>
            <div className="carousel-wrapper">
                <FaChevronLeft className="carousel-button prev-button" onClick={slidePrev} />
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    autoPlay
                    autoPlayInterval={3000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                        0: { items: 1 },
                        576: { items: 2 },
                        768: { items: 3 },
                        1024: { items: 3 },
                    }}
                />
                <FaChevronRight className="carousel-button next-button" onClick={slideNext} />
            </div>
        </div>
    );
};

export default Blog;
