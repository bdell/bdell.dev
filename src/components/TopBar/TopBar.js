import React from 'react';

import './TopBar.scss';

const TopBar = () => {
    return (
        <div className="TopBar FullWidth">
            <div className="FlexCentered TopBarContentContainer">
                <div className="FlexGrow" />
                <a href="https://github.com/bdell/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/GitHub-Mark-Light-32px.png`} alt="Github Link" />
                </a>
            </div>
        </div>
    );
};

export default TopBar;
