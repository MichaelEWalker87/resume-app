import React from 'react';
import ArrowButton from '../../Button/ArrowButtons/ArrowButtons';

const ArrowButtons = ({ handleArrowButtonClick, imageIndex, filteredCardsLength, activeButton }) => {
  
  
    return (
    <div className='arrow-container-project'>
      <ArrowButton
        direction="left"
        className='arrow-left arrow-sizes'
        disabled={imageIndex === 0 || activeButton === ''}
        onClick={handleArrowButtonClick}
      />
      <h3 className='arrow-text arrow-text-coors'>Present</h3>
      <h3 className='arrow-text arrow-text-coors'>Past</h3>
      <ArrowButton
        direction="right"
        className='arrow-right arrow-sizes'
        disabled={imageIndex === filteredCardsLength - 1 || activeButton === ''}
        onClick={handleArrowButtonClick}
      />
    </div>
  );
};

export default ArrowButtons;