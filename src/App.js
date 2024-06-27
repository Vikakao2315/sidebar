import React, { useState } from 'react';
import './App.css';
import Sidebar from '././components/Sidebar';
import MainSlide from '././components/MainSlide';
import Controls from '././components/Controls';


function App() {
    const slides = [
        {
            title: "Interior Design Inspiration",
            description: "Design ideas for decorating your home",
            background: "linear-gradient(229.99deg, #ACD7C1 -26%, #C0D8CC 145%)",
            image: "https://images.unsplash.com/photo-1621570168297-bdcdd4457664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
        },
        {
            title: "DIY Projects",
            description: "Create decorative elements for your home",
            background: "linear-gradient(229.99deg, #D19ACD -26%, #D7ACD4 145%)",
            image: "https://images.unsplash.com/photo-1601654253194-260e0b6984f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2198&q=80"
        },
        {
            title: "Garden and Landscape",
            description: "Decorate surrounding area.",
            background: "linear-gradient(220.16deg, #2E5E29 -8%, #255020 138%)",
            image: "https://plus.unsplash.com/premium_photo-1674986171791-366e8de00737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
        },
        {
            title: "Expert Advice and Tips",
            description: "Expert advice, tips, and tricks related to interior design.",
            background: "linear-gradient(220.16deg, #A6630A -8%, #9E6419 138%)",
            image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
        }
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const changeSlide = (direction) => {
        if (direction === 'up') {
            setActiveSlideIndex((prev) => (prev + 1) % slides.length);
        } else {
            setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    return (
        <div className="container">
            <Sidebar slides={slides} activeSlideIndex={activeSlideIndex} />
            <MainSlide slides={slides} activeSlideIndex={activeSlideIndex} />
            <Controls changeSlide={changeSlide} />
        </div>
    );
}

export default App;
