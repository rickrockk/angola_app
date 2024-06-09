import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Step10Confirmation.scss';

const Step10Confirmation = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="step step-10">
                <h2 className="form__header">{t('passport_application.step10.header')}</h2>
                <div className="confirmation__details">
                    <p>{t('passport_application.step10.details.check_duration')}</p>
                    <p>{t('passport_application.step10.details.email_notification')}</p>
                </div>
                <Link to='/' className="home-button">{t('passport_application.step10.home_button')}</Link>
            </div>
        </div>
    );
};

export default Step10Confirmation;
