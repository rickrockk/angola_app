import React from 'react';
import './Step4.scss';

const Step4 = ({ prevStep, nextStep}) => {
    const handleForward = () => {
        nextStep()
    }

    const handleBack = () => {
        prevStep(3);
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
                <h2 className="form__header">Выписка об основных характеристиках и правах на недвижимость</h2>
                <div className="form__info">
                    <h3 className="form__subheader">Полное наименование</h3>
                    <p className="form-text">Выписка из ЕГРН об основных характеристиках и зарегистрированных правах на объект недвижимости</p>
                    <h3 className="form__subheader">Что содержит</h3>
                    <ul className="info__list">
                        <li className="info__item">Описание объекта недвижимости - кадастровый номер, вид. наименование, площадь, этаж,
                            протяжённость, разрешённое использование, назначение, год ввода в эксплуатацию</li>
                        <li className="info__item">Кадастровую стоимость</li>
                        <li className="info__item">Сведения о правообладателе</li>
                        <li className="info__item">Вид, дату и номер государственной регистрации права и его ограничений</li>
                        <li className="info__item">Сведения о заявленных в судебном порядке правах требования</li>
                        <li className="info__item">Сведения о невозможности государственной регистрации без личного участия правообладателя
                            или его представителя</li>
                        <li className="info__item">Сведения о правообладателе</li>
                        <li className="info__item">Сведения о невозможности государственной регистрации перехода, прекращения, ограничения
                            права на земельный участок из земель сельхозназначения</li>
                    </ul>
                    <div className="form__cost">
                        <h3 className="form-subheader">Стоимость</h3>
                        <p className="form-text">210₽</p>
                    </div>
                    <button className="submit-button" onClick={handleForward}>Продолжить</button>
                </div>
            </div>
        </div>
    );
};

export default Step4;
