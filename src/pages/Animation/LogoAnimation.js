import React, { useEffect, useState } from 'react';
import LogoLarge from '../../assets/Logo/LogoLarge.svg';
import './LogoAnimation.scss';

function LogoAnimation() {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const animationDuration = 4000; 
        setTimeout(() => {
            setShowAnimation(false);
        }, animationDuration);
    }, []);

    return (
        <div>
            <div className='logo-opener-container'>
                <img
                    src={LogoLarge}
                    alt="Logo"
                    className={`logo-opener ${showAnimation ? '' : 'animate-done'}`}
                />
            </div>
        </div>
    );
}

export default LogoAnimation;
