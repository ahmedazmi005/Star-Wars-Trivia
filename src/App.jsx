import './App.css';
import React, { useState } from 'react';
import charactersArray from './components/charactersarray.jsx';
import AnswerForm from './components/AnswerForm.jsx';
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const prevCard = () => {
    setIsFlipped(false);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(charactersArray.length - 1);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    const nextIndex = currentIndex + 1;
    if (nextIndex < charactersArray.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };
  const shuffleCards = () => {
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
        <div className='buttons'>
        <button   onClick={nextCard}>Next Character</button>
        <button  onClick={shuffleCards}>Shuffle Cards</button>
        <button   onClick={prevCard}>Previous Character</button>
        </div>
        <AnswerForm correctName={charactersArray[currentIndex].name} />
      </div>
    </div>
  );
};

export default App;