import React, { useState } from 'react';
import './Step7MarriageCertificateUpload.scss';
import { useTranslation } from 'react-i18next';

const Step7MarriageCertificateUpload = ({ nextStep, prevStep, goToStep, applicationType, cause, updateFormData }) => {
    const { t } = useTranslation();
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ marriage_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ marriage_scan: uploadedFile });
    };

    const handleNext = () => {
        if (file) {
            goToStep(9)
        } else {
            alert(t('passport_application.step7.alert_message'));
        }
    };

    const handleBack = () => {
        prevStep(6);
    };

    return (
        <div className="container">
            <div className="step step-7">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('passport_application.step7.back_button')}
                </button>
                <h2 className="form__header">{t('passport_application.step7.header')}</h2>
                <div className="upload__requirements">
                    <p>{t('passport_application.step7.requirements')}</p>
                    <p>{t('passport_application.step7.color_photo')}</p>
                    <p>{t('passport_application.step7.background')}</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>{t('passport_application.step7.drop_zone')}</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleNext}>{t('passport_application.step7.next_button')}</button>
            </div>
        </div>
    );
};

export default Step7MarriageCertificateUpload;
