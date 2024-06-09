import React from 'react';
import './Step3.scss';

const Step3 = ({ prevStep, nextStep}) => {
    const handleForward = () => {
        nextStep()
    }

    const handleBack = () => {
        prevStep(2);
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
                    <li className="requirement-item">Паспорт</li>
                </ul>
                <h3 className="form-subheader">Срок исполнения</h3>
                <p className="form-text">Услуга будет оказана в течение <b>1 рабочего дня</b></p>
                <p className="form-text">В заявлении нужно будет подтвердить корректность персональных данных, выбрать регион получения медицинской помощи и страховую медицинскую организацию</p>
                <h3 className="form-subheader">Результат</h3>
                <p className="form-text">По результатам рассмотрения заявления вам в личный кабинет придет цифровой полис ОМС либо отказ в оказании услуги с объяснением причины отказа</p>
                <button className="submit-button" onClick={handleForward}>Далее</button>
            </div>
        </div>
    );
};

export default Step3;
