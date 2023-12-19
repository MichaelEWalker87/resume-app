import React, { useEffect, useState } from 'react';
import './ThankYou.scss' 
import ContactSubmit from '../../Button/ContactSubmit/ContactSubmit';
import Letter from './Letter';

const ThankYou = ({onClick}) => {
  const [displayEffects, setDisplayEffects] = useState(false);
  const [lightEffects, setLightEffects] = useState(false);
  const [resetButton, setResetButton] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const text = "Email Sent"; 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayEffects(true);
    }, 4500);

    const timeoutIdTwo = setTimeout(() => {
      setLightEffects(true);
    }, 6800);

    const timeoutIdThree = setTimeout(() => {
      setResetButton(true);
    }, 12000);
    
    return () => {
      clearTimeout(timeoutId, timeoutIdTwo, timeoutIdThree);
    };
  }, []);

  const spans = text.split('').map((letter, i) => (
    <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
      {letter}
    </span>
  ));

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      {resetButton ?
          <div
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className={"calendly-container fade-in-reset-email-submit"} 
          >
            <ContactSubmit
              onClick={onClick} 
              className={"submit-contact-me"} 
              enter={isHovered} 
              icon={false} 
              text={'Send Another Message'}
              submit={true}
            /> 
          </div>
        :
          ''
      }
      <Letter/>
      <h2 className={`thank-you-text ${lightEffects ? 'text-delay' : ''} ${displayEffects ? 'fade-in-email-sent': 'display-none'}`}>
        {spans}
      </h2>
    </div>
  );
};

export default ThankYou;

