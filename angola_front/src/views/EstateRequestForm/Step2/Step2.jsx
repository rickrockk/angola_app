import React from 'react';
import { BlockLink } from '../../../components/BlockLink/BlockLink.jsx';
import './Step2.scss';
import { useTranslation } from 'react-i18next';

const Step2 = ({ updateFormData, nextStep, prevStep }) => {
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
                    {t('real_estate_application.step2.back_button')}
                </button>
                <h2 className="form__header">{t('real_estate_application.step2.header')}</h2>
                <div className="form__blocks">
                    <h3 className="form__subheader">{t('real_estate_application.step2.types_of_information')}</h3>
                    <BlockLink onClick={() => handleSelect('возраст')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.get_online_extract')}</h3>
                        <p className="form__subtext">{t('real_estate_application.step2.free_without_plans')}</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('фио')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.view_online_info')}</h3>
                        <p className="form__subtext">{t('real_estate_application.step2.free')}</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('обстоятельства')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.get_usrn_extract')}</h3>
                        <p className="form__subtext">{t('real_estate_application.step2.with_plans_and_schemes')}</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('ошибка')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.get_cadastral_plan')}</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.get_document_copy')}</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">{t('real_estate_application.step2.find_interested_parties')}</h3>
                    </BlockLink>
                </div>
            </div>
        </div>
    );
};

export default Step2;
