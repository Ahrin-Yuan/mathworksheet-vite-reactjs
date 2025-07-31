import { useState } from 'react'
import './App.css'

// Import Components
import Header from "./Components/Header/Header";
import ActionButtons from "./Components/ActionButtons/ActionButtons";
import QuestionsSection from "./Components/QuestionsSection/QuestionsSection";
import ScoreDisplay from "./Components/ScoreDisplay/ScoreDisplay";
import Footer from "./Components/Footer/Footer";


// Import data
import { questionsData } from './data/questionsData';

function App() {
  // State management
  const [userName, setUserName] = useState("");
  const [answers, setAnswers] = useState({});
  const [showNameError, setShowNameError] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(false);

    // Handle answer selection
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));

    // Auto-advance to next question after short delay
    setTimeout(() => {
      setCurrentQuestionIndex(prev => {
        if (prev < questionsData.length - 1) {
          return prev + 1;
        } else {
          return prev; // Don't go past the last question
        }
      });
    }, 400); // slight delay so click still feels responsive
  };


    // Handle name input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    if (showNameError && e.target.value.trim()) {
      setShowNameError(false);
    }
  };

    // Calculate score
  const calculateScore = () => {
    let correctCount = 0;
    questionsData.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  // Handle submit
  const handleSubmit = () => {
    // Validate name
    if (!userName.trim()) {
      setShowNameError(true);
      return;
    }
    const finalScore = calculateScore();
      setScore(finalScore);
      setShowScore(true);
  }

 // Handle reset
  const handleReset = () => {
    setUserName("");
    setAnswers({});
    setShowNameError(false);
    setCurrentQuestionIndex(0);
    setScore(null);
    setShowScore(false);
  }

  // Calculate answered questions count
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="app">
      <Header
        userName={userName}
        onNameChange={handleNameChange}
        showNameError={showNameError}
        answeredQuestions={answeredQuestions}
        totalQuestions={questionsData.length}
      />

      <div className="main-content">
        {/* Instructions */}
        <section className="instructions">
          <p>Circle the correct answers.</p>
        </section>

        <QuestionsSection
          questions={questionsData}
          answers={answers}
          currentQuestionIndex={currentQuestionIndex}
          onAnswerChange={handleAnswerChange}
        />

        <ActionButtons
          onReset={handleReset}
          onSubmit={handleSubmit}
        />

        <ScoreDisplay
          score={score}
          totalQuestions={questionsData.length}
          show={showScore}
        />
        
      </div>



      <Footer />

    </div>
  );
};


export default App;
