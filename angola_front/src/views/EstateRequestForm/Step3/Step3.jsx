import React from 'react';
import { BlockLink } from '../../../components/BlockLink/BlockLink.jsx';
import { useTranslation } from 'react-i18next';
import './Step3.scss';

const Step3 = ({ updateFormData, nextStep, prevStep }) => {
    const { t } = useTranslation();

    const handleSelect = (cause) => {
        updateFormData({ cause });
        nextStep();
    };

    const handleBack = () => {
        prevStep(2); // Возвращаемся к этапу выбора типа заявки
    };

    return (
        <div className="container">
            <div className="step step-3">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('real_estate_application.step3.back_button')}
                </button>
                <h2 className="form__header">{t('real_estate_application.step3.header')}</h2>
                <div className="form__blocks">
                    <BlockLink onClick={() => handleSelect('ошибка')}>
                        <h3 className="form__reason">{t('real_estate_application.step3.characteristics_and_rights')}</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">{t('real_estate_application.step3.about_real_estate')}</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">{t('real_estate_application.step3.transition_of_rights')}</h3>
                    </BlockLink>
                </div>
            </div>
        </div>
    );
};

export default Step3;
