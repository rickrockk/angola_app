import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './step5.scss';
import {useNavigate} from "react-router-dom";

function Step5({ nextStep, prevStep, submitFormData, updateFormData }) {
    const { t } = useTranslation();
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const date = event.target.value;
        setDate(date);
        updateFormData({ visit_date: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            submitFormData();
            navigate('/')
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
                    <h3 className="content__header">
                        {t('vaccination_appointment.step5.header')}
                    </h3>
                </div>
                <div className="content__body">
                    <form className="inn-form" onSubmit={handleSubmit}>
                        <label htmlFor="visit_date">{t('vaccination_appointment.step5.label')}</label>
                        <input
                            type="date"
                            id="visit_date"
                            name="visit_date"
                            value={date}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">{t('vaccination_appointment.step5.submit_button')}</button>
                    </form>
                    <button onClick={handleBack}>{t('vaccination_appointment.step5.back_button')}</button>
                </div>
            </div>
        </div>
    );
}

export default Step5;
