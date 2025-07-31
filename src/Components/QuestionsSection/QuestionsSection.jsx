import React from 'react';
import './QuestionsSection.css';
import QuestionCard from "./QuestionCard";

const QuestionsSection = ({ questions, answers, currentQuestionIndex, onAnswerChange }) => {
    return(
        <section className="questions-section">
            <div className="questions-grid">
                {questions.map((question, index) => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    index={index}
                    isActive={index === currentQuestionIndex}
                    selectedAnswer={answers[question.id]}
                    onAnswerChange={onAnswerChange}
                />
                ))}
            </div>
        </section>
    );
};

export default QuestionsSection;
