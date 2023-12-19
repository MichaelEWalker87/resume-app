import React, { useState, useEffect } from 'react';
import './ReadMe.scss';
import ReadMeUp from '../../../assets/Buttons/ReadMe/readMeUp.png';
import ReadMeDown from '../../../assets/Buttons/ReadMe/readMeDown.png';
import ReadMeUpHover from '../../../assets/Buttons/ReadMe/readMeUpHover.png';
import ReadMeDownHover from '../../../assets/Buttons/ReadMe/readMeDownHover.png';

const ReadMeButton = ({ direction, disabled, onClick, className, enter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const normalImage = direction === 'up' ? ReadMeUp : ReadMeDown;
  const hoverImage = direction === 'up' ? ReadMeUpHover : ReadMeDownHover;
  const disabledImage = direction === 'up' ? ReadMeUp : ReadMeDown;

  const handleClick = () => {
    if (!disabled) {
      onClick(direction);
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

  return (
    <div className={`read-me-button ${direction}`}>
      <img
        src={disabled ? disabledImage : isHovered ? hoverImage : normalImage}
        alt={`${direction} read-me`}
        onClick={handleClick}
        className={className}
      />
    </div>
  );
};

export default ReadMeButton;