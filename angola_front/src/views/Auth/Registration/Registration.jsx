import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../../stores/authStore';
import { userStore } from '../../../stores/userStore';
import Logo from '../../../assets/auth_logo.svg';
import './Registration.scss';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Пароли должны совпадать');
            return;
        }
        try {
            await authStore.register({ first_name: firstName, email, phone_number: phoneNumber, password });
            navigate("/login")
        } catch (error) {
            setErrorMessage('Ошибка подключения к серверу');
        }
    };

    return (
        <div className="container">
            <div className="main">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <img className="auth__logo" src={Logo} alt="Логотип" />
                    <h3 className="register__header">Регистрация</h3>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="ФИО"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
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
                        type="tel"
                        placeholder="Номер телефона"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                    <input
                        className="form-input"
                        type="password"
                        placeholder="Подтвердите пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="form-submit">Зарегистрироваться</button>
                    <p className="login-prompt">Уже зарегистрировались? <Link to="/login"><span> Войти</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default observer(Registration);
