import React, { useEffect, useState } from 'react';
import './Letter.scss';
import BaseEnvelope from '../../../assets/Contact/Letter/BaseEnvelope.svg'
import Paper from '../../../assets/Contact/Letter/Letter.png'
import PointDown from '../../../assets/Contact/Letter/Point.svg'
import PointUp from '../../../assets/Contact/Letter/PointUP.svg'
import ShadowInner from '../../../assets/Contact/Letter/ShadowInner.svg'
import FullLetter from '../../../assets/Contact/Letter/FullLetter.png'
import PaperPlane from '../../../assets/Contact/Letter/PaperPlane.png'

function Letter() {
    const [pointDownEffects, setPointDownEffects] = useState(false);
    const [removeEffects, setRemoveEffects] = useState(false);
    const [removeEffectsTwo, setRemoveEffectsTwo] = useState(false);
    const [removeEffectsThree, setRemoveEffectsThree] = useState(false);
    const [removeEffectsFour, setRemoveEffectsFour] = useState(false);
    const [removeEffectsFive, setRemoveEffectsFive] = useState(false);
    const text = "Email Sent"; 

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPointDownEffects(true);
        }, 950);
        const timeoutIdTwo = setTimeout(() => {
            setRemoveEffects(true);
        }, 1250);
        const timeoutIdThree = setTimeout(() => {
            setRemoveEffectsTwo(true);
        }, 3050);
        const timeoutIdFour = setTimeout(() => {
            setRemoveEffectsThree(true);
        }, 2750);
        const timeoutIdFive = setTimeout(() => {
            setRemoveEffectsFour(true);
        }, 4000);
        const timeoutIdSix = setTimeout(() => {
            setRemoveEffectsFive(true);
        }, 7870);
        return () => {
            clearTimeout(timeoutId, timeoutIdTwo, timeoutIdThree, timeoutIdFour, timeoutIdFive, timeoutIdSix);
        };
    }, []);

    return (
        <div className='letter-container'>
            <img 
                src={PointDown} 
                alt="Base Envelope" 
                className={`point-down-envelope 
                    ${pointDownEffects ? '' : 'point-down-delay'} 
                    ${removeEffects ? 'point-down-delay' : ''}`
                }
            />
            <img 
                src={PointUp} 
                alt="Base Envelope" 
                className={`point-up-envelope 
                    ${pointDownEffects ? 'point-down-delay' : ''}`
                } 
            />
            <img 
                src={ShadowInner} 
                alt="Base Envelope" 
                className={`shadow-envelope 
                    ${removeEffects ? 'point-down-delay' : ''}`
                } 
            />
            <img 
                src={Paper} 
                alt="Open Base Envelope" 
                className={`paper-open ${removeEffects ? 'point-down-delay' : ''}`
                } 
            />
            <img 
                src={BaseEnvelope} 
                alt="Base Envelope" 
                className={`base-envelope ${removeEffects ? 'point-down-delay' : ''}`
                } 
            />
            <img 
                src={FullLetter} 
                alt="Base Envelope" 
                className={`base-envelope 
                    ${removeEffects ? 'full-letter' : 'point-down-delay'}
                    ${removeEffectsTwo ? 'point-down-delay' : ''}`
                } 
            />
            <img 
                src={PaperPlane} 
                alt="Base Envelope" 
                className={`base-plane 
                    ${removeEffectsThree ? 'full-plane' : 'point-down-delay'}`
                } 
            />
            <img 
                src={PaperPlane} 
                alt="Base Envelope" 
                className={`base-plane-flip
                    ${removeEffectsFour ? '' : 'point-down-delay'}`
                } 
            />
            <img 
                src={PaperPlane} 
                alt="Base Envelope" 
                className={`plane-hover-style
                    ${removeEffectsFive ? '' : 'point-down-delay'}`
                } 
            />
        </div>
    );
}

export default Letter;