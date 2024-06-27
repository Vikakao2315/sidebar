import React from 'react';

const Controls = ({ changeSlide }) => {
    return (
        <div className="controls">
            <button className="up-button" onClick={() => changeSlide('up')}>
                <i className="fas fa-arrow-up"></i>
            </button>
            <button className="down-button" onClick={() => changeSlide('down')}>
                <i className="fas fa-arrow-down"></i>
            </button>
        </div>
    );
};

export default Controls;