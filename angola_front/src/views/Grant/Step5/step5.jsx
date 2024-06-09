import React, { useState } from 'react';
import './step5.scss';
import { useTranslation } from 'react-i18next';

const Step5 = ({ nextStep, prevStep, updateFormData }) => {
    const { t } = useTranslation();
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ experience_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ experience_scan: uploadedFile });
    };

    const handleNext = () => {
        if (file) {
            nextStep();
        } else {
            alert(t('grants_application.step5.alert_message'));
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
                    {t('grants_application.step5.back_button')}
                </button>
                <h2 className="form__header">{t('grants_application.step5.header')}</h2>
                <div className="upload__requirements">
                    <p>{t('grants_application.step5.requirements.letters_of_support')}</p>
                    <p>{t('grants_application.step5.requirements.presentation_materials')}</p>
                    <p>{t('grants_application.step5.requirements.certificates')}</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>{t('grants_application.step5.drop_zone')}</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleNext}>{t('grants_application.step5.next_button')}</button>
            </div>
        </div>
    );
};

export default Step5;
