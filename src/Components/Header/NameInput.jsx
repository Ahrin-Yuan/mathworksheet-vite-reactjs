import React from 'react';
import './NameInput.css';

const NameInput = ({userName, onNameChange, showError}) => {
    return (
        <section className="name-section">
            <div className="name-input-container">
                <label htmlFor="userName" className="name-label">
                Name:
                </label>
                <input 
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={onNameChange}
                    className={`name-input ${showError ? "error" : ""}`}
                    placeholder="Enter your name"
                />
                {showError && (
                <span className="error-message">
                    Please enter your name before submitting
                </span>
                )}
            </div>
        </section>
    );
};

export default NameInput;