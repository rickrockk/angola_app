
import React, { useEffect, useState } from "react";
import axios from 'axios';

export function PassportData() {
    const [passport, setPassport] = useState(null);
    const [error, setError] = useState(null);

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
                        setError('Данные паспорта не найдены');
                    }
                })
                .catch(error => {
                    setError(error.response?.data?.message || 'Ошибка при загрузке данных паспорта');
                });
        }
    }, []);

    if (error) {
        return <div className="profile-section"><p className="error-message">{error}</p></div>;
    }

    if (!passport) {
        return <div className="profile-section"><p>Loading...</p></div>;
    }

    return (
        <div className="profile-section">
            <h2 className="profile-title">Паспортные данные</h2>
            <div className="profile-details">
                <p className="profile-item">
                    <span className="profile-label">Серия и номер:</span> {passport.series_number}
                </p>
                <p className="profile-item">
                    <span className="profile-label">Дата выдачи:</span> {passport.issued_date}
                </p>
                <p className="profile-item">
                    <span className="profile-label">Кем выдан:</span> {passport.issued_by}
                </p>
            </div>
        </div>
    );
}
