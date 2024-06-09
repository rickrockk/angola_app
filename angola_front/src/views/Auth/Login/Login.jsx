import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../../stores/authStore';
import Logo from '../../../assets/auth_logo.svg';
import './Login.scss';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
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
            setErrorMessage(t('login.error_message'));
        }
    };

    return (
        <div className="container">
            <div className="main">
                <form className="login-form" onSubmit={handleSubmit}>
                    <img className="auth__logo" src={Logo} alt="Логотип" />
                    <h3 className="login__header">{t('login.header')}</h3>
                    <input
                        className="form-input"
                        type="email"
                        placeholder={t('login.email_placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        placeholder={t('login.password_placeholder')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="form-submit">{t('login.submit_button')}</button>
                    <p className="register-prompt">
                        {t('login.register_prompt')}{' '}
                        <Link to="/register"><span>{t('login.register_link')}</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default observer(Login);
