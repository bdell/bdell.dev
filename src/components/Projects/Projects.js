import React from 'react';
import ProjectCard from './ProjectCard';

import projects from './Projects.config';

const Projects = () => {
    return (
        <div className="FullContainer FlexCentered">
            {projects.map((project) => (
                <ProjectCard key={`project-${project.projectId}`} {...project} />
            ))}
        </div>
    );
};

export default Projects;
