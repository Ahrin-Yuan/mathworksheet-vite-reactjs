import React from 'react';
import ProgressBar from './ProgressBar';
import NameInput from './NameInput';

//Pass Props
const Header = ({userName, onNameChange, answeredQuestions, totalQuestions, showNameError }) => {
    return (
        <header className="headerSticky-top">
            <h1 className="title">Rounding Off to Nearest 10</h1>

            <ProgressBar
            answered={answeredQuestions}
            total={totalQuestions}
            />

            <NameInput
            userName={userName}
            onNameChange={onNameChange}
            showError={showNameError}
            />

        </header>
    );
}

export default Header;