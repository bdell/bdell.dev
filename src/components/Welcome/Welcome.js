import React from 'react';

import './Welcome.scss';

const Welcome = () => {
    const scrollAboutMeIntoView = () => {
        const aboutMeElement = document.getElementById('AboutMeSection');
        if (aboutMeElement) {
            aboutMeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleKeyPress = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            scrollAboutMeIntoView();
        }
    };
    return (
        <div id="WelcomeSection" className="FullContainer FlexCentered WelcomePage">
            <div
                id="Welcome Scroller Button"
                role="button"
                tabIndex="0"
                className="WelcomeBackDrop DefaultBordered DefaultPadded"
                onClick={scrollAboutMeIntoView}
                onKeyDown={handleKeyPress}>
                <h1>Hello There</h1>
            </div>
        </div>
    );
};

export default Welcome;
