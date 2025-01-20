import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <img
                src="src/assets/cat.jpg"
                alt="Ваше фото"
                className="home-photo"
            />
            <h1 className="home-name">Irina K</h1>
            <p className="home-greeting"><strong>Добро пожаловать на мой сайт!</strong></p>
            <p>Здесь вы найдете информацию обо мне, моих навыках и проектах.</p>
        </div>
    );
};

export default Home;
