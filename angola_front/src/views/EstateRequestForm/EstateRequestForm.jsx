import React, { useState } from 'react';
import axios from "axios";
import Step1 from "./Step1/Step1.jsx";
import Step2 from "./Step2/Step2.jsx";
import Step3 from "./Step3/Step3.jsx";
import Step4 from "./Step4/Step4.jsx";
import Step5 from "./Step5/Step5.jsx";
import Step6 from "./Step6/Step6.jsx";
import Step7 from "./Step7/Step7.jsx";

const MultiStepForm = () => {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (newData) => {
        setFormData((prevData) => {
            return { ...prevData, ...newData };
        });
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = (step) => {
        setCurrentStep(step);
    };

    const goToStep = (step) => {
        setCurrentStep(step);
    };

    const resetForm = () => {
        setFormData({});
        setCurrentStep(1);
    };

    const submitFormData = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/estReq/',
                {}, // If you don't have any data to send, pass an empty object
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log('Форма отправлена успешно:', response.data);
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        }
    };


    console.log(currentStep)
    console.log(formData)

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 updateFormData={updateFormData} nextStep={nextStep} resetForm={resetForm} />;
            case 2:
                return <Step2 updateFormData={updateFormData} setFormData={setFormData} nextStep={nextStep} goToStep={goToStep} prevStep={prevStep} />;
            case 3:
                return <Step3 updateFormData={updateFormData} prevStep={prevStep} goToStep={goToStep} nextStep={nextStep} applicationType={formData.application_type} />;
            case 4:
                return <Step4 nextStep={nextStep} prevStep={prevStep} formData={formData} />;
            case 5:
                return <Step5 goToStep={goToStep} nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
            case 6:
                return <Step6 goToStep={goToStep} nextStep={nextStep} updateFormData={updateFormData} submitFormData={submitFormData} prevStep={prevStep}/>
            case 7:
                return <Step7 />;
            default:
                return <Step1 updateFormData={updateFormData} formData={formData} nextStep={nextStep} resetForm={resetForm} />;
        }
    };

    return (
        <div className="multi-step-form">
            {renderStep()}
        </div>
    );
};

export default MultiStepForm;
