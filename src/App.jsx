import './App.css';
import React, { useState } from 'react';
import charactersArray from './charactersarray.jsx';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const nextCard = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * charactersArray.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Guess the Star Wars Character!</h1>
        <strong>Put your Star Wars knowledge to the test!</strong>
        <p>Number of cards: 8</p>
        <div 
          className="flashcard" 
          onClick={handleFlip}
        >
          {isFlipped ? (
            <h2>{charactersArray[currentIndex].name}</h2>
          ) : (
            <img
              src={charactersArray[currentIndex].image} 
              alt="Star Wars Character" className='character-image'
            />
          )}
        </div>
        <button onClick={nextCard}>Next Character</button>
      </div>
    </div>
  );
};

export default App;