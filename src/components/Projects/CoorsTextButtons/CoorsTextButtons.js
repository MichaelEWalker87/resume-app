import React from 'react';
import TextButton from '../../Button/TextButtons/TextButton';

const CoorsTextButtons = ({
  handleButtonClick,
  activeButton,
  all,
  engineering,
  design,
  product,
}) => {
  return (
    <div className='coors-text-button-container'>
      <TextButton
        className="text-engineering coors-text-button"
        isActive={activeButton === engineering}
        onClick={() => {
          handleButtonClick(engineering);
        }}
        text="Engineering"
      />
      <TextButton
        className="text-all coors-text-button"
        isActive={activeButton === all}
        onClick={() => {
          handleButtonClick(all);
        }}
        text="All"
      />
      <TextButton
        className="text-design coors-text-button"
        isActive={activeButton === design}
        onClick={() => {
          handleButtonClick(design);
        }}
        text="Design"
      />
      <TextButton
        className="text-product coors-text-button"
        isActive={activeButton === product}
        onClick={() => {
          handleButtonClick(product);
        }}
        text="Product"
      />
    </div>
  );
};

export default CoorsTextButtons;