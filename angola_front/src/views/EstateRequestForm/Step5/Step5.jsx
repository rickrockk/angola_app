import React from 'react';
import './Step5.scss';

const Step5 = ({ prevStep, nextStep}) => {
    const handleForward = () => {
        nextStep()
    }

    const handleBack = () => {
        prevStep(4);
    };

    return (
        <div className="container">
            <div className="step step-4">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Для запроса потребуется</h2>
                <div className="form__info">
                    <ul className="info__list">
                        <li className="info__item">Данные паспорта</li>
                        <li className="info__item">Вид недвижимости</li>
                        <li className="info__item">Данные об объекте недвижимости: номер (кадастровый или условный) или адрес и точная площадь объекта</li>
                    </ul>
                    <div className="info__text">
                        <h3 className="form__subheader">Срок оказания услуги</h3>
                        <p className="form-text">От нескольких минут до 3 рабочих дней </p>
                        <h3 className="form__subheader">Стоимость</h3>
                        <p className="form-text">210₽ </p>
                        <h3 className="form__subheader">Результат</h3>
                        <p className="form-text">Выписка из ЕГРН с электронной подписью реестра придет в личный кабинет</p>
                    </div>
                    <button className="submit-button" onClick={handleForward}>Перейти к заполнению</button>
                </div>
            </div>
        </div>
    );
};

export default Step5;
