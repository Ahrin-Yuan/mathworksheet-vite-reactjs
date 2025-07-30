import { useState } from 'react'
import './App.css'

// Import Components
import Header from "./Components/Header/Header";
import ActionButtons from "./Components/ActionButtons/ActionButtons";
import Footer from "./Components/Footer/Footer";


// Import data
import { questionsData } from './data/questionsData';

function App() {
  // State management
  const [userName, setUserName] = useState("");
  const [answers, setAnswers] = useState({});
  const [showNameError, setShowNameError] = useState(false);

    // Handle answer selection
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));


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
    setShowNameError(false);
    setAnswers({});
  }

  return (
    <div className="app">
      <Header
        userName={userName}
        onNameChange={handleNameChange}
        showNameError={showNameError}
        totalQuestions={questionsData.length}
      />

      <div className="main-content">
        {/* Instructions */}
        <section className="instructions">
          <p>Circle the correct answers.</p>
        </section>

        <QuestionsSection/>

        <ActionButtons
          onReset={handleReset}
          onSubmit={handleSubmit}
        />

        <ScoreDisplay/>
        
      </div>



      <Footer />

    </div>
  );
};
}

export default App;
