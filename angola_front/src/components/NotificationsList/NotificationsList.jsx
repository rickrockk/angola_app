import React from 'react';
import { useTranslation } from 'react-i18next';
import Notification from "./Notification/Notification.jsx";
import './NotificationsList.scss';

function NotificationsList() {
    const { t } = useTranslation();

    return (
        <div className="notif_box">
            <div className="head">
                <h5>{t('notifications.show')} <span>{t('notifications.type_1')}</span></h5>
                <ul>
                    <li>
                        <h5><span>{t('notifications.read_all')}</span></h5>
                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="6" r="2" fill="#CC2229" />
                            <circle cx="12" cy="12" r="2" fill="#CC2229" />
                            <circle cx="12" cy="18" r="2" fill="#CC2229" />
                        </svg>
                    </li>
                </ul>
            </div>
            <Notification
                type={t('notifications.type_1')}
                date={t('notifications.notification_1.date')}
                heading={t('notifications.notification_1.heading')}
                sender={t('notifications.notification_1.sender')}
            />
            <Notification
                type={t('notifications.type_1')}
                date={t('notifications.notification_2.date')}
                heading={t('notifications.notification_2.heading')}
                sender={t('notifications.notification_2.sender')}
            />
            <Notification
                type={t('notifications.type_1')}
                date={t('notifications.notification_3.date')}
                heading={t('notifications.notification_3.heading')}
                sender={t('notifications.notification_3.sender')}
            />
        </div>
    );
}

export default NotificationsList;
