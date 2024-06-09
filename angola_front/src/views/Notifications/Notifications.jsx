import React from 'react';
import { useTranslation } from 'react-i18next';
import NotificationsList from "../../components/NotificationsList/NotificationsList.jsx";
import './Notifications.scss';

export default function Notifications() {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className="main_head">{t('notifications.title')}</h1>
            <div className="main_box">
                <NotificationsList />
                <div className="mail">
                    <div className="svg">
                        <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.0781 0.671875H4.92188C2.21134 0.671875 0 2.88081 0 5.59375V38.4062C0 41.11 2.2015 43.3281 4.92188 43.3281H51.0781C53.7819 43.3281 56 41.1266 56 38.4062V5.59375C56 2.89 53.7985 0.671875 51.0781 0.671875ZM50.3985 3.95312L28.1043 26.2474L5.61739 3.95312H50.3985ZM3.28125 37.7268V6.25755L19.0836 21.9244L3.28125 37.7268ZM5.60142 40.0469L21.4138 24.2345L26.9544 29.7276C27.5958 30.3635 28.6308 30.3614 29.2695 29.7225L34.6719 24.3202L50.3986 40.0469H5.60142ZM52.7188 37.7267L36.9921 22L52.7188 6.27319V37.7267Z" fill="black" />
                        </svg>
                    </div>
                    <div className="mail_info">
                        <p>{t('notifications.add_email')}</p>
                        <p><span>{t('notifications.set_up')}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
