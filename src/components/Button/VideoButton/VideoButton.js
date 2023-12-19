import React, { useState } from 'react';
import './VideoButton.scss';
import activeVideoButton from '../../../assets/Buttons/VideoButton/activeVideoButton.png';
import normalVideoButton from '../../../assets/Buttons/VideoButton/normalVideoButton.png';
import disabledVideoButton from '../../../assets/Buttons/VideoButton/disabledVideoButton.png';

const VideoButton = ({ disabled, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    if (!disabled) {
      setIsActive(true);
      onClick();

      setTimeout(() => {
        setIsActive(false);
      }, 300);
    }
  };

  return (
    <div className={`video-button`}>
      <img
        src={disabled ? disabledVideoButton : isActive ? activeVideoButton : normalVideoButton}
        alt={`video button`}
        onClick={handleButtonClick}
        className={disabled ? 'disabled' : ''}
      />
    </div>
  );
};

export default VideoButton;


