import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
        </div>
    )
}

export default AboutPage;
