import React from 'react';

const ProgressBar = ({answered, total}) => {
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