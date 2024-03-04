// import React from 'react';


import React from 'react';
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Imgone from '../assets/banner1.webp';
import Imgtwo from '../assets/banner2.webp';
import AnimateText from './AnimateText';

const Slider = () => {
    const slides = [{ src: Imgone }, { src: Imgtwo }];

    return (

        <>
        <div className='slide-container px-4 mt-5 rounded-3xl overflow-hidden'>
            <Fade>
                {slides.map((item, index) => (
                    <div key={index} className="slide-image-wrapper rounded-3xl">
                        <img src={item.src} alt={`Slide ${index}`} className="w-full lg:h-[70vh] object-center h-[60vh]  "  />
                        </div>
                        ))}
            </Fade>
        </div>

        <p className='text-center font-semibold text-slate-800'>ONE STOP SOLUTION FOR YOUR PET’S</p>

        <AnimateText/>

        
        </>
    );
};

export default Slider;







// <img src={item.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />