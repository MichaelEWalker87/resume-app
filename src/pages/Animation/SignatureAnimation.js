import React, { useEffect, useState } from 'react';
import SignatureLarge from '../../assets/Footer/SignatureLarge.svg';
import './SignatureAnimation.scss';

function SignatureAnimation() {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const animationDuration = 4000; 
        setTimeout(() => {
            setShowAnimation(false);
        }, animationDuration);
    }, []);
    
    return (
        <div className='signature-opener-container'>
            <img
                src={SignatureLarge}
                alt="signature"
                className={`signature-opener ${showAnimation ? '' : 'animate-done'}`}
            />
        </div>
    );
}

export default SignatureAnimation;