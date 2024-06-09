import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Step6.scss';
import axios from 'axios';

const Step6 = ({ prevStep, nextStep, formData, submitFormData }) => {
    const { t } = useTranslation();

    const [passport, setPassport] = useState(null);
    const [error, setError] = useState(null);

    const handleBack = () => {
        prevStep(5);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .get('http://127.0.0.1:8000/api/passport/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    if (response.data && response.data.length > 0) {
                        setPassport(response.data[0]);
                    } else {
                        setError(t('real_estate_application.step6.error_message'));
                    }
                })
                .catch((error) => {
                    setError(error.response?.data?.message || t('real_estate_application.step6.error_message'));
                });
        }
    }, []);

    if (error) {
        return <div className="review__details"><p className="error-message">{error}</p></div>;
    }

    if (!passport) {
        return <div className="review__details"><p>{t('real_estate_application.step6.loading')}</p></div>;
    }

    const handleSubmit = () => {
        submitFormData();
        nextStep();
    };

    return (
        <div className="container">
            <div className="step step-5">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('real_estate_application.step6.back_button')}
                </button>
                <h2 className="form__header">{t('real_estate_application.step6.header')}</h2>
                <div className="review__details">
                    <p className="review__detail"><strong>{passport.last_name} {passport.first_name} {passport.middle_name}</strong></p>
                    <p className="review__detail">{t('real_estate_application.step6.birth_date')}: {passport.date_of_birth}</p>
                    <p className="review__detail"><strong>{t('real_estate_application.step6.passport_title')}</strong></p>
                    <p className="review__detail">{t('real_estate_application.step6.series_number')}: {passport.series_number}</p>
                    <p className="review__detail">{t('real_estate_application.step6.issued_date')}: {passport.issued_date}</p>
                    <p className="review__detail">{t('real_estate_application.step6.issued_by')}: {passport.issued_by}</p>
                    <p className="review__detail">{t('real_estate_application.step6.department_code')}: 553-009</p>
                    <p className="review__detail">{t('real_estate_application.step6.place_of_birth')}: г. Уфа</p>
                </div>
                <button className="edit-button">{t('real_estate_application.step6.edit_button')}</button>
                <button className="confirm-button" onClick={handleSubmit}>{t('real_estate_application.step6.submit_button')}</button>
            </div>
        </div>
    );
};

export default Step6;
