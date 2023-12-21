import React, { useState, useEffect } from 'react';
import './ContactSubmit.scss';

import ActiveButtonRed from '../../../assets/Buttons/ContactMeButtons/ContactBlanks/ActiveButtonRed.png'
import DisabledButton from '../../../assets/Buttons/ContactMeButtons/ContactBlanks/DisabledButton.png'
import NormalButtonReg from '../../../assets/Buttons/ContactMeButtons/ContactBlanks/NormalButtonReg.png'

import CalendlyIconBlue from '../../../assets/Buttons/ContactMeButtons/CalendlyIcon/CalendlyIconBlue.png'
import CalendlyIconLight from '../../../assets/Buttons/ContactMeButtons/CalendlyIcon/CalendlyIconLight.png'
import CalendlyIconDisabled from '../../../assets/Buttons/ContactMeButtons/CalendlyIcon/CalendlyIconDisabled.png'



const ContactSubmit = ({ disabled, onClick, className, enter, calendlyStyle, icon, text, submit }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (!disabled) {
            onClick();
        }
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        if (enter) {
        handleHover();
        } else {
        handleLeave();
        }
    }, [enter]);

    const buttonClasses = `submit-button-text 
        ${disabled ? 'disabled-submit-button' : ''} 
        ${isHovered ? '' : 'active-submit-button'} 
        ${isHovered ? 'hover-submit-button' : ''}
    `;

    return (
        <div 
            className={`${className} submit-me-button 
                ${disabled ? 'disabled-class-name-container' : ''} 
                ${submit ?  '' : 'pulse-submit-contact-click-me'}`
            }
            onClick={handleClick}
        >
            <div className={`submit-internal-button ${calendlyStyle} `}>
                {icon ?             
                    <img
                        src={disabled ? CalendlyIconDisabled : isHovered ? CalendlyIconLight : CalendlyIconBlue}
                        alt={`calendly-icon`}
                        className={`calendly-style`}
                    /> : null 
                }
                <p className={buttonClasses}>{text}</p>
            </div>
            <img
                src={disabled ? DisabledButton : isHovered ? ActiveButtonRed : NormalButtonReg}
                alt={`blank-button`}
                className={`blank-submit-button `}
            />
        </div>
    );
};

export default ContactSubmit;