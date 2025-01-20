import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/projectsSlice';
import '../styles/AddProject.css';

interface AddProjectProps {
    onClose: () => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [link, setLink] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !technologies || !link) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const newProject = {
            id: Date.now(),
            title,
            description,
            technologies: technologies.split(',').map((tech) => tech.trim()),
            link,
        };

        dispatch(addProject(newProject));
        onClose(); // Закрываем модальное окно
        setTitle('');
        setDescription('');
        setTechnologies('');
        setLink('');
    };

    return (
        <form className="add-project-form" onSubmit={handleSubmit}>
            <h2>Добавить новый проект</h2>
            <input
                type="text"
                placeholder="Название проекта"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Описание проекта"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="Технологии (через запятую)"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
            />
            <input
                type="url"
                placeholder="Ссылка на проект"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <button type="submit">Добавить проект</button>
        </form>
    );
};

export default AddProject;
