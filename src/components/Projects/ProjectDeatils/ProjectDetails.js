import React from 'react';
import './ProjectDetails.scss';
import CloseButton from '../../Button/CloseButton/CloseButton';

function ProjectDetails(props) {
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
      <di className="close-button-container-project">
        <CloseButton className="project-detail-close" onClick={handleCloseClick} />
      </di>
    </div>
  );
}

export default ProjectDetails;