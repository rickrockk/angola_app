import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './step4.scss';

function Step4({ nextStep, prevStep, updateFormData }) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        vaccination_point: ''
    });

    const handleChange = (event) => {
        const vaccination_point = event.target.value;
        setFormData({ vaccination_point });
        updateFormData({ vaccination_point });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            updateFormData();
            nextStep();
        } catch (error) {
            console.error('Ошибка при сохранении данных формы:', error);
            alert('Произошла ошибка при сохранении данных формы. Пожалуйста, попробуйте еще раз.');
        }
    };

    const handleBack = () => {
        prevStep();
    };

    return (
        <div className="docs-recovery__container container">
            <div className="docs-recovery__content">
                <div className="content__heading">
                    <button className="back-button back__button" onClick={handleBack}>
                        <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                        </svg>
                        {t('vaccination_appointment.step4.back_button')}
                    </button>
                    <h3 className="content__header">
                        {t('vaccination_appointment.step4.header')}
                    </h3>
                </div>
                <div className="content__body">
                    <form className="inn-form" onSubmit={handleSubmit}>
                        <label htmlFor="vaccination_point">{t('vaccination_appointment.step4.label')}</label>
                        <input
                            type="text"
                            id="vaccination_point"
                            name="vaccination_point"
                            value={formData.vaccination_point}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">{t('vaccination_appointment.step4.submit_button')}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Step4;
