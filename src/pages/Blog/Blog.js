import React, { useState, useEffect } from 'react';
import LoadIcon from '../../components/LoadIcon/LoadIcon';
import db from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import AnimalButtons from '../../components/Blog/AnimalButtons/AnimalButtons';
import './Blog.scss';

function Blog(props) {
  const [filteredCards, setFilteredCards] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [projectCards, setProjectCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onSnapshot(collection(db, 'Projects'), (snapshot) => {
      setProjectCards(snapshot.docs.map((doc) => doc.data()));
      setIsLoading(false);
    });
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'all') {
      setFilteredCards(projectCards);
    } else {
      setFilteredCards(projectCards.filter((project) => project.field === buttonName));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <AnimalButtons
          handleButtonClick={handleButtonClick}
          activeButton={activeButton} 
          engineering={'engineering'}
          design={'design'}
          product={'product'}
          all={'all'}
        />
      </div>
    );
  }
}

export default Blog;