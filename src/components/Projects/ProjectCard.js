import React from 'react';

const ProjectCard = (props) => {
    const { title, url, description, image } = props;
    return (
        <div>
            <span>{title}</span>
            <span>{url}</span>
            <span>{description}</span>
            <span>{image}</span>
        </div>
    );
};

export default ProjectCard;
