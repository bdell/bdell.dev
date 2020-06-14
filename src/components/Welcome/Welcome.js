import React from 'react';

import './Welcome.scss';

const Welcome = () => {
    return (
        <div className="FullContainer FlexCentered WelcomePage">
            <div>
                <div className="WelcomeBackDrop DefaultBordered" />
                <h1>Hello There</h1>
            </div>
        </div>
    );
};

export default Welcome;
