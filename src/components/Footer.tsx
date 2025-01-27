import React from 'react';
import '../styles/Footer.css'; // Подключаем стили

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Irina K. Все права защищены.</p>
                <div className="footer-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:youremail@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
