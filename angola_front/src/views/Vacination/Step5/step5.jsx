import React, { useState } from 'react';
import './step5.scss';

function Step5({ nextStep, prevStep, submitFormData, updateFormData }) {
    const [date, setDate] = useState('');

    const handleChange = (event) => {
        const date = event.target.value;
        setDate(date);
        updateFormData({ visit_date: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            submitFormData();
            nextStep();
        } catch (error) {
            console.error('Ошибка при сохранении данных формы:', error);
            alert('Произошла ошибка при сохранении данных формы. Пожалуйста, попробуйте еще раз.');
        }
    };

    const handleBack = () => {
        prevStep(); // Move to the previous step
    };

    return (
        <div className="docs-recovery__container container">
            <div className="docs-recovery__content">
                <div className="content__heading">
                    <h3 className="content__header">
                        Введите Дату визита 
                    </h3>
                </div>
                <div className="content__body">
                    <form className="inn-form" onSubmit={handleSubmit}>
                        <label htmlFor="visit_date">Дата визита</label>
                        <input 
                            type="date" 
                            id="visit_date" 
                            name="visit_date" 
                            value={date} 
                            onChange={handleChange} 
                            required 
                        />
                        <button type="submit">Продолжить</button>
                    </form>
                    <button onClick={handleBack}>Назад</button>
                </div>
            </div>
        </div>
    );
}

export default Step5;
