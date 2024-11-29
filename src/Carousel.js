import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items, projectName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.length;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-inner" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {item.title === 'Overview' && (
                            <div className="carousel-content overview">
                                <img src={item.image} alt={item.title} className="carousel-image" />
                                <div className="carousel-caption">
                                    <h2>{projectName} - {item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )}
                        {item.title === 'Screenshot' && (
                            <div className="carousel-content screenshot">
                                <img src={item.image} alt={item.title} className="carousel-image-full" />
                                <div className="carousel-caption">
                                    <h2>{projectName} - {item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )}
                        {item.title !== 'Overview' && item.title !== 'Screenshot' && (
                            <div className="carousel-content">
                                <div className="carousel-caption">
                                    <h2>{projectName} - {item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrev} aria-label="Previous">
                &#10094;
            </button>
            <button className="carousel-control-next" onClick={handleNext} aria-label="Next">
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
