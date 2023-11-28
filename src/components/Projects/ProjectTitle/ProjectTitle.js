import React from 'react';

const ProjectTitle = ({ title }) => {
  return (
    <div className='project-title-container'>
      <h3 className='project-title'>
        {title.length > 30 ? (
          <span>{title.substring(0, 30) + '...'}</span>
            ) : (
            title
        )}
      </h3>
    </div>
  );
};

export default ProjectTitle;

