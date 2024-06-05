import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../../stores/authStore';
import Logo from '../../../assets/auth_logo.svg';
import './Login.scss';
import {userStore} from "../../../stores/userStore.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authStore.login({ email, password });
            navigate('/profile'); // Редирект на страницу профиля
            window.location.reload();
        } catch (error) {
            setErrorMessage('Ошибка при авторизации. Проверьте ваши данные.');
        }
    };

    return (
        <div className="container">
            <div className="main">
                <form className="login-form" onSubmit={handleSubmit}>
                    <img className="auth__logo" src={Logo} alt="Логотип" />
                    <h3 className="login__header">Авторизация</h3>
                    <input
                        className="form-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="form-submit">Войти</button>
                    <p className="register-prompt">Нет аккаунта? <Link to="/register"><span>Зарегистрироваться</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default observer(Login);
