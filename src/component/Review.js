import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Review.css';
import userImage1 from '../assets/User1.png'; // images add kar lena , agar card me image nahi chahiye toh remove kar dena
import userImage2 from '../assets/User1.png';
import userImage3 from '../assets/User1.png';

const Review = () => {
    const reviews = [
        {
            title: "Amazing Service!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.",
            img: userImage1,
            name: "Jane Doe",
            date: "June 1, 2024",
        },
        {
            title: "Highly Recommend!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.",
            img: userImage2,
            name: "John Smith",
            date: "May 15, 2024",
        },
        {
            title: "Exceptional Quality!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique diam.",
            img: userImage3,
            name: "Alice Johnson",
            date: "April 20, 2024",
        },
    ];

    const items = reviews.map((review, index) => (
        <div className="review-card" key={index}>
            <h2>{review.title}</h2>
            <p>{review.desc}</p>
            <div className="review-card-footer">
                <img src={review.img} alt={`User ${index + 1}`} className="review-user-image" />
                <div className="review-user-info">
                    <p className="review-user-name">{review.name}</p>
                    <p className="review-date">{review.date}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="review-page">
            <div className="review-header">
                <h1>What Our Customers Say</h1>
                <button className="review-button">Leave a Review</button>
            </div>
            <AliceCarousel
                items={items}
                autoPlay
                autoPlayInterval={3000}
                infinite
                disableDotsControls
                renderPrevButton={() => (
                    <button className="carousel-button prev-button">‹</button>
                )}
                renderNextButton={() => (
                    <button className="carousel-button next-button">›</button>
                )}
                responsive={{
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 3 },
                }}
            />
        </div>
    );
};

export default Review;
