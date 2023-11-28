import React, { useEffect, useState } from 'react';
import Union from "../../assets/Union/union.png";
import './WorkHistory.scss';
import '../../styles/index.scss'
import WorkHistoryCards from '../../components/WorkHistory/WorkHistoryCards/WorkHistoryCards';

function WorkHistory(props) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
      const animationDuration = 4000; 
      setTimeout(() => {
          setShowAnimation(false);
      }, animationDuration);
  }, []);


return (
    <div>
      <div className='union-image-container'> 
        <WorkHistoryCards  className='work-history-card-container' /> 
        <img 
          src={Union} 
          alt='Union Station Work History Background'
          className={`union-image ${showAnimation ? '' : 'animate-done'}`}
        />
      </div>
      <div className='union-banners'/>
    </div>
  );
}

export default WorkHistory;