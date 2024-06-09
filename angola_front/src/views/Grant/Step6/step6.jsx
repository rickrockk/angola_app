import React, { useState } from 'react';
import './step6.scss';
import { useTranslation } from 'react-i18next';

const Step6 = ({ nextStep, prevStep, updateFormData }) => {
    const { t } = useTranslation();
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ statement_scan: uploadedFile }); // Update form data
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ statement_scan: uploadedFile }); // Update form data
    };

    const handleNext = () => {
        if (file) {
            nextStep();
        } else {
            alert(t('grants_application.step6.alert_message'));
        }
    };

    const handleBack = () => {
        prevStep();
    };

    return (
        <div className="container">
            <div className="step step-6">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('grants_application.step6.back_button')}
                </button>
                <h2 className="form__header">{t('grants_application.step6.header')}</h2>
                <div className="upload__requirements">
                    <p>{t('grants_application.step6.requirements.business_plan')}</p>
                    <p>{t('grants_application.step6.requirements.financial_report')}</p>
                    <p>{t('grants_application.step6.requirements.capital_documents')}</p>
                    <p>{t('grants_application.step6.requirements.co_financing')}</p>
                    <p>{t('grants_application.step6.requirements.credit_agreements')}</p>
                    <p>{t('grants_application.step6.requirements.tax_debts')}</p>
                    <p>{t('grants_application.step6.requirements.off_budget')}</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>{t('grants_application.step6.drop_zone')}</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleNext}>{t('grants_application.step6.next_button')}</button>
            </div>
        </div>
    );
};

export default Step6;
