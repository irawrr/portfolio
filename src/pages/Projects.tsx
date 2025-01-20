import React, { useState } from 'react';
import '../styles/Projects.css';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

const projects: Project[] = [
    { id: 1, title: 'Портфолио', description: 'Сайт с информацией обо мне.', technologies: ['React', 'TypeScript'], link: '#' },
    { id: 2, title: 'Магазин', description: 'Интернет-магазин с корзиной.', technologies: ['Redux', 'JavaScript'], link: '#' },
    { id: 3, title: 'Чат', description: 'Простой чат с WebSocket.', technologies: ['Node.js', 'React'], link: '#' },
];

const Projects: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState('All');

    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );

    return (
        <div className="projects-container">
            <h1>Проекты</h1>
            <div className="filter">
                <label>Фильтр:</label>
                <select onChange={(e) => setSelectedTech(e.target.value)} value={selectedTech}>
                    <option value="All">Все</option>
                    <option value="React">React</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Node.js</option>
                    <option value="Redux">Redux</option>
                </select>
            </div>
            <div className="projects-list">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Технологии:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть проект</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
