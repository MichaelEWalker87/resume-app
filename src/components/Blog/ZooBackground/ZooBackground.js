import React, { useEffect, useState } from 'react';
import hippo from '../../../assets/Zoo/Hippo.png'
import ZooBuilding from '../../../assets/Zoo/ZooBuilding.png'
import FullZooMap from '../../../assets/Zoo/FullZooMap.png'
import Compass from '../../../assets/Zoo/Compass.png'

import './ZooBackground.scss'

function ZooBackground(props) {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const animationDuration = 2100;
        setTimeout(() => {
            setShowAnimation(false);
        }, animationDuration);
    }, []);

    return (
        <div>
            <div className={`zoo-building-container ${showAnimation ? '' : 'animate-done-zoo'}`}>
                <img
                    src={ZooBuilding}
                    alt='zoo entrance'
                    className={`zoo-building-image ${showAnimation ? '' : 'animate-done-zoo'}`}
                />
            </div>
            <div className={`hippo-container ${showAnimation ? '' : 'animate-done-zoo'}`}>
                <img
                    src={hippo}
                    alt='hippo'
                    className={`hippo-image ${showAnimation ? '' : 'animate-done-zoo'}`}
                />
            </div>
            <div className={`hippo-container`}>
                <img
                    src={hippo}
                    alt='hippo'
                    className={`hippo-image-end ${showAnimation ? 'animate-hide' : 'animate-done'}`}
                />
            </div>
            <div className={`zoo-container`}>
                <img
                    src={FullZooMap}
                    alt='zoo map background'
                    className={`zoo-background-image ${showAnimation ? 'animate-hide' : 'animate-done'}`}
                />
            </div>
            <div className={`compass-container`}>
                <img
                    src={Compass}
                    alt='compass'
                    className={`compass-image ${showAnimation ? 'animate-hide' : 'animate-done'}`}
                />
            </div>
            <div className={`zoo-background ${showAnimation ? 'animate-hide' : 'animate-done'}`}/>
        </div>
    );
}

export default ZooBackground;