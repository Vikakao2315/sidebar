import React from 'react';

const Sidebar = ({ slides, activeSlideIndex }) => {
    return (
        <div className="sidebar" style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}>
            {slides.map((slide, index) => (
                <div key={index} style={{ background: slide.background }}>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;