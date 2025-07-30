import { useState } from 'react'
import './App.css'

// Import Components
import Header from "./Components/Header/Header";
import ActionButtons from "./Components/ActionButtons/ActionButtons";
import QuestionsSection from "./Components/QuestionsSection/QuestionsSection";
import Footer from "./Components/Footer/Footer";


// Import data
import { questionsData } from './data/questionsData';

function App() {
  // State management
  const [userName, setUserName] = useState("");
  const [answers, setAnswers] = useState({});
  const [showNameError, setShowNameError] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  // Handle submit
  const handleSubmit = () => {
    // Validate name
    if (!userName.trim()) {
      setShowNameError(true);
      return;
    }
  
  }

  const handleReset = () => {
    setAnswers({});
    setShowNameError(false);
    setCurrentQuestionIndex(0);
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

        {/* <ScoreDisplay/> */}
        
      </div>



      <Footer />

    </div>
  );
};


export default App;
