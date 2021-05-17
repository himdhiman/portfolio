import React from 'react';
import ProjectCard from './ProjectCard';



function Projects() {
    var projects = require('./ProjectDetail.json');

    return (
        <div>
            <h1 id = "heading">Projects</h1>
            <ProjectCard projects = {projects.projects} />
        </div>
    )
}

export default Projects;
