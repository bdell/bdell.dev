import React from 'react';

import './TopBar.scss';

const TopBar = () => {
    const openGithubLink = () => {
        window.open(`https://github.com/bdell?tab=repositories`, '_blank');
    };
    return (
        <div className="TopBar FullWidth">
            <div className="FlexCentered TopBarContentContainer">
                <div>bdell.dev</div>
                <div className="FlexGrow" />
                <div className="MenuLink FlexCentered">Hello</div>
                <div className="MenuLink FlexCentered">Projects</div>
                <div className="MenuLink FlexCentered">About</div>
                <div className="MenuLink FlexCentered" onClick={openGithubLink}>
                    Github
                </div>
            </div>
        </div>
    );
};

export default TopBar;
