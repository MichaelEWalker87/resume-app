import React, { useEffect, useState } from 'react';
import './SelectArticle.scss';
import ArrowButton from '../../Button/ArrowButtons/ArrowButtons';
import TextButton from '../../Button/TextButtons/TextButton';
import SampleBlog from '../SampleBlog/SampleBlog';
import Details from '../../Details/Details';

function SelectArticle({ filteredCards, activeButton }) {

    const [activeIndexRange, setActiveIndexRange] = useState({ start: 0, end: 1 });
    const [selectedCardText, setSelectedCardText] = useState(''); 
    const [currentBlog, setCurrentBlog] = useState({})
    const [showBlogDetails, setShowBlogDetails] = useState(false);

    const handleCloseBlogDetails = () => {
        setShowBlogDetails(false); 
    };
    const handleOpenBlogDetails = () => {
        setShowBlogDetails(true); 
    };

    useEffect(() => {
        setActiveIndexRange({ start: 0, end: 1 });
        setSelectedCardText(''); 
        setCurrentBlog({})
    }, [activeButton]);

    if (!activeButton || activeButton === '') {
        return null;
    }

    const handleArrowButtonClick = (direction) => {
        if (direction === 'left') {
        handleArrowButtonClickLeft();
        } else if (direction === 'right') {
        handleArrowButtonClickRight();
        }
    };

    const handleArrowButtonClickLeft = () => {
        if (activeIndexRange.start > 0) {
        setActiveIndexRange((prevActiveIndexRange) => ({
            ...prevActiveIndexRange,
            start: prevActiveIndexRange.start - 1,
            end: prevActiveIndexRange.end - 1,
        }));
        }
    };

    const handleArrowButtonClickRight = () => {
        if (activeIndexRange.end < filteredCards.length) {
        setActiveIndexRange((prevActiveIndexRange) => ({
            ...prevActiveIndexRange,
            start: prevActiveIndexRange.start + 1,
            end: prevActiveIndexRange.end + 1,
        }));
        }
    };

    const getBlogTitle = () => {
        if (activeButton === 'design') {
        return 'Select A Design Blog Article';
        } else if (activeButton === 'engineering') {
        return 'Select An Engineering Blog Article';
        } else if (activeButton === 'all') {
        return 'Select A Blog Article';
        } else if (activeButton === 'product') {
        return 'Select A Product Blog Article';
        } else {
        return '';
        }
    };

    const renderBlogCards = () => {
        return filteredCards
          .slice(activeIndexRange.start, activeIndexRange.end)
          .map((card, index) => {
            const truncatedTitle = card.title.substring(0, 106) + (card.title.length > 106 ? "..." : "");
      
            return (
              <TextButton
                key={index}
                className={`blog-text-button-${index + 1} blog-text-button`}
                isActive={selectedCardText === truncatedTitle}
                onClick={() => {
                  setSelectedCardText(card.title);
                  setCurrentBlog(card);
                }}
                text={truncatedTitle}
              />
            );
          });
      };

    const hideSample = () => {
        if (currentBlog && currentBlog.pdf) {
        return (
            <div className="position-sample-blog">
                <SampleBlog 
                    currentBlog={currentBlog} 
                    onOpen = {handleOpenBlogDetails} 
                />
            </div>
        );
        } else {
        return "";
        }
    };

  return (
    <div className='select-blog-article-container'>
        <div className='detailed-blog-container'>
            {showBlogDetails &&
                <Details 
                    project= {currentBlog}
                    onClose= {handleCloseBlogDetails}
                />
            }
        </div>
        <div className='select-article-container'>
            <div className='article-selector'>
                <h3 className={`blog-header ${activeButton}-blog-header`}>
                    {getBlogTitle()}
                </h3>
                <div className='blog-text-button-container'>
                    {renderBlogCards()}
                </div>
            </div>
            <div className='article-arrows-section'>
                <div className='blog-arrows'>
                    <ArrowButton
                        direction='left'
                        className='arrow-left arrow-sizes arrow-blog'
                        showBlogArrows={true}
                        disabled={activeIndexRange.start === 0}
                        onClick={handleArrowButtonClick}
                    />
                    <ArrowButton
                        direction='right'
                        className='arrow-right arrow-sizes arrow-blog'
                        showBlogArrows={true}
                        disabled={activeIndexRange.end === filteredCards.length}
                        onClick={handleArrowButtonClick}
                    />
                </div>
                <h3 className='article-arrows-text'>Additional Articles</h3>
            </div>
                {hideSample()}
        </div>
    </div>
  );
}

export default SelectArticle;
