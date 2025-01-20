import React, { useState } from 'react';
import '../styles/Contact.css'; // Подключение стилей для страницы

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Сообщение отправлено!');
        setFormData({ name: '', email: '', message: '' }); // Очистить форму
    };

    return (
        <div className="contacts-container">
            <header className="contacts-header">
                <h1>Контакты</h1>
            </header>

            <section className="contacts-info">
                <h2>Свяжитесь с нами</h2>
                <p>
                    Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, пожалуйста, заполните форму ниже,
                    и мы свяжемся с вами как можно скорее.
                </p>
            </section>

            <section className="contacts-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Сообщение:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Отправить сообщение</button>
                </form>
            </section>

            <section className="contacts-footer">
                <h2>Наши контакты</h2>
                <p>
                    Email: <a href="mailto:xyomaxo@gmail.com">xyomaxo@gmail.com</a>
                </p>
                <p>Телефон: +7 (914) 977-3922</p>
            </section>
        </div>
    );
};

export default Contact;
