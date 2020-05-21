import React from 'react';
import ProjectCard from './ProjectCard';

import './Projects.scss';

import projects from './Projects.config';

const Projects = () => {
    return (
        <div className="FullContainer ScrollStop">
            <div className="ProjectsContainer">
                <h2>Projects</h2>
                <div className="FlexGrid">
                    {projects.map((project) => (
                        <div className="FlexCol" key={`project-${project.projectId}`}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
