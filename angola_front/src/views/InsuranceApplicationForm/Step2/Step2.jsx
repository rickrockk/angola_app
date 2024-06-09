import React from 'react';
import './Step2.scss';
import { BlockLink } from "../../../components/BlockLink/BlockLink.jsx";
import { useTranslation } from 'react-i18next';

const Step2 = ({ updateFormData, setFormData, nextStep, goToStep, prevStep }) => {
    const { t } = useTranslation();

    const handleSelect = (type) => {
        updateFormData({ recipient: type });
        nextStep();
    };

    const handleBack = () => {
        setFormData({});
        prevStep(1);
    };

    return (
        <div className="container">
            <div className="step step-2">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 0L0 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('insurance_application.step2.back_button')}
                </button>
                <h2 className="form__header">{t('insurance_application.step2.header')}</h2>
                <button onClick={() => handleSelect('себе')} className="form__recipient-select">
                    {t('insurance_application.step2.options.self')}
                </button>
                <button onClick={() => handleSelect('ребёнку')} className="form__recipient-select">
                    {t('insurance_application.step2.options.child')}
                </button>
            </div>
        </div>
    );
};

export default Step2;
