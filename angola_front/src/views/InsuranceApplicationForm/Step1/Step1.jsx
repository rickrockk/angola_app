import './Step1.scss'
import { Link } from "react-router-dom";
import React from 'react';

const Step1 = ({ updateFormData, nextStep }) => {
    const handleStart = () => {
        nextStep();
    };

    return (
        <div className="container">
            <div className="container__content">
                <Link className="back-button">
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>Назад
                </Link>
                <h2 className="form__header">Управление полисом ОМС</h2>
                <div className="step step-1">
                    <p className="step__desc">
                        Если вам исполнилось 20 или 45 лет, у вас существенно изменилась внешность, вы сменили фамилию или
                        нашли неточность в данных - это повод заменить паспорт <br/>
                        Подайте документы через Госуслуги, чтобы не ждать в очередях. Если не готовы отправить заявление онлайн,
                        запишитесь на приём в ведомство.
                    </p>
                    <h3 className="form-subheader">Что дальше?</h3>
                    <p className="step__undertext">Ответьте на несколько вопросов, чтобы мы показали необходимые действия для получения услуги</p>
                    <button className="start-button" onClick={handleStart}>Начать</button>
                </div>
            </div>
        </div>
    );
};

export default Step1;
