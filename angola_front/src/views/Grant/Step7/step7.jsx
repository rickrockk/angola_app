import React, { useState, useEffect } from 'react';
import './step7.scss';
import { useTranslation } from 'react-i18next';

const Step7 = ({ nextStep, prevStep, updateFormData, submitFormData }) => {
    const { t } = useTranslation();
    const [file, setFile] = useState(null);

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            const parsedData = JSON.parse(savedFormData);
            if (parsedData.base_scan) {
                setFile(parsedData.base_scan);
            }
        }
    }, []);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ base_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ base_scan: uploadedFile });
    };

    const handleSubmit = () => {
        if (file) {
            submitFormData();
        } else {
            alert(t('grants_application.step7.alert_message'));
        }
    };

    const handleBack = () => {
        prevStep();
    };

    return (
        <div className="container">
            <div className="step step-7">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('grants_application.step7.back_button')}
                </button>
                <h2 className="form__header">{t('grants_application.step7.header')}</h2>
                <div className="upload__requirements">
                    <p>{t('grants_application.step7.requirements.inventory_act')}</p>
                    <p>{t('grants_application.step7.requirements.supply_contracts')}</p>
                    <p>{t('grants_application.step7.requirements.eco_certificates')}</p>
                    <p>{t('grants_application.step7.requirements.co_financing')}</p>
                    <p>{t('grants_application.step7.requirements.credit_agreements')}</p>
                    <p>{t('grants_application.step7.requirements.qualifications')}</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>{t('grants_application.step7.drop_zone')}</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleSubmit}>{t('grants_application.step7.next_button')}</button>
            </div>
        </div>
    );
};

export default Step7;
