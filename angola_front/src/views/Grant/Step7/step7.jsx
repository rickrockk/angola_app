import React, { useState, useEffect } from 'react';
import './step7.scss';

const Step7 = ({ nextStep, prevStep, updateFormData,submitFormData }) => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        // Проверяем, есть ли сохраненные данные в локальном хранилище
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            const parsedData = JSON.parse(savedFormData);
            if (parsedData.base_scan) {
                setFile(parsedData.base_scan);
            }
        }
    }, []);

    const handleDrop = (event) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        setFile(uploadedFile);
        updateFormData({ base_scan: uploadedFile });
    };

    const handleChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        updateFormData({ base_scan: uploadedFile });
    };

    const handleSubmit = () => {
        if (file) {
            // Отправка formData на API
            submitFormData();
        } else {
            alert("Пожалуйста, загрузите скан подписи перед продолжением.");
        }
    };



    const handleBack = () => {
        prevStep();
    };

    return (
        <div className="container">
            <div className="step step-7">
                <button className="back-button" onClick={handleBack}>
                    <svg className="btn-arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                    </svg>
                    Назад
                </button>
                <h2 className="form__header">Необходимо наличие материально-технической базы</h2>
                <div className="upload__requirements">
                    <p>Акт инвентаризации основных средств</p>
                    <p>Договоры на поставку оборудования и материалов</p>
                    <p>Экологические и санитарные сертификаты</p>
                    <p>Документы, подтверждающие наличие или планируемое привлечение софинансирования</p>
                    <p>Договоры о предоставлении кредита, субсидий, инвестиций и другие документы, подтверждающие привлечение дополнительных средств</p>
                    <p>Документы, подтверждающие квалификацию и опыт руководителя КФХ</p>
                </div>
                <div
                    className="upload__zone"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>Перетащите файл сюда или выберите на компьютере</p>
                    <input type="file" onChange={handleChange} />
                </div>
                <button className="next-button" onClick={handleSubmit}>Далее</button>
            </div>
        </div>
    );
}

export default Step7;
