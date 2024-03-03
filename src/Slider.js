import React from 'react';

function Slider({value, onValueChange, sliderMax}) {

    const handleChange = (event) => {
        onValueChange(parseInt(event.target.value, 10));
    };

    const percentage = sliderMax !== 0 ? (value / sliderMax) * 100 : 0;

    return (
        <div className="slider-container">
            <input
                type="range"
                min="0"
                max={sliderMax}
                value={value}
                onChange={handleChange}
                className="slider"
                style={{
                    background: `linear-gradient(to right, #007bff ${percentage}%, #d3d3d3 ${percentage}%)`
                }}
            />
            <p>Influencers: {value}</p>
        </div>
    );
}

export default Slider;