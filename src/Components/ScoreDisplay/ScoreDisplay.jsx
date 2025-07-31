import React from 'react';
import './ScoreDisplay.css';

const ScoreDisplay = ({ score, totalQuestions, show }) => {
  if (!show) return null;

  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = (score, total) => {
    if (score >= 10) return "Excellent work!";
    if (score >= 8) return "Good job!";
    if (score >= 6) return "Keep practicing!";
    return "It's Okay. Let's Try again!";
  };

  return (
    <section className="score-section">
      <div className="score-card">
        <h2 className="score-title">Your Score</h2>
        <div className="score-display">
          <span className="score-number">{score}</span>
          <span className="score-total">/{totalQuestions}</span>
        </div>
        <div className="score-percentage">{percentage}%</div>
        <div className="score-message">
          {getScoreMessage(score, totalQuestions)}
        </div>
      </div>
    </section>
  );
};

export default ScoreDisplay;