import React, { useEffect, useState } from 'react';
import CoorsBlank from '../../../assets/Coors/background/CoorsBlank.png';
import CoorsBackgroundNormal from '../../../assets/Coors/background/Coors.png';
import "./CoorsBackground.scss";

const CoorsBackground = () => {
    const [showAnimation, setShowAnimation] = useState(true);
   
    useEffect(() => {
        const animationDuration = 4000;
        setTimeout(() => {
            setShowAnimation(false);
        }, animationDuration);
    }, []);
  
    return (
        <div className='coors-container'>
        <img
            src={CoorsBackgroundNormal}
            alt='Coors Field Background'
            className={`coors-field ${showAnimation ? '' : 'animate-done'}`}
        />
        <div></div>
        <img
            src={CoorsBlank}
            alt='Coors Field Background'
            className={`coors-field-fade ${showAnimation ? '' : 'animate-done'}`}
        />
        <div className='coors-banners'/>
        </div>
    );
};

export default CoorsBackground;