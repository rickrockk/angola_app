import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/auth_logo.svg';
import './Auth.scss';
import { useTranslation } from 'react-i18next';

export default function Auth() {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="main">
                <div className="name">
                    <img className="auth__logo" src={Logo} alt="Логотип" />
                    <h3>{t('auth.title')}</h3>
                    <p className="gray">{t('auth.description')}</p>
                    <button className="first">{t('auth.online_bank')}</button>
                    <button className="second">{t('auth.service_center')}</button>
                    <Link to="/register">{t('auth.other_method')}</Link>
                </div>
                <p>
                    {t('auth.already_registered')}{' '}
                    <Link to="/login">
                        <span>{t('auth.login')}</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
