import React, { useState } from 'react';
import '../styles/Registration.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const { login, password, passrepeat } = event.target.elements;

        try {
            if (password.value === passrepeat.value) {
                const response = await axios.post('/api/register', {
                    login: login.value,
                    password: password.value,
                })

                if (response.status === 200) {
                    setIsRegistered(true);
                }
            }
        } catch (error) {
            console.error("Error on register: ", error);
        }
    };

    const handleBackToLogin = () => {
        navigate('login');
    };

    return (
        <div className="registration-container">
            <img
                src={"https://i.gyazo.com/d779c6c0633c897dfe3a7201e701a602.png"}
                alt={'logo'}
                style={{
                    width: 100,
                    height: 100
                }}
            />
            {!isRegistered ? (
                <form className="registration-form" onSubmit={handleSubmit}>
                    <input name="login" type="text" placeholder="Логин" required />
                    <input name="password" type="password" placeholder="Пароль" required />
                    <input name="passrepeat" type="password" placeholder="Повторите пароль" required />
                    <button type="submit">Создать аккаунт</button>
                </form>
            ) : (
                <div>
                    <p>Регистрация успешна!</p>
                    <button onClick={handleBackToLogin}>Вернуться на страницу входа</button>
                </div>
            )}
        </div>
    );
}

export default Registration;
