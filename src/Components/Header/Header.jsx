import React from 'react';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import NameInput from './Components/NameInput/NameInput';

//Pass Props
const Header = ({userName, onNameChange, }) => {
    return (
        <header className="headerSticky-top">
            <h1 className="title">Rounding Off to Nearest 10</h1>

            <ProgressBar
            answered={}
            total={}
            />
            
            <NameInput
            userName={userName}
            onNameChange={onNameChange}
            showError={}
            />

        </header>
    );
}

export default Header;