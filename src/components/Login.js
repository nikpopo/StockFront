import React from 'react';
import '../styles/Login.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const { login, password } = event.target.elements;

        try {
            const response = await axios.post('/api/login', {
                login: login.value,
                password: password.value,
            })

            if (response.status === 200) {
                navigate('home');
            }
        } catch (error) {
            console.error("Error on login: ", error);
        }
    };

    return (
        <div className="login-container">
            <img
                src={"https://i.gyazo.com/d779c6c0633c897dfe3a7201e701a602.png"}
                alt={'logo'}
                style={{
                    width: 100,
                    height: 100
                }}
            />
            <form className="login-form" onSubmit={handleSubmit}>
                <input name="login" type="text" placeholder="Логин" required />
                <input name="password" type="password" placeholder="Пароль" required />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
