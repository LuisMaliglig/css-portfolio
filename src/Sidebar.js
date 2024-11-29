import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedProject, selectedProject }) => {
    const projects = [
        "Instagram Clone",
        "Python Trivia Game",
        "Akap",
        "Freedom Froggie",
        "IChooSe"
    ];

    return (
        <div className="sidebar">
            {projects.map((project) => (
                <button
                    key={project}
                    onClick={() => setSelectedProject(project)}
                    className={selectedProject === project ? 'active' : ''}
                >
                    {project}
                </button>
            ))}
        </div>
    );
}

export default Sidebar;
