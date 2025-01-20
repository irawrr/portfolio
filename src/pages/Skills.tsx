import React from 'react';
import '../styles/Skills.css';
const Skills: React.FC = () => {
    const skills = [
        {
            title: 'HTML',
            description: 'Уверенно верстаю семантические страницы, использую современные теги и атрибуты для улучшения SEO и доступности.'
        },
        {
            title: 'CSS',
            description: 'Разрабатываю адаптивные и кроссбраузерные интерфейсы, использую Flexbox, Grid и препроцессоры SCSS для стилизации.'
        },
        {
            title: 'JavaScript',
            description: 'Пишу чистый и поддерживаемый код, активно использую новые возможности ES6+. Опыт работы с DOM и обработкой событий.'
        },
        {
            title: 'TypeScript',
            description: 'Использую для типизации данных и предотвращения ошибок на этапе компиляции. Работа с интерфейсами и дженериками.'
        },
        {
            title: 'React',
            description: 'Разработка компонентов с использованием хуков (useState, useEffect). Управление состоянием через Context API или Redux.'
        },
        {
            title: 'Git',
            description: 'Использую Git для ведения истории изменений, работы с ветками и совместной работы через GitHub.'
        },
        {
            title: 'Vite',
            description: 'Использую Vite для быстрого развертывания и сборки проектов, что ускоряет разработку и улучшает производительность.'
        },
        {
            title: 'Node.js',
            description: 'Опыт создания серверных приложений с использованием Node.js и Express. Работа с асинхронными операциями и API.'
        }
    ];

    return (
        <div className="skills-container">
            <h1>Мои навыки</h1>
            <p>Я постоянно развиваюсь и учусь новым технологиям. Вот некоторые из моих основных навыков:</p>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h2>{skill.title}</h2>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
