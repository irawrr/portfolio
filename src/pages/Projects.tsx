import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setProjects, removeProject } from '../store/projectsSlice';
import AddProject from '../components/AddProject';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.projects.items);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTech, setSelectedTech] = useState('All');

    useEffect(() => {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            dispatch(setProjects(JSON.parse(savedProjects)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const handleRemove = (id: number) => {
        dispatch(removeProject(id));
    };

    // Фильтрация проектов по выбранной технологии
    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );

    return (
        <div className="projects-container">
            <h1>Проекты</h1>

            {/* Фильтр */}
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

            {/* Список проектов */}
            <div className="projects-list">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Технологии:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть проект</a>
                        <button onClick={() => handleRemove(project.id)}>Удалить проект</button>
                    </div>
                ))}
            </div>

            {/* Кнопка "Плюс" для добавления проекта */}
            <button className="add-project-button" onClick={() => setIsModalOpen(true)}>
                +
            </button>

            {/* Модальное окно с формой добавления проекта */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                            ✖
                        </button>
                        <AddProject onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
