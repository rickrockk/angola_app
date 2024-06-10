import React from 'react';
import './Step3.scss';
import { useTranslation } from 'react-i18next';

const Step3 = ({ prevStep, nextStep }) => {
    const { t } = useTranslation();

    const handleForward = () => {
        nextStep();
    };

    const handleBack = () => {
        prevStep(2);
    };

    return (
        <div className="container">
            <div className="step step-4">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 0L0 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('insurance_application.step3.back_button')}
                </button>
                <h2 className="form__header">{t('insurance_application.step3.header')}</h2>
                <ul className="info__list">
                    <li className="info__item">{t('insurance_application.step3.requirements.passport')}</li>
                </ul>
                <h3 className="form-subheader">{t('insurance_application.step3.execution_time.subheader')}</h3>
                <p className="form-text">{t('insurance_application.step3.execution_time.text')}</p>
                <p className="form-text">{t('insurance_application.step3.confirm_details')}</p>
                <h3 className="form-subheader">{t('insurance_application.step3.result.subheader')}</h3>
                <p className="form-text">{t('insurance_application.step3.result.text')}</p>
                <button className="submit-button" onClick={handleForward}>{t('insurance_application.step3.next_button')}</button>
            </div>
        </div>
    );
};

export default Step3;
