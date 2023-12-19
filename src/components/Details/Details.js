import React from 'react';
import './Details.scss';
import CloseButton from '../Button/CloseButton/CloseButton';

function Details(props) {
    const { project, onClose } = props;
    
    if (!onClose) {
    return null;
    }

  const { pdf, title} = project; 

  const handleCloseClick = () => {
    onClose(); 
  };

  return (
    <div className='background'>
      <div className='zoomed-container' >
        <iframe
            className="jumbo-pop-up"
            src={pdf}
            title={title}
            frameBorder="0"
            key={title}
            allowFullScreen
            seamless
        />
      </div>
      <div className="close-button-container-project">
        <CloseButton className="project-detail-close" onClick={handleCloseClick} />
      </div>
    </div>
  );
}

export default Details;