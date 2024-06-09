import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export function MedicalInsuranceData() {
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
                        setError(t('insurance.not_found'));
                    }
                })
                .catch(error => {
                    setError(t('insurance.error'));
                });
        }
    }, [t]);

    if (error) {
        return <div className="profile-section"><p className="error-message">{error}</p></div>;
    }

    if (!insurance) {
        return <div className="profile-section"><p>{t('insurance.loading')}</p></div>;
    }

    return (
        <div className="profile-section">
            <h2 className="profile-title">{t('insurance.title')}</h2>
            <div className="profile-details">
                <p className="profile-item">
                    <span className="profile-label">{t('insurance.policy_number')}</span> {insurance.policy_number}
                </p>
                <p className="profile-item">
                    <span className="profile-label">{t('insurance.insurer_name')}</span> {insurance.insurer_name}
                </p>
                <p className="profile-item">
                    <span className="profile-label">{t('insurance.expiry_date')}</span> {insurance.expiry_date}
                </p>
            </div>
        </div>
    );
}
