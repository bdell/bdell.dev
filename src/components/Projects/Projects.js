import React from 'react';
import ProjectCard from './ProjectCard';

import './Projects.scss';

import projects from './Projects.config';

const Projects = () => {
    return (
        <div className="FullContainer ScrollStop">
            <div className="ProjectsContainer FullHeight">
                <h2>Projects</h2>
                <div className="FlexGrid ProjectScrollGrid">
                    {projects.map((project) => (
                        <ProjectCard {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
