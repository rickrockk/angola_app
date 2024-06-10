import React from 'react';
import { useTranslation } from 'react-i18next';
import './step3.scss';
import {BlockLink} from "../../../components/BlockLink/BlockLink.jsx";


const Step3 = ({ updateFormData, nextStep, prevStep }) => {
    const { t } = useTranslation();
    const handleSelect = (vaccine_type) => {
        updateFormData({ vaccine_type });
        nextStep();
    };

    const handleBack = () => {
        prevStep();
    };
    return (
        <div className="container">
            <div className="step step-3">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('vaccination_appointment.step3.back_button')}
                </button>
                <h2 className="form__header">{t('vaccination_appointment.step3.header')}</h2>
                <BlockLink onClick={() => handleSelect('covid')}>
                    <h3 className="form__reason">{t('vaccination_appointment.step3.covid')}</h3>
                </BlockLink>
                <BlockLink onClick={() => handleSelect('flu')}>
                    <h3 className="form__reason">{t('vaccination_appointment.step3.flu')}</h3>
                </BlockLink>
                <BlockLink onClick={() => handleSelect('hep_b')}>
                    <h3 className="form__reason">{t('vaccination_appointment.step3.hep_b')}</h3>
                </BlockLink>
            </div>
        </div>
    );
};

export default Step3;
