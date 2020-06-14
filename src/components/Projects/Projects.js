import React from 'react';
import ProjectCard from './ProjectCard';

import './Projects.scss';

import projects from './Projects.config';

const Projects = () => {
    return (
        <div className="ProjectsPage DefaultPadded">
            <div className="ProjectContainerTitle DefaultPadded FlexCentered">
                <span>Projects</span>
            </div>
            <div className="FlexHCentered ">
                <div className="ProjectCardGrid">
                    {projects.map((project) => (
                        <ProjectCard key={`project-${project.projectId}`} {...project} />
                    ))}
                </div>
            </div>
            <br clear="all" />
        </div>
    );
};

export default Projects;
