import React from 'react';
import {Link} from "react-router-dom";
import './Step10Confirmation.scss';

const Step10Confirmation = () => {
    return (
        <div className="container">
            <div className="step step-10">
                <h2 className="form__header">Заявление отправлено</h2>
                <div className="confirmation__details">
                    <p>Проверка займет до 3 месяцев</p>
                    <p>По итогам рассмотрения вы получите сообщение на почту</p>
                </div>
                <Link to='/' className="home-button">На главную</Link>
            </div>
        </div>
    );
};

export default Step10Confirmation;
