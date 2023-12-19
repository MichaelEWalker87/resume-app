import React, { useEffect, useState } from 'react';
import './Project.scss';
import db from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import CoorsBackground from '../../components/Projects/CoorsBackground/CoorsBackground';
import ProjectTitle from '../../components/Projects/ProjectTitle/ProjectTitle';
import TopButtons from '../../components/Projects/TopButtons/TopButtons';
import ArrowButtons from '../../components/Projects/ArrowButtons/ArrowButtons';
import CoorsTextButtons from '../../components/Projects/CoorsTextButtons/CoorsTextButtons';
import ProjectCardContainer from '../../components/Projects/ProjectCardContainer/ProjectCardContainer';
import ProjectDetails from '../../components/Details/Details';
import LoadIcon from '../../components/LoadIcon/LoadIcon'

function Projects(props) {
  const [activeButton, setActiveButton] = useState('');
  const [showAnimation, setShowAnimation] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [projectCards, setProjectCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const sortedProjectCards = projectCards.sort((a, b) => b.date - a.date);
  const [imageIndex, setImageIndex] = useState(0);
  const [projectTitle, setProjectTitle] = useState('Intro Video');
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState({})
  const [filteredCardsLength, setFilteredCardsLength] = useState(0);
  const [loadingTimer, setLoadingTimer] = useState(false)
   
  useEffect(() => {
      const animationDuration = 4000;
      const loadingDuration = 2000;
      
      setTimeout(() => {
        setLoadingTimer(true);
      }, loadingDuration);

      setTimeout(() => {
          setShowAnimation(false);
      }, animationDuration);
  }, []);

  useEffect(() => {
    filteredCards.slice(imageIndex, imageIndex + 1).forEach((project) => {
      let title = project.title;
      setProjectTitle(title);
      setCurrentProject(project)
    });
  }, [filteredCards, imageIndex]);

  useEffect(() => {
    onSnapshot(collection(db, 'Projects'), (snapshot) => {
      setProjectCards(snapshot.docs.map((doc) => doc.data()));
      setIsLoading(false);
    });
  }, []);
  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setImageIndex(0);
    if (buttonName === 'all') {
      setFilteredCards(sortedProjectCards);
    } else {
      setFilteredCards(sortedProjectCards.filter((project) => project.field === buttonName));
    }
  };
  
  const handleReadMeButtonClick = () => {
    setShowProjectDetails(true); 
  };

  const handleCloseProjectDetails = () => {
    setShowProjectDetails(false); 
  };


  const handleArrowButtonClick = (direction) => {
    setFilteredCardsLength(filteredCards.length);
    if (direction === 'left') {
      if (imageIndex > 0) {
        setImageIndex((prevImageIndex) => Math.max(0, prevImageIndex - 1));
      }
    } else if (direction === 'right') {
      if (imageIndex < filteredCardsLength - 1) {
        setImageIndex((prevImageIndex) => Math.min(filteredCardsLength - 1, prevImageIndex + 1));
      }
    }
  };

 const handleVideoButtonClick = () => {
    setActiveButton('')
    setProjectTitle('Intro Video')
 }

  if (isLoading) {
    return (
      <div className={`loading-container ${loadingTimer ? '' : 'display-none'}`}>
        <LoadIcon title="Loading"/> 
      </div>
    );
  } else {
      return (
              <div>
                {showProjectDetails &&
                <ProjectDetails 
                  project= {currentProject}
                  onClose= {handleCloseProjectDetails}
                />}
                <ProjectTitle title={projectTitle} />
                <TopButtons
                    handleVideoButtonClick={handleVideoButtonClick}
                    activeButton={activeButton}
                    handleReadMeButtonClick={handleReadMeButtonClick}
                  />
                  <ArrowButtons
                    handleArrowButtonClick={handleArrowButtonClick}
                    imageIndex={imageIndex}
                    filteredCardsLength={filteredCardsLength}
                    activeButton={activeButton}
                  />
                  <CoorsTextButtons
                    handleButtonClick={handleButtonClick}
                    activeButton={activeButton}
                    engineering={'engineering'}
                    design={'design'}
                    product={'product'}
                    all={'all'}
                  />
                  <ProjectCardContainer filteredCards={filteredCards}  imageIndex={imageIndex}/>
                  {activeButton === '' ? <iframe 
                    className={`youtube jumbotron ${showAnimation ? '' : 'animate-done'}`}
                    src="https://www.youtube.com/embed/Asg2-0k5Z2w?autoplay=1&loop=1&rel=0&showinfo=0&color=white&controls=1&autohide=1"
                    title="Video Portfolio"
                    frameBorder="0"
                    allowFullScreen
                    /> : null
                  }
                  <CoorsBackground className={`coors-field ${showAnimation ? '' : 'animate-done'}`} />
              </div>
          );
      }
  }
  
  export default Projects;