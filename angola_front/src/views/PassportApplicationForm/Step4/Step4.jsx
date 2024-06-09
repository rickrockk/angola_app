import React from 'react';
import './Step4.scss';
import { useTranslation } from 'react-i18next';

const Step4 = ({ prevStep, goToStep, nextStep, applicationType }) => {
    const { t } = useTranslation();

    const handleForward = () => {
        if (applicationType === 'получение') {
            goToStep(6);
        } else {
            nextStep();
        }
    }

    const handleBack = () => {
        if (applicationType === 'получение') {
            prevStep(2); // Возвращаемся к этапу выбора типа заявки
        } else if (applicationType === 'замена') {
            prevStep(3); // Возвращаемся к этапу выбора причины замены
        }
    };

    return (
        <div className="container">
            <div className="step step-4">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('passport_application.step4.back_button')}
                </button>
                <h2 className="form__header">{t('passport_application.step4.header')}</h2>
                <ul className="requirements-list">
                    <li className="requirement-item">{t('passport_application.step4.requirements.0')}</li>
                    <li className="requirement-item">{t('passport_application.step4.requirements.1')}</li>
                    <li className="requirement-item">{t('passport_application.step4.requirements.2')}</li>
                    <li className="requirement-item">{t('passport_application.step4.requirements.3')}</li>
                </ul>
                <h3 className="form-subheader">{t('passport_application.step4.execution_time.subheader')}</h3>
                <p className="form-text">{t('passport_application.step4.execution_time.text')}</p>
                <h3 className="form-subheader">{t('passport_application.step4.cost.subheader')}</h3>
                <p className="form-text">{t('passport_application.step4.cost.text1')}</p>
                <p className="form-text">{t('passport_application.step4.cost.text2')}</p>
                <h3 className="form-subheader">{t('passport_application.step4.what_next.subheader')}</h3>
                <p className="form-text">{t('passport_application.step4.what_next.text')}</p>
                <button className="submit-button" onClick={handleForward}>{t('passport_application.step4.next_button')}</button>
            </div>
        </div>
    );
};

export default Step4;
