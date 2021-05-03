import React from 'react';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Leonie Alexandra</span></h4>
                <p className="about-text">
                    More bio
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Leonie Alexandra</p>
                        <p>: 18</p>
                        <p>: Indonesian</p>
                        <p>: English, Indonesian, Mandarin Chinese</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;
