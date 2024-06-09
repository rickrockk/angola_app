import axios from "axios";
import React, { useEffect, useState } from 'react';
import './step2.scss';

const Step2 = ({ prevStep, nextStep, formData }) => {

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
                        setError('Данные полиса не найдены');
                    }
                })
                .catch(error => {
                    setError(error.response?.data?.message || 'Ошибка при загрузке данных полиса');
                });
        }
    }, []);
    if (error) {
        return <div className="review__details"><p className="error-message">{error}</p></div>;
    }

    if (!insurance) {
        return <div className="review__details"><p>Loading...</p></div>;
    }

    return (
        <div className="container">
            <div className="step step-5">
                <button className="back-button" onClick={() => prevStep()}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Проверьте корректность ваших данных</h2>
                <div className="review__details">
                    <p className="review__detail">Номер полиса: {insurance.policy_number}</p>
                    <p className="review__detail">Срок действия {insurance.expiry_date}</p>
                    <p className="review__detail">Идентификатор страховой: {insurance.insurer_id}</p>
                    <p className="review__detail">Название страховой: {insurance.insurer_name}</p>
                    <p className="review__detail">Где выдан: {insurance.issued_by}</p>
                </div>
                <button className="edit-button">Редактировать</button>
                <button className="confirm-button" onClick={nextStep}>Верно</button>
            </div>
        </div>
    );
};

export default Step2;