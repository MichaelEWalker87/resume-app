import React, { useState } from 'react';
import './ArrowButtons.scss';

import leftNormal from '../../../assets/Buttons/workHistoryButtons/LeftNormal.png';
import leftActive from '../../../assets//Buttons/workHistoryButtons/LeftActive.png';
import leftDisabled from '../../../assets//Buttons/workHistoryButtons/LeftDisabled.png';

import rightNormal from '../../../assets//Buttons/workHistoryButtons/RightNormal.png';
import rightActive from '../../../assets//Buttons/workHistoryButtons/RightActive.png';
import rightDisabled from '../../../assets//Buttons/workHistoryButtons/RightDisabled.png';

const ArrowButton = ({ direction, disabled, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const normalImage = direction === 'left' ? leftNormal : rightNormal;
  const activeImage = direction === 'left' ? leftActive : rightActive;
  const disabledImage = direction === 'left' ? leftDisabled : rightDisabled;

  const handleClick = () => {
    if (!disabled) {
      setIsActive(true);
      onClick(direction);

      setTimeout(() => {
        setIsActive(false);
      }, 300);
    }
  };

  return (
    <div className={`arrow-button ${direction}`}>
      <img
        src={disabled ? disabledImage : isActive ? activeImage : normalImage}
        alt={`${direction} arrow`}
        onClick={handleClick}
        className={disabled ? 'disabled' : ''}
      />
    </div>
  );
};

export default ArrowButton;