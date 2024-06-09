import './Step1.scss';
import { Link } from "react-router-dom";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Step1 = ({ updateFormData, nextStep }) => {
    const { t } = useTranslation();

    const handleStart = () => {
        nextStep();
    };

    return (
        <div className="container">
            <div className="container__content">
                <Link className="back-button" to='/appointment'>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>{t('passport_application.step1.back_button')}
                </Link>
                <h2 className="form__header">{t('passport_application.step1.header')}</h2>
                <div className="step step-1">
                    <p className="step__desc">
                        {t('passport_application.step1.desc')}
                    </p>
                    <p className="step__undertext">{t('passport_application.step1.undertext')}</p>
                    <button className="start-button" onClick={handleStart}>{t('passport_application.step1.start_button')}</button>
                </div>
            </div>
        </div>
    );
};

export default Step1;
