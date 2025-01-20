import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Подключение стилей для страницы


const Header: React.FC = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">Обо мне</Link></li>
                    <li><Link to="/projects">Проекты</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                    <li><Link to="/skills">Навыки</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
