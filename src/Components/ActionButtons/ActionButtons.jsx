import React from 'react';
import './ActionButtons.css';

const ActionButtons = ({ onSubmit, onReset }) => {
    return(
        <section className="actions-section">
            <button onClick={onReset} className="btn btn-reset" type="button">
                Reset
            </button>
            <button onClick={onSubmit} className="btn btn-submit" type="button">
                Submit
            </button>
        </section>
    );
};

export default ActionButtons;