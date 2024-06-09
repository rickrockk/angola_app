import React, {useEffect, useState} from 'react';
import './Step4.scss';
import axios from "axios";
import { useTranslation } from 'react-i18next';

const Step4 = ({ prevStep, nextStep, formData }) => {
    const { t } = useTranslation();

    const [passport, setPassport] = useState(null);
    const [error, setError] = useState(null);

    const handleBack = () => {
        prevStep(3);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://127.0.0.1:8000/api/passport/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setPassport(response.data[0]);
                    } else {
                        setError(t('insurance_application.step4.error_message'));
                    }
                })
                .catch(error => {
                    setError(error.response?.data?.message || t('insurance_application.step4.error_message'));
                });
        }
    }, [t]);

    if (error) {
        return <div className="review__details"><p className="error-message">{error}</p></div>;
    }

    if (!passport) {
        return <div className="review__details"><p>{t('insurance_application.step4.loading')}</p></div>;
    }

    return (
        <div className="container">
            <div className="step step-5">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('insurance_application.step4.back_button')}
                </button>
                <h2 className="form__header">{t('insurance_application.step4.header')}</h2>
                <div className="review__details">
                    <p className="review__detail"><strong>{passport.last_name} {passport.first_name} {passport.middle_name}</strong></p>
                    <p className="review__detail">{t('insurance_application.step4.date_of_birth')}: {passport.date_of_birth}</p>
                    <p className="review__detail"><strong>{t('insurance_application.step4.passport.title')}</strong></p>
                    <p className="review__detail">{t('insurance_application.step4.passport.series_number')}: {passport.series_number}</p>
                    <p className="review__detail">{t('insurance_application.step4.passport.issued_date')}: {passport.issued_date}</p>
                    <p className="review__detail">{t('insurance_application.step4.passport.issued_by')}: {passport.issued_by}</p>
                    <p className="review__detail">{t('insurance_application.step4.passport.department_code')}: 553-009</p>
                    <p className="review__detail">{t('insurance_application.step4.passport.place_of_birth')}: г. Уфа</p>
                </div>
                <button className="edit-button">{t('insurance_application.step4.edit_button')}</button>
                <button className="confirm-button" onClick={nextStep}>{t('insurance_application.step4.confirm_button')}</button>
            </div>
        </div>
    );
};

export default Step4;
