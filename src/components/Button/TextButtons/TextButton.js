import React, { useState } from 'react';
import './TextButton.scss';

const TextButton = ({ className, onClick, text, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const buttonClasses = `text-button ${className} ${isActive ? 'active' : ''} ${
    isHovered && !isActive ? 'hover' : ''
  }`;

  return (
    <div
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {text}
    </div>
  );
};

export default TextButton;