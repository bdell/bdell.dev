import React from 'react';

import './ProjectCard.scss';

const ProjectCard = (props) => {
    const { title, url, description, image, secondaryLink, secondaryLinkText } = props;
    const openProjectLink = (url) => window.open(url, '_blank');
    return (
        <div className="ProjectCard">
            <div
                className="ProjectImageContainer"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => openProjectLink(url)}></div>
            <div className="FlexColumn ProjectDescription">
                <span className="CardTitle" onClick={() => openProjectLink(url)} role="button">
                    {title}
                </span>
                {secondaryLink && (
                    <a
                        href={`${secondaryLink}`}
                        className="ProjectSecondaryLinkText"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span>{secondaryLinkText ? secondaryLinkText : `${secondaryLink}`}</span>
                    </a>
                )}
                <span className="ProjectDescriptionText">{description}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
