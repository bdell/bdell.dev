import React from 'react';

import './ProjectCard.scss';

const ProjectCard = (props) => {
    const { title, url, description, image } = props;
    const openProjectLink = (url) => window.open(url, '_blank');
    const handleClick = () => openProjectLink(url);
    const handleKeyPress = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            handleClick();
        }
    };
    return (
        <div
            id={`${title} project card`}
            className="ProjectCard"
            onKeyDown={handleKeyPress}
            onClick={handleClick}
            role="button"
            tabIndex="0">
            <div className="ProjectImageContainer" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="FlexColumn ProjectDescription">
                <span className="CardTitle">{title}</span>
                <span className="ProjectDescriptionText">{description}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
