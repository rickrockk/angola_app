import React from 'react';
import { useTranslation } from 'react-i18next';
import './Step5.scss';

const Step5 = ({ prevStep, nextStep }) => {
    const { t } = useTranslation();

    const handleForward = () => {
        nextStep();
    };

    const handleBack = () => {
        prevStep(4);
    };

    return (
        <div className="container">
            <div className="step step-4">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('real_estate_application.step5.back_button')}
                </button>
                <h2 className="form__header">{t('real_estate_application.step5.header')}</h2>
                <div className="form__info">
                    <ul className="info__list">
                        <li className="info__item">{t('real_estate_application.step5.items.item1')}</li>
                        <li className="info__item">{t('real_estate_application.step5.items.item2')}</li>
                        <li className="info__item">{t('real_estate_application.step5.items.item3')}</li>
                    </ul>
                    <div className="info__text">
                        <h3 className="form__subheader">{t('real_estate_application.step5.time_header')}</h3>
                        <p className="form-text">{t('real_estate_application.step5.time_text')}</p>
                        <h3 className="form__subheader">{t('real_estate_application.step5.cost_header')}</h3>
                        <p className="form-text">{t('real_estate_application.step5.cost_text')}</p>
                        <h3 className="form__subheader">{t('real_estate_application.step5.result_header')}</h3>
                        <p className="form-text">{t('real_estate_application.step5.result_text')}</p>
                    </div>
                    <button className="submit-button" onClick={handleForward}>{t('real_estate_application.step5.continue_button')}</button>
                </div>
            </div>
        </div>
    );
};

export default Step5;
