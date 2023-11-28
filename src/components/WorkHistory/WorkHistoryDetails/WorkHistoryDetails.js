import React from 'react';
import './WorkHistoryDetails.scss';
import Window from '../../../assets/Union/cards/ZoomedIn/ZoomedWindow.png';
import CloseButton from '../../Button/CloseButton/CloseButton';

function WorkHistoryDetails(props) {
  const { job, onClose } = props;

  if (!onClose) {
    return null;
  }

  const { details, dates, title, logo, jobTitle, altText } = job; 

  const handleCloseClick = () => {
    onClose(); 
  };

  return (
    <div className='background'>
      <div className='zoomed-container' >
        <img
          src={Window}
          alt='Work History Background'
          className='container-background'
        />
        <div className='job-details'>
            <img src={logo} alt={altText} className='job-logo' />
            <h3 className='company-title'>{title}</h3>
            <div className='job-title-date-container'>            
                <h2 className='job-title'>{jobTitle}</h2>
                <p className='job-dates'>{dates}</p>
            </div>   
            <div className='job-description-container'> 
                <p className='job-description'>{details}</p>
            </div>
        </div>
        <CloseButton className="close-button" onClick={handleCloseClick} />
      </div>
    </div>
  );
}

export default WorkHistoryDetails;