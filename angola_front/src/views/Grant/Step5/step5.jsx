import React, { useState } from 'react';
import './step5.scss';

const Step5 = ({ nextStep, prevStep, updateFormData }) => {
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ experience_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ experience_scan: uploadedFile });
    };

    const handleNext = () => {
        if (file) {
            nextStep();
        } else {
            alert("Пожалуйста, загрузите скан свидетельства перед продолжением.");
        }
    };

    const handleBack = () => {
        prevStep();
    };

    return (
        <div className="container">
            <div className="step step-6">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Необходимо подтвердить опыт руководителя КФХ</h2>
                <div className="upload__requirements">
                    <p>Письма поддержки от местных органов власти или других организаций</p>
                    <p>Презентационные материалы о проекте</p>
                    <p>Дипломы, сертификаты, свидетельства о прохождении курсов повышения квалификации</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>Перетащите файл сюда или выберите на компьютере</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleNext}>Далее</button>
            </div>
        </div>
    );
};

export default Step5;
