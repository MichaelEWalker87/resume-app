import React, { useState } from 'react';
import ReadMeButton from '../../Button/ReadMeButton/ReadMe';
import './SampleBlog.scss';

function SampleBlog(props) {
    const { currentBlog ,onOpen} = props;
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHover = () => {
        setIsHovered(true);
        };
    
    const handleLeave = () => {
        setIsHovered(false);
    };
    
    const handleReadMeButtonClick = () => {
        onOpen(); 
    };

    return (
        <div 
            className='sample-blog-container'
        >
            <iframe
                className="blog-card"
                src={currentBlog.pdf}
                title={currentBlog.title}
                frameBorder="0"
                key={currentBlog.title}
                allowFullScreen
                seamless
            />
            <div className='read-me-blog-button' 
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <ReadMeButton
                    direction="up"
                    className={`read-me-button`}
                    onClick={handleReadMeButtonClick}
                    enter={isHovered}
                />
            </div>
        </div>
    );
}

export default SampleBlog;