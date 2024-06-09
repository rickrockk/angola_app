import React, { useState } from 'react';
import axios from "axios";
import Step1 from "./Step1/Step1.jsx";
import Step2 from "./Step2/Step2.jsx";
import Step3Change from "./Step3/Step3Change/Step3Change.jsx";
import Step4 from "./Step4/Step4.jsx";
import Step5Review from "./Step5/Step5Review.jsx";
import Step6PhotoUpload from "./Step6/Step6PhotoUpload.jsx";
import Step7MarriageCertificateUpload from "./Step7/Step7MarriageCertificateUpload.jsx";
import Step8BirthCertificateUpload from "./Step8/Step8BirthCertificateUpload.jsx";
import Step9SignatureUpload from "./Step9/Step9SignatureUpload.jsx";
import Step10Confirmation from "./Step10/Step10Confirmation.jsx";

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
            const response = await axios.post('http://127.0.0.1:8000/api/pasApp/', formData, {
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

    console.log(currentStep)
    console.log(formData)

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 updateFormData={updateFormData} nextStep={nextStep} resetForm={resetForm} />;
            case 2:
                return <Step2 updateFormData={updateFormData} setFormData={setFormData} nextStep={nextStep} goToStep={goToStep} prevStep={prevStep} />;
            case 3:
                if (formData.application_type === 'замена') {
                    return <Step3Change updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
                } else {
                    nextStep();
                    return null;
                }
            case 4:
                return <Step4 prevStep={prevStep} goToStep={goToStep} nextStep={nextStep} applicationType={formData.application_type} />;
            case 5:
                if (formData.application_type === 'замена') {
                    return <Step5Review updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} formData={formData} />;
                } else {
                    nextStep();
                    return null;
                }
            case 6:
                return <Step6PhotoUpload updateFormData={updateFormData} applicationType={formData.application_type} goToStep={goToStep} nextStep={nextStep} prevStep={prevStep} cause={formData.cause}/>;
            case 7:
                if (formData.cause === 'фио') {
                    return <Step7MarriageCertificateUpload updateFormData={updateFormData} goToStep={goToStep} nextStep={nextStep} prevStep={prevStep} cause={formData.cause} applicationType={formData.application_type} />;
                } else {
                    nextStep();
                    return null;
                }
            case 8:
                if (formData.cause === 'возраст') {
                    return <Step8BirthCertificateUpload updateFormData={updateFormData} cause={formData.cause} nextStep={nextStep} prevStep={prevStep} />;
                } else {
                    nextStep();
                    return null;
                }
            case 9:
                return <Step9SignatureUpload updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} submitFormData={submitFormData} applicationType={formData.application_type} cause={formData.cause}  />;
            case 10:
                return <Step10Confirmation />;
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
