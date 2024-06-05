import React, { useEffect, useState } from "react";
import axios from 'axios';

export function MedicalInsuranceData() {
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
        return <div className="profile-section"><p className="error-message">{error}</p></div>;
    }

    if (!insurance) {
        return <div className="profile-section"><p>Loading...</p></div>;
    }

    return (
        <div className="profile-section">
            <h2 className="profile-title">Полис</h2>
            <div className="profile-details">
                <p className="profile-item">
                    <span className="profile-label">Номер полиса:</span> {insurance.policy_number}
                </p>
                <p className="profile-item">
                    <span className="profile-label">Страховая компания:</span> {insurance.insurer_name}
                </p>
                <p className="profile-item">
                    <span className="profile-label">Дата окончания:</span> {insurance.expiry_date}
                </p>
            </div>
        </div>
    );
}
