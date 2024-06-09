import React, { useEffect } from 'react';
import './Step4.scss';

const Step4 = ({ prevStep, goToStep, nextStep, applicationType }) => {
    const handleForward = () => {
        if (applicationType === 'получение') {
            goToStep(6);
        } else {
            nextStep()
        }
    }

    const handleBack = () => {
        if (applicationType === 'получение') {
            prevStep(2); // Возвращаемся к этапу выбора типа заявки
        } else if (applicationType === 'замена') {
            prevStep(3); // Возвращаемся к этапу выбора причины замены
        }
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
                <h2 className="form__header">Для подачи заявления вам потребуется</h2>
                <ul className="requirements-list">
                    <li className="requirement-item">Ваша фотография (как на паспорт)</li>
                    <li className="requirement-item">Данные свидетельства о заключении или расторжении брака (в случае соответствующего семейного положения)</li>
                    <li className="requirement-item">Свидетельство о рождении</li>
                    <li className="requirement-item">Данные загранпаспорта (при наличии)</li>
                </ul>
                <h3 className="form-subheader">Срок исполнения</h3>
                <p className="form-text">Оформление паспорта займет до 10 календарных дней</p>
                <h3 className="form-subheader">Стоимость</h3>
                <p className="form-text">Пошлину можно будет оплатить после проверки заявления в МВД республики Анголы</p>
                <p className="form-text">210₽</p>
                <h3 className="form-subheader">Что дальше</h3>
                <p className="form-text">Дождитесь приглашения для подачи оригиналов документов</p>
                <button className="submit-button" onClick={handleForward}>Далее</button>
            </div>
        </div>
    );
};

export default Step4;
