import React from 'react';
import {Link} from "react-router-dom";
import './Step7.scss';

const Step7 = () => {
    return (
        <div className="container">
            <div className="step step-10">
                <h2 className="form__header">Заявление отправлено</h2>
                <h3 className="form__subheader">Что дальше</h3>
                <div className="confirmation__details">
                    <p>1. Вам придёт уведомление о получении выписки на электронную почту</p>
                </div>
                <Link to='/' className="home-button">На главную</Link>
            </div>
        </div>
    );
};

export default Step7;
