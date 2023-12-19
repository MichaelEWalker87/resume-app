import React from 'react';
import AboutMeContainer from '../../components/AboutMeContainer/AboutMeContainer';
import Skyline1 from "../../assets/Skyline/Skyline1.svg";
import Skyline2 from "../../assets/Skyline/Skyline2.svg";
import Skyline3 from "../../assets/Skyline/Skyline3.svg";


import './AboutMe.scss'

function AboutMe(props) {
    return (
        <div className='about-me-class'>
           <AboutMeContainer />
           <div className='skyline-container'>
            <img 
                    src={Skyline1} 
                    alt='Background Skyline 1'
                    className='skyline-one' 
                />
            <img 
                    src={Skyline2} 
                    alt='Background Skyline 2'
                    className='skyline-two' 
                />
            <img 
                    src={Skyline3} 
                    alt='Background Skyline 3'
                    className='skyline-three' 
                />
           </div>
           <div className='skyline-banners'/>
        </div>
    );
}

export default AboutMe;