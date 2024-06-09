import React from 'react';
import { useTranslation } from 'react-i18next';
import './Step4.scss';

const Step4 = ({ prevStep, nextStep }) => {
    const { t } = useTranslation();

    const handleForward = () => {
        nextStep();
    };

    const handleBack = () => {
        prevStep(3);
    };

    return (
        <div className="container">
            <div className="step step-4">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('real_estate_application.step4.back_button')}
                </button>
                <h2 className="form__header">{t('real_estate_application.step4.header')}</h2>
                <div className="form__info">
                    <h3 className="form__subheader">{t('real_estate_application.step4.full_name')}</h3>
                    <p className="form-text">{t('real_estate_application.step4.description')}</p>
                    <h3 className="form__subheader">{t('real_estate_application.step4.contains')}</h3>
                    <ul className="info__list">
                        <li className="info__item">{t('real_estate_application.step4.items.item1')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item2')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item3')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item4')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item5')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item6')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item7')}</li>
                        <li className="info__item">{t('real_estate_application.step4.items.item8')}</li>
                    </ul>
                    <div className="form__cost">
                        <h3 className="form-subheader">{t('real_estate_application.step4.cost')}</h3>
                        <p className="form-text">{t('real_estate_application.step4.price')}</p>
                    </div>
                    <button className="submit-button" onClick={handleForward}>{t('real_estate_application.step4.continue_button')}</button>
                </div>
            </div>
        </div>
    );
};

export default Step4;
