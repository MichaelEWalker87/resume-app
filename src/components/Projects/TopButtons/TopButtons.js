import React, { useState } from 'react';
import ReadMeButton from '../../Button/ReadMeButton/ReadMe';
import VideoButton from '../../Button/VideoButton/VideoButton';

const TopButtons = ({ handleReadMeButtonClick, handleVideoButtonClick, activeButton }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHover = () => {
        setIsHovered(true);
      };
      
      const handleLeave = () => {
        setIsHovered(false);
      };
      
    return (
        <div className='top-button-container'>
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className='read-me-button-container'
        >
            {activeButton !== '' ? (
            <ReadMeButton
                direction="down"
                className={`read-me-button`}
                onClick={handleReadMeButtonClick}
                enter={isHovered}
            />
            ) : null}
        </div>
        <div className='video-button-container'>
            <VideoButton onClick={handleVideoButtonClick} disabled={activeButton === ''} />
        </div>
        </div>
    );
};

export default TopButtons;