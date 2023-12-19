import React, { useState, useEffect } from 'react';
import ZooButtons from '../../Button/ZooButtons/ZooButtons';
import './AnimalButtons.scss';

const AnimalButtons = ({
  handleButtonClick,
  activeButton,
  all,
  engineering,
  design,
  product,
}) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const animationDuration = 3400;
    setTimeout(() => {
      setShowAnimation(false);
    }, animationDuration);
  }, []);

  return (
    <div className={`zoo-button-container  ${showAnimation ? 'animate-hide' : 'animate-done'}`}>
        <div className="zoo-button-animation">
          <div className="zoo-button-animation-inner" />
        </div>
      <div className="zoo-buttons-wrapper">
        <div className="zoo-button-1">
          <ZooButtons
            text="Product"
            className="product-zoo-button"
            isActive={activeButton === product}
            onClick={() => handleButtonClick(product)}
          />
        </div>
        <div className="zoo-button-2">
          <ZooButtons
            text="Design UX/UI"
            className="design-zoo-button"
            isActive={activeButton === design}
            onClick={() => handleButtonClick(design)}
          />
        </div>
        <div className="zoo-button-3">
          <ZooButtons
            text="Engineering"
            className="engineering-zoo-button"
            isActive={activeButton === engineering}
            onClick={() => handleButtonClick(engineering)}
          />
        </div>
        <div className="zoo-button-4">
          <ZooButtons
            text="All"
            className="all-zoo-button"
            isActive={activeButton === all}
            onClick={() => handleButtonClick(all)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimalButtons;