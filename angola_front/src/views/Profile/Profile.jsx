import React from 'react';
import './Profile.scss';
import { observer } from "mobx-react-lite";
import { userStore } from '../../stores/userStore';
import { PassportData } from "./PassportData/PassportData.jsx";
import { MedicalInsuranceData } from "./MedicalInsuranceData/MedicalInsuranceData.jsx";
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation();

    if (!userStore.user) {
        return <div>Loading...</div>;
    }
    return (
        <div className="profile-container">
            <h1 className="profile-header">{t('profile.header')}</h1>
            <div className="profile-content">
                <div className="profile-section">
                    <h2 className="profile-title">{t('profile.account_section')}</h2>
                    <div className="profile-details">
                        <img className="profile-avatar" src="path-to-avatar" alt={t('profile.avatar_alt')} />
                        <div className="profile-info">
                            <h3 className="profile-name">{userStore.user.first_name}</h3>
                            <p className="profile-status">{t('profile.confirmed_account')}</p>
                            <p className="profile-item">
                                <span className="profile-label">{t('profile.phone_label')}</span> {userStore.user.phone_number} <span className="profile-edit">{t('profile.edit')}</span>
                            </p>
                            <p className="profile-item">
                                <span className="profile-label">{t('profile.email_label')}</span> {userStore.user.email} <span className="profile-edit">{t('profile.edit')}</span>
                            </p>
                            <a href="#" className="profile-link">{t('profile.secure_account')}</a>
                            <a href="#" className="profile-link">{t('profile.change_password')}</a>
                            <a href="#" className="profile-link">{t('profile.delete_account')}</a>
                        </div>
                    </div>
                </div>
                <div className="profile__documents">
                    <PassportData/>
                    <MedicalInsuranceData/>
                </div>
            </div>
        </div>
    );
};

export default observer(Profile);
