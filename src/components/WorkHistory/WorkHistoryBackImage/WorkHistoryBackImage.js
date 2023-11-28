import React, { useState } from 'react';
import ReadMeButton from '../../../components/Button/ReadMeButton/ReadMe';

function WorkHistoryBackImage({ job, cardIndex, onClick }) {
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
    <div key={job.jobTitle} 
        className={`union-card-single union-card-single-${cardIndex}`} 
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
    >
        <img
            src={isHovered ? job.shadow : job.source}
            alt={job.altText}
            className='union-card'
            onClick={handleClick}
        />
        <h3 className={`union-title title-${cardIndex}`} onClick={handleClick}>
            {job.jobTitle}
        </h3>
        <ReadMeButton
            direction="up"
            className={`read-me-button read-me-button-${cardIndex}`}
            onClick={handleClick}
            enter={isHovered}
        />
    </div>
  );
}
export default WorkHistoryBackImage;

