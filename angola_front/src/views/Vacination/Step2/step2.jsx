import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './step2.scss';

const Step2 = ({ prevStep, nextStep, formData }) => {
    const { t } = useTranslation();
    const [insurance, setInsurance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://127.0.0.1:8000/api/insurance/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setInsurance(response.data[0]);
                    } else {
                        setError(t('vaccination_appointment.step2.error_message'));
                    }
                })
                .catch(error => {
                    setError(error.response?.data?.message || t('vaccination_appointment.step2.error_message'));
                });
        }
    }, [t]);

    if (error) {
        return <div className="review__details"><p className="error-message">{error}</p></div>;
    }

    if (!insurance) {
        return <div className="review__details"><p>{t('vaccination_appointment.step2.loading')}</p></div>;
    }

    return (
        <div className="container">
            <div className="step step-5">
                <button className="back-button" onClick={() => prevStep()}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    {t('vaccination_appointment.step2.back_button')}
                </button>
                <h2 className="form__header">{t('vaccination_appointment.step2.header')}</h2>
                <div className="review__details">
                    <p className="review__detail">{t('vaccination_appointment.step2.policy_number')}: {insurance.policy_number}</p>
                    <p className="review__detail">{t('vaccination_appointment.step2.expiry_date')}: {insurance.expiry_date}</p>
                    <p className="review__detail">{t('vaccination_appointment.step2.insurer_id')}: {insurance.insurer_id}</p>
                    <p className="review__detail">{t('vaccination_appointment.step2.insurer_name')}: {insurance.insurer_name}</p>
                    <p className="review__detail">{t('vaccination_appointment.step2.issued_by')}: {insurance.issued_by}</p>
                </div>
                <button className="edit-button">{t('vaccination_appointment.step2.edit_button')}</button>
                <button className="confirm-button" onClick={nextStep}>{t('vaccination_appointment.step2.confirm_button')}</button>
            </div>
        </div>
    );
};

export default Step2;
