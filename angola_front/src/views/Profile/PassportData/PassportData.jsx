import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export function PassportData() {
    const { t } = useTranslation();
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
                        setError(t('passport.not_found'));
                    }
                })
                .catch(error => {
                    setError(t('passport.error'));
                });
        }
    }, [t]);

    if (error) {
        return <div className="profile-section"><p className="error-message">{error}</p></div>;
    }

    if (!passport) {
        return <div className="profile-section"><p>{t('passport.loading')}</p></div>;
    }

    return (
        <div className="profile-section">
            <h2 className="profile-title">{t('passport.title')}</h2>
            <div className="profile-details">
                <p className="profile-item">
                    <span className="profile-label">{t('passport.series_number')}</span> {passport.series_number}
                </p>
                <p className="profile-item">
                    <span className="profile-label">{t('passport.issued_date')}</span> {passport.issued_date}
                </p>
                <p className="profile-item">
                    <span className="profile-label">{t('passport.issued_by')}</span> {passport.issued_by}
                </p>
            </div>
        </div>
    );
}
