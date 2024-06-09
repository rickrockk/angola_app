import React, { useState } from 'react';
import './Step6.scss';
import { useTranslation } from 'react-i18next';

const Step6 = ({ prevStep, updateFormData, submitFormData }) => {
    const { t } = useTranslation();
    const insuranceCompanies = [
        { name: "ООО Nossa Seguros", value: "страховая 1" },
        { name: "ООО Seguríssimos", value: "страховая 2" },
        { name: "ООО Ensa", value: "страховая 3" },
    ];

    const [selectedCompany, setSelectedCompany] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const selectedCompany = event.target.value;
        setSelectedCompany(selectedCompany);
        updateFormData({ company: selectedCompany });
        setErrorMessage(''); // Сбросить сообщение об ошибке при выборе компании
    };

    const handleSubmit = () => {
        if (selectedCompany) {
            submitFormData();
        } else {
            setErrorMessage(t('insurance_application.step6.alert_message'));
        }
    };

    const handleBack = () => {
        prevStep(5);
    };

    return (
        <div className="container">
            <div className="step step-6">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('insurance_application.step6.back_button')}
                </button>
                <h2 className="form__header">{t('insurance_application.step6.header')}</h2>
                <div className="insurance-dropdown">
                    <label htmlFor="insurance">{t('insurance_application.step6.select_label')}</label>
                    <select id="insurance" onChange={handleChange} value={selectedCompany}>
                        <option value="">{t('insurance_application.step6.select_placeholder')}</option>
                        {insuranceCompanies.map((company, index) => (
                            <option key={index} value={company.value}>{company.name}</option>
                        ))}
                    </select>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="submit-button" onClick={handleSubmit}>{t('insurance_application.step6.submit_button')}</button>
            </div>
        </div>
    );
};

export default Step6;
