import React, { useState } from "react";

const AnswerForm = ({ correctName }) => {  
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [streak, setStreak] = useState(0);

    const onCheckAnswer = (e) => {
        e.preventDefault();
        const isCorrect = userAnswer.toLowerCase() === correctName.toLowerCase();
        if (isCorrect) {
            setStreak(streak + 1);
            setFeedback(`Correct! Streak: ${streak + 1}`);
        } else {
            setStreak(0);
            setFeedback(`Try again! Streak: 0`);
        }
        
    };

    return (
        <div>
            <form onSubmit={onCheckAnswer}>
                <input 
                    type="text" 
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer" 
                />
                <button type="submit" className="button submit">
                    Submit
                </button>
            </form>
            {feedback && <p>{feedback}</p>}
        </div>
    );
};

export default AnswerForm;