import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './step4.scss';

function Step4({ nextStep, prevStep, updateFormData }) { // Добавили prevStep в параметры функции
    const [formData, setFormData] = useState({
        vaccination_point: '' // Оставляем только поле для ввода "Пункта вакцинации"
    });

    const handleChange = (event) => {
        const date = event.target.value;
        setFormData(date);
        updateFormData({ point: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            updateFormData();
            nextStep();
        } catch (error) {
            console.error('Ошибка при сохранении данных формы:', error);
            alert('Произошла ошибка при сохранении данных формы. Пожалуйста, попробуйте еще раз.');
        }
    };

    const handleBack = () => { // Обработчик нажатия кнопки Назад
        prevStep(); // Вызываем функцию prevStep для перехода на предыдущий шаг
    };

    return (
        <div className="docs-recovery__container container">
            
            <div className="docs-recovery__content">
                <div className="content__heading">
                    <h3 className="content__header">
                        Введите Пункт вакцинации
                    </h3>
                </div>
                <div className="content__body">
                    <form className="inn-form" onSubmit={handleSubmit}>
                        <label htmlFor="vaccination_point">Пункт вакцинации</label>
                        <input type="text" id="vaccination_point" name="vaccination_point" value={formData.vaccination_point} onChange={handleChange} required />

                        <button type="submit">Продолжить</button>
                    </form>
                </div>
            </div>  
        </div>
    );
}

export default Step4;
