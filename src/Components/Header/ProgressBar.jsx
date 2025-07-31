import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({answered, total}) => {
    const progressPercentage = (answered / total) * 100;
    
    return (
        <div className="progress-container">
            <div className="progress-text">
                Progress: {answered}/{total} completed
            </div>
            <div className="progress-bar">
                <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;