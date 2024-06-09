import React, { useState } from 'react';
import './Step8BirthCertificateUpload.scss';

const Step8BirthCertificateUpload = ({ nextStep, prevStep, cause, updateFormData }) => {
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ birth_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ birth_scan: uploadedFile });
    };

    const handleNext = () => {
        if (file) {
            nextStep();
        } else {
            alert("Пожалуйста, загрузите скан свидетельства перед продолжением.");
        }
    };

    const handleBack = () => {
        prevStep(6)
    };

    return (
        <div className="container">
            <div className="step step-8">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Скан свидетельства о рождении</h2>
                <div className="upload__requirements">
                    <p>Основные требования</p>
                    <p>Цветная или черно-белая фотография</p>
                    <p>Фон однотонный, светлый, без посторонних предметов и теней</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>Перетащите фото сюда или выберите на компьютере</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleNext}>Далее</button>
            </div>
        </div>
    );
};

export default Step8BirthCertificateUpload;