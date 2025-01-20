import React from 'react';
import '../styles/Projects.css'; // Подключаем стили

// Тип для проекта
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

// Массив с проектами
const projects: Project[] = [
    {
        id: 1,
        title: 'Портфолио',
        description: 'Сайт-портфолио с использованием React и TypeScript.',
        technologies: ['React', 'TypeScript', 'CSS'],
        link: 'https://github.com/yourname/portfolio',
    },
    {
        id: 2,
        title: 'Интернет-магазин',
        description: 'Прототип интернет-магазина с корзиной и фильтрацией.',
        technologies: ['React', 'Redux', 'JavaScript'],
        link: 'https://github.com/yourname/ecommerce',
    },
    {
        id: 3,
        title: 'Чат-приложение',
        description: 'Простой чат с использованием WebSocket.',
        technologies: ['Node.js', 'Socket.io', 'React'],
        link: 'https://github.com/yourname/chat-app',
    },
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1>Мои проекты</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Технологии:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Посмотреть на GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
