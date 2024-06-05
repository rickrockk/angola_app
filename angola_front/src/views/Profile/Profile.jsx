import React from 'react';
import './Profile.scss';
import {observer} from "mobx-react-lite";
import { userStore } from '../../stores/userStore';
import {PassportData} from "./PassportData/PassportData.jsx";
import {MedicalInsuranceData} from "./MedicalInsuranceData/MedicalInsuranceData.jsx";

function Profile() {
    if (!userStore.user) {
        return <div>Loading...</div>;
    }
    return (
        <div className="profile-container">
            <h1 className="profile-header">Профиль</h1>
            <div className="profile-content">
                <div className="profile-section">
                    <h2 className="profile-title">Учётная запись</h2>
                    <div className="profile-details">
                        <img className="profile-avatar" src="path-to-avatar" alt="Аватар" />
                        <div className="profile-info">
                            <h3 className="profile-name">{userStore.user.first_name}</h3>
                            <p className="profile-status">Подтверждённая учётная запись</p>
                            <p className="profile-item">
                                <span className="profile-label">Телефон:</span> {userStore.user.phone_number} <span className="profile-edit">Изменить</span>
                            </p>
                            <p className="profile-item">
                                <span className="profile-label">Email:</span> {userStore.user.email} <span className="profile-edit">Изменить</span>
                            </p>
                            <a href="#" className="profile-link">Как обезопасить свою учётную запись на Госуслугах</a>
                            <a href="#" className="profile-link">Сменить пароль</a>
                            <a href="#" className="profile-link">Удалить учётную запись</a>
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

export default observer(Profile)
