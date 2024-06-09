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
                <h2 className="form__header">Предоставление сведений из ЕГРН</h2>
                <div className="step step-1">
                    <div className="step__block step__heading-block">
                        <h3 className="form-subheader">Услуга помогает:</h3>
                        <ul className="block__list">
                            <li className="block__item">получить электронную выписку или копию документа из ЕГРН</li>
                            <li className="block__item">посмотреть онлайн основную информацию о недвижимости</li>
                        </ul>
                    </div>
                    <div className="step__block">
                        <h3 className="form-subheader">Изменение порядка данных</h3>
                        <p className="step__undertext">С 1 марта 2023 г. персональные данные правообладателей доступны только им
                            Закон от 14.07.2022 № 266</p>
                    </div>
                    <button className="start-button" onClick={handleStart}>Начать</button>
                </div>
            </div>
        </div>
    );
};

export default Step1;
