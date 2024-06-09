import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './step3.scss';
import { useTranslation } from 'react-i18next';

function Step3({ nextStep, updateFormData }) {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        TIN: '',
        date_of_registration: '',
        tax_authority: '',
        registration_address: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            updateFormData(formData);
            nextStep();
        } catch (error) {
            console.error(t('grants_application.step3.error_message'), error);
            alert(t('grants_application.step3.alert_message'));
        }
    };

    return (
        <div className="docs-recovery__container container">
            <div className="docs-recovery__content">
                <div className="content__heading">
                    <Link className="back-link" to='/'>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#0D4CD3" />
                        </svg>
                        <p className="back-link__text">
                            {t('grants_application.step3.back_button')}
                        </p>
                    </Link>
                    <h3 className="content__header">
                        {t('grants_application.step3.header')}
                    </h3>
                </div>
                <div className="content__body">
                    <form className="inn-form" onSubmit={handleSubmit}>
                        <label htmlFor="TIN">{t('grants_application.step3.labels.tin')}</label>
                        <input type="text" id="TIN" name="TIN" value={formData.TIN} onChange={handleChange} required />

                        <label htmlFor="date_of_registration">{t('grants_application.step3.labels.date_of_registration')}</label>
                        <input type="date" id="date_of_registration" name="date_of_registration" value={formData.date_of_registration} onChange={handleChange} required />

                        <label htmlFor="tax_authority">{t('grants_application.step3.labels.tax_authority')}</label>
                        <input type="text" id="tax_authority" name="tax_authority" value={formData.tax_authority} onChange={handleChange} required />

                        <label htmlFor="registration_address">{t('grants_application.step3.labels.registration_address')}</label>
                        <input type="text" id="registration_address" name="registration_address" value={formData.registration_address} onChange={handleChange} required />

                        <button type="submit">{t('grants_application.step3.submit_button')}</button>
                    </form>
                </div>
            </div>
            <div className="docs-recovery__aside">
                <h3 className="aside__header">{t('grants_application.step3.aside_header')}</h3>
                <p className="aside__link">{t('grants_application.step3.aside_link')}</p>
                <span className="content__type">{t('grants_application.step3.aside_type1')}</span>
                <span className="content__type">{t('grants_application.step3.aside_type2')}</span>
            </div>
        </div>
    );
}

export default Step3;
