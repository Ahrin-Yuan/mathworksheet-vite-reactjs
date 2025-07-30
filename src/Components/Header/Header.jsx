import React from 'react';

//Pass Props
const Header = () => {
    return (
        <header className="headerSticky-top">
            <h1 className="title">Rounding Off to Nearest 10</h1>

            <ProgressBar/>
            <NameInput/>

        </header>
    );
}

export default Header;