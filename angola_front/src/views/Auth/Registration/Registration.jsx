import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../../stores/authStore';
import { userStore } from '../../../stores/userStore';
import Logo from '../../../assets/auth_logo.svg';
import './Registration.scss';
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const { t } = useTranslation();
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
            setErrorMessage(t('registration.error_message_password'));
            return;
        }
        try {
            await authStore.register({ first_name: firstName, email, phone_number: phoneNumber, password });
            navigate("/login")
        } catch (error) {
            setErrorMessage(t('registration.error_message_server'));
        }
    };

    return (
        <div className="container">
            <div className="main">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <img className="auth__logo" src={Logo} alt="Логотип" />
                    <h3 className="register__header">{t('registration.header')}</h3>
                    <input
                        className="form-input"
                        type="text"
                        placeholder={t('registration.name_placeholder')}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="email"
                        placeholder={t('registration.email_placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="tel"
                        placeholder={t('registration.phone_placeholder')}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        placeholder={t('registration.password_placeholder')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        placeholder={t('registration.confirm_password_placeholder')}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="form-submit">{t('registration.submit_button')}</button>
                    <p className="login-prompt">
                        {t('registration.login_prompt')}{' '}
                        <Link to="/login"><span>{t('registration.login_link')}</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default observer(Registration);
