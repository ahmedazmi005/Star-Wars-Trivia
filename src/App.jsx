import './App.css';
import React, {useState} from 'react';
import QuestionCard from './QuestionCard';

const App = () => {
const [character, setCharacter] = useState('');
  return (
    <div className="App">
    <div className="header">
    <h1>Guess the Star Wars Character!</h1>
    <QuestionCard image='public/images/darthvader.jpeg' alt='Darth Vader' className='image'/>
    </div>
    
    </div>
  )
}

export default App;