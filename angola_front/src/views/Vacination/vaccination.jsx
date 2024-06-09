import React, { useState } from 'react';
import axios from "axios";
import Step1 from "../Vacination/Step1/step1.jsx";
import Step2 from "../Vacination/Step2/step2.jsx";
import Step3 from "../Vacination/Step3/step3.jsx";
import Step4 from "../Vacination/Step4/step4.jsx";
import Step5 from "../Vacination/Step5/step5.jsx";

const Vaccination = () => {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (newData) => {
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const resetForm = () => {
        setFormData({});
        setCurrentStep(1);
    };

    const submitFormData = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/vacReq/', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Форма отправлена успешно:', response.data);
            nextStep();
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        }
    };

    console.log(currentStep);
    console.log(formData);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 updateFormData={updateFormData} nextStep={nextStep} resetForm={resetForm} />;
            case 2:
                return <Step2 updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <Step3 updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 4:
                return <Step4 updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 5:
                return <Step5 updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} submitFormData={submitFormData} />;
            default:
                return <Step1 updateFormData={updateFormData} nextStep={nextStep} resetForm={resetForm} />;
        }
    };

    return (
        <div className="farmer-grant-form">
            {renderStep()}
        </div>
    );
};

export default Vaccination;
