import React from 'react';

const MainSlide = ({ slides, activeSlideIndex }) => {
    return (
        <div className="main-slide" style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}>
            {slides.map((slide, index) => (
                <div key={index} style={{ backgroundImage: `url(${slide.image})` }}></div>
            ))}
        </div>
    );
};

export default MainSlide;