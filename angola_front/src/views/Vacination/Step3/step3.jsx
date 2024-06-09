import React from 'react';

const BlockLink = ({ onClick, children }) => {
    return (
        <div className='block__link' onClick={onClick}>
            {children}
            <svg className="block__btn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" transform="rotate(-90 12 12)" fill="#FFCB00"/>
                <path d="M10.5036 15.4828C10.2252 15.7617 10.2251 16.2133 10.5034 16.4924C10.7826 16.7726 11.2363 16.7727 11.5157 16.4927L15.2949 12.7064C15.6845 12.3161 15.6845 11.6839 15.2949 11.2936L11.5157 7.50726C11.2363 7.22731 10.7826 7.22745 10.5034 7.50757C10.2251 7.78666 10.2252 8.23826 10.5036 8.51725L13.9781 12L10.5036 15.4828Z" fill="black"/>
            </svg>
        </div>
    );
};

const Step3 = ({ updateFormData, nextStep, prevStep }) => {
    const handleSelect = (vaccine_type) => {
        updateFormData({ vaccine_type });
        nextStep();
    };

    const handleBack = () => {
        prevStep();
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
                <h2 className="form__header">Какой тип вакцинации вам нужен?</h2>
                <BlockLink onClick={() => handleSelect('covid')}>
                    <h3 className="form__reason">COVID-19</h3>
                </BlockLink>
                <BlockLink onClick={() => handleSelect('flu')}>
                    <h3 className="form__reason">Грипп</h3>
                </BlockLink>
                <BlockLink onClick={() => handleSelect('hep_b')}>
                    <h3 className="form__reason">Гепатит B</h3>
                </BlockLink>
                
            </div>
        </div>
    );
};

export default Step3;
