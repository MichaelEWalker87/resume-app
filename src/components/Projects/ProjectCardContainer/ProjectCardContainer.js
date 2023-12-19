import React from 'react';

const ProjectCardContainer = ({ filteredCards, imageIndex }) => {
    
    const renderProjectCardItems = () => {
        return filteredCards.slice(imageIndex, imageIndex + 1).map((project) => (
            <iframe
            className="project-card jumbotron"
            src={project.pdf}
            title={project.title}
            frameBorder="0"
            key={project.title}
            allowFullScreen
            seamless
            />
        ));
    };

    return (
    <div className='project-card-container'>
      {renderProjectCardItems()}
    </div>
  );
};

export default ProjectCardContainer;
