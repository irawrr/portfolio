import React from 'react';
import '../styles/About.css'; // Подключение стилей для страницы

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>Обо мне</h1>
            <p>
                Меня зовут <strong>Ира</strong>. <br/>
                Я занимаюсь фронтенд-разработкой. <br/>
                У меня есть опыт работы с такими технологиями, как HTML, CSS, JavaScript, TypeScript и React.
            </p>
            <h2>Образование</h2>
            <p>
                Я обучаюсь в ДВФУ по специальности системный программист.
                В процессе обучения я получил(а) глубокие знания в области разработки веб-приложений.
            </p>
            <h2>Интересы</h2>
            <p>
                В свободное время я люблю заниматься графическим дизайном и дизайном сайтов.
                Также мне нравится изучать новые технологии и развиваться в профессиональной сфере.
            </p>
        </div>
    );
};

export default About;