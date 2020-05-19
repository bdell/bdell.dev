import React from 'react';

import './TopBar.scss';

const TopBar = () => {
    return (
        <div className="TopBar FullWidth">
            <div className="FlexCentered FullContainer">
                <div>bdell.dev</div>
                <div className="FlexGrow" />
                <div>Hello</div>
                <div>Projects</div>
                <div>About</div>
                <div>github</div>
            </div>
        </div>
    );
};

export default TopBar;
