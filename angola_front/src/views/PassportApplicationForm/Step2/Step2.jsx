import React from 'react';
import './Step2.scss'
import { BlockLink } from "../../../components/BlockLink/BlockLink.jsx";

const Step2 = ({ updateFormData, setFormData, nextStep, goToStep, prevStep }) => {
    const handleSelect = (type) => {
        updateFormData({ application_type: type });
        if (type === 'получение') {
            goToStep(4); // Переход к этапу 4
        } else {
            nextStep(); // Переход к следующему этапу для замены
        }
    };

    const handleBack = () => {
        setFormData({})
        prevStep(1)
    };
    return (
        <div className="container">
            <div className="step step-2">
                <button className="back-button" onClick={handleBack}><svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                </svg>
                    Назад</button>
                <h2 className="form__header">Выберите услугу</h2>
                <BlockLink onClick={() => handleSelect('получение')}>
                    <h3 className="application__type">
                        Получение паспорта
                    </h3>
                </BlockLink>
                <BlockLink onClick={() => handleSelect('замена')}>
                    <h3 className="application__type">
                        Замена паспорта
                    </h3>
                </BlockLink>
            </div>
        </div>
    );
};

export default Step2;
