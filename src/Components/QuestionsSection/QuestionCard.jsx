import React from 'react';

const QuestionCard = ({  question, index, isActive, selectedAnswer, onAnswerChange }) => {
    return (
        <div
        className={`question-card ${isActive ? "active" : "inactive"}`}
        >
            <h3 className="question-text">{question.question}</h3>
            <div className="options-container">
                {question.options.map((option) => (
                    <label
                        key={option.value}
                        className={`option-label ${
                        selectedAnswer === option.value ? "selected" : ""
                        }`}
                    >
                        <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.value}
                        checked={selectedAnswer === option.value}
                        onChange={() => onAnswerChange(question.id, option.value)}
                        className="option-input"
                        />
                        <span className="option-text">
                        {String.fromCharCode(97 + question.options.indexOf(option))}
                        . {option.label}
                        </span>
                </label>
                ))}
            </div>
        
        </div>
        

    );
};

export default QuestionCard;