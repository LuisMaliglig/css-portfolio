import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import './App.css';
import overviewA from './assets/placeholder.png';

const projects = {
    "Instagram Clone": [
        { title: "Overview", content: "Overview content here", image: overviewA },
        { title: "Programming Languages", content: "Programming Languages content here" },
        { title: "My Role", content: "My Role content here" },
        { title: "Screenshot", content: "Screenshot content here", image: overviewA }
    ],
    "Python Trivia Game": [
        { title: "Overview", content: "Overview content here", image: overviewA },
        { title: "Programming Languages", content: "Programming Languages content here" },
        { title: "My Role", content: "My Role content here" },
        { title: "Screenshot", content: "Screenshot content here", image: overviewA }
    ],
    "Akap": [
        { title: "Overview", content: "Overview content here", image: overviewA },
        { title: "Programming Languages", content: "Programming Languages content here" },
        { title: "My Role", content: "My Role content here" },
        { title: "Screenshot", content: "Screenshot content here", image: overviewA }
    ],
    "Freedom Froggie": [
        { title: "Overview", content: "Overview content here", image: overviewA },
        { title: "Programming Languages", content: "Programming Languages content here" },
        { title: "My Role", content: "My Role content here" },
        { title: "Screenshot", content: "Screenshot content here", image: overviewA }
    ],
    "IChooSe": [
        { title: "Overview", content: "Overview content here", image: overviewA },
        { title: "Programming Languages", content: "Programming Languages content here" },
        { title: "My Role", content: "My Role content here" },
        { title: "Screenshot", content: "Screenshot content here", image: overviewA }
    ],
};

function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="app-container">
            <Sidebar setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
            <div className="content">
                {selectedProject ? (
                    <Carousel items={projects[selectedProject]} projectName={selectedProject} />
                ) : (
                    <div>Please select a project from the sidebar.</div>
                )}
            </div>
        </div>
    );
}

export default App;
