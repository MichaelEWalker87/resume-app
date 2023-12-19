import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import '../../../pages/WorkHistory/WorkHistory.scss';
import './WorkHistoryCards.scss'
import ArrowButton from '../../Button/ArrowButtons/ArrowButtons';
import WorkHistoryDetails from '../../WorkHistory/WorkHistoryDetails/WorkHistoryDetails'; 
import WorkHistoryBackImage from '../../WorkHistory/WorkHistoryBackImage/WorkHistoryBackImage';
import LoadIcon from '../../../components/LoadIcon/LoadIcon';
import { collection, onSnapshot } from 'firebase/firestore';

function WorkHistoryCards(props) {
  const [workCards, setWorkCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showWorkHistoryDetails, setShowWorkHistoryDetails] = useState(false); 
  const [selectedJobIndex, setSelectedJobIndex] = useState(0); 
  const sortedWorkCards = workCards.sort((a, b) => b.order - a.order);
  const [imageIndex, setImageIndex] = useState(0);
  const [loadingTimer, setLoadingTimer] = useState(false)

  useEffect(() => {
    const loadingDuration = 2000;
    
    setTimeout(() => {
      setLoadingTimer(true);
    }, loadingDuration);

    onSnapshot(collection(db, "WorkHistory"), (snapshot) => {
      setWorkCards(snapshot.docs.map(doc => doc.data()));
      setIsLoading(false);
    });
  }, []);

  const handleArrowButtonClick = (direction) => {
    if (direction === 'left') {
      setImageIndex(imageIndex - 1);
    } else if (direction === 'right') {
      setImageIndex(imageIndex + 1);
    }
  };

  const handleReadMeButtonClick = (job) => {
    const jobIndex = workCards.indexOf(job);
    setSelectedJobIndex(jobIndex);
    setShowWorkHistoryDetails(true); 
  };

  const handleCloseWorkHistoryDetails = () => {
    setShowWorkHistoryDetails(false); 
  };

  const renderUnionCardItems = () => {
    return sortedWorkCards.slice(imageIndex, imageIndex + 3).map((job, index) => {
      const cardIndex = index + 1; 
      return (    
            <WorkHistoryBackImage 
                key={cardIndex} 
                job = {job}
                onClick={() => handleReadMeButtonClick(job)}
                cardIndex = {cardIndex}
            /> 
      );
    });
  };

  if (isLoading) {
    return (
      <div className={`loading-container ${loadingTimer ? '' : 'display-none'}`}>
        <LoadIcon title="Loading"/> 
      </div>
    );
  } else {
    return (
      <div className='work-history-card-container'>
        <div className='arrow-container'>
          <ArrowButton
            direction="left"
            className='arrow-left arrow-sizes'
            disabled={imageIndex === 0}
            onClick={handleArrowButtonClick}
          />
          <h3 className='arrow-text arrow-text-union'>Present</h3>
          <h3 className='arrow-text arrow-text-union'>Past</h3>
          <ArrowButton
            direction="right"
            className='arrow-right arrow-sizes'
            disabled={imageIndex === sortedWorkCards.length - 3}
            onClick={handleArrowButtonClick}
          />
        </div>
        <div className='union-card-container'>
          {renderUnionCardItems()}
        </div>
        {showWorkHistoryDetails && (
            <WorkHistoryDetails
                job={sortedWorkCards[selectedJobIndex]}
                onClose={handleCloseWorkHistoryDetails}
            />
        )}
        <div className='union-banners' />
      </div>
    );
  }
}

export default WorkHistoryCards;