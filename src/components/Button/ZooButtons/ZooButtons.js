import React, { useState, useEffect } from 'react';
import './ZooButtons.scss';
import lionButton from '../../../assets/Buttons/Animal/Normal/LionBlank.png';
import tigerButton from '../../../assets/Buttons/Animal/Normal/TigerBlank.png';
import penguinButton from '../../../assets/Buttons/Animal/Normal/PenguinBlank.png';
import seaLionButton from '../../../assets/Buttons/Animal/Normal/SeaLionBlank.png';
import lionClick from '../../../assets/Buttons/Animal/Clicked/LionClickedBlank.png';
import tigerClick from '../../../assets/Buttons/Animal/Clicked/TigerClickedBlank.png';
import penguinClick from '../../../assets/Buttons/Animal/Clicked/PenguinClickedBlank.png';
import seaLionClick from '../../../assets/Buttons/Animal/Clicked/SeaLionClickedBlank.png';
import youAreHere from '../../../assets/Buttons/Animal/Clicked/YouAreHere.png';

function ZooButtons({ text, onClick, isActive, className }) {
  const [imageSource, setImageSource] = useState('');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    handleImageChange();
  }, [isActive]); 

  const handleImageChange = () => {
    if (isActive) {
      switch (text) {
        case 'Engineering':
          setImageSource(lionClick);
          break;
        case 'Product':
          setImageSource(tigerClick);
          break;
        case 'Design UX/UI':
          setImageSource(seaLionClick);
          break;
        default:
          setImageSource(penguinClick);
      }
    } else {
      switch (text) {
        case 'Engineering':
          setImageSource(lionButton);
          break;
        case 'Product':
          setImageSource(tigerButton);
          break;
        case 'Design UX/UI':
          setImageSource(seaLionButton);
          break;
        default:
          setImageSource(penguinButton);
      }
    }
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const buttonClasses = `zoo-button ${isActive ? 'active-zoo' : ''} ${hovered && !isActive ? 'hover-zoo' : ''}`;

  return (
    <div
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isActive && <img className={`${className}-are-here you-are-here`} src={youAreHere} alt={`You Are Here`} />}
      <img className='zoo-button-img'src={imageSource} alt={`${text} Button`} />
      <h2 className={isActive ? `zoo-button-text ${className}-active` : `zoo-button-text ${className}`}>{text}</h2>
    </div>
  );
}

export default ZooButtons;