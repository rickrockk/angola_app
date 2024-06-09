import React from 'react';
import { BlockLink } from '../../../components/BlockLink/BlockLink.jsx';
import './Step2.scss'

const Step2 = ({ updateFormData, nextStep, prevStep }) => {
    const handleSelect = (cause) => {
        updateFormData({ cause });
        nextStep();
    };

    const handleBack = () => {
        prevStep(2); // Возвращаемся к этапу выбора типа заявки
    };

    return (
        <div className="container">
            <div className="step step-3">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Укажите цель обращения</h2>
                <div className="form__blocks">
                    <h3 className="form__subheader">Виды сведений из ЕГРН</h3>
                    <BlockLink onClick={() => handleSelect('возраст')}>
                        <h3 className="form__reason">Получить онлайн-выписку</h3>
                        <p className="form__subtext">Бесплатно, без планов и схем</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('фио')}>
                        <h3 className="form__reason">Просмотреть информацию о недвижимости онлайн</h3>
                        <p className="form__subtext">Бесплатно</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('обстоятельства')}>
                        <h3 className="form__reason">Получить выписку из ЕГРН</h3>
                        <p className="form__subtext">С планами и схемами</p>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('ошибка')}>
                        <h3 className="form__reason">Получить кадастровый план территории</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">Получить копию документа</h3>
                    </BlockLink>
                    <BlockLink onClick={() => handleSelect('внешность')}>
                        <h3 className="form__reason">Узнать кто интересовался недвижимостью</h3>
                    </BlockLink>
                </div>
            </div>
        </div>
    );
};

export default Step2;
