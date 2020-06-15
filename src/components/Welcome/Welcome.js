import React from 'react';

import './Welcome.scss';

const Welcome = () => {
    const scrollAboutMeIntoView = () => {
        const aboutMeElement = document.getElementById('AboutMeSection');
        if (aboutMeElement) {
            aboutMeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id="WelcomeSection" className="FullContainer FlexCentered WelcomePage">
            <div className="WelcomeBackDrop DefaultBordered DefaultPadded" onClick={scrollAboutMeIntoView}>
                <h1>Hello There</h1>
            </div>
        </div>
    );
};

export default Welcome;
