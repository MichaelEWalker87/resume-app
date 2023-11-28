import React, { useState } from 'react';
import CloseButtonWhite from '../../../assets//Buttons/CloseButton/CloseButtonWhite.png';
import CloseButtonRed from '../../../assets//Buttons/CloseButton/CloseButtonRed.png';
import './CloseButton.scss';

function CloseButton({ className, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="Close-button">
      <img
        src={isHovered ? CloseButtonRed : CloseButtonWhite}
        alt="Close-button"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className={className}
      />
    </div>
  );
}

export default CloseButton;

