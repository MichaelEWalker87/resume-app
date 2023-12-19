import React, { useState, useEffect } from 'react';
import LoadIcon from '../../components/LoadIcon/LoadIcon';
import db from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import AnimalButtons from '../../components/Blog/AnimalButtons/AnimalButtons';
import ZooBackground from '../../components/Blog/ZooBackground/ZooBackground';
import SelectArticle from '../../components/Blog/SelectArticle/SelectArticle';
import './Blog.scss';

function Blog(props) {
  const [filteredCards, setFilteredCards] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [blogCards, setBlogCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTimer, setLoadingTimer] = useState(false)
  const sortedBlogCards = filteredCards.sort((a, b) => b.date - a.date);


  useEffect(() => {
    const loadingDuration = 2000;
    
    setTimeout(() => {
      setLoadingTimer(true);
    }, loadingDuration);

    onSnapshot(collection(db, 'Blog'), (snapshot) => {
      setBlogCards(snapshot.docs.map((doc) => doc.data()));
      setIsLoading(false);
    });
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'all') {
      setFilteredCards(blogCards);
    } else {
      setFilteredCards(blogCards.filter((project) => project.field === buttonName));
    }
  };

  if (isLoading) {
    return (
      <div className={`loading-container ${loadingTimer ? '' : 'display-none'}`}>
        <LoadIcon title="Loading"/> 
      </div>
    );
  } else {
    return (
        <div className='blog-container'>
            <SelectArticle 
                filteredCards={sortedBlogCards}
                activeButton={activeButton}
            />
            <AnimalButtons
                handleButtonClick={handleButtonClick}
                activeButton={activeButton} 
                engineering={'engineering'}
                design={'design'}
                product={'product'}
                all={'all'}
            />
            <ZooBackground/>
            <div className='zoo-banners'/>
        </div>
    );
  }
}

export default Blog;

