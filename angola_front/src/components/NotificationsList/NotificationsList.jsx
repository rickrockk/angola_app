import React from 'react';
import Notification from "./Notification/Notification.jsx";

function NotificationsList() {
    return (
        <div className="notif_box">
            <div className="head">
                <h5>Показать: <span>Госпочта</span></h5>
                <ul>
                    <li>
                        <h5><span>Прочитать все</span>

                        </h5>
                    </li>
                    <li><svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6" r="2" fill="#CC2229"/>
                        <circle cx="12" cy="12" r="2" fill="#CC2229"/>
                        <circle cx="12" cy="18" r="2" fill="#CC2229"/>
                    </svg></li>
                </ul>


            </div>
            <Notification
            type="Госпочта"
            date="29 декабря 2020"
            heading="Поступил новый штраф на ТС М777ММ777"
            sender="МВД России"
            />
            <Notification
                type="Госпочта"
                date="29 декабря 2020"
                heading="Вам направлены электронные документы"
                sender="ФССП России"
            />
            <Notification
                type="Госпочта"
                date="29 декабря 2020"
                heading="Запись на приём к врачу"
                sender="Университетская клиническая больница № 1 Клинического центра Первого Московского государственного медицинского университета имени И.М. Сеченова"
            />
        </div>
    );
}

export default NotificationsList;