import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Step7.scss';

const Step7 = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="step step-10">
                <h2 className="form__header">{t('insurance_application.step7.header')}</h2>
                <h3 className="form__subheader">{t('insurance_application.step7.what_next')}</h3>
                <div className="confirmation__details">
                    <p>{t('insurance_application.step7.details.part1')}</p>
                    <p>{t('insurance_application.step7.details.part2')}</p>
                </div>
                <Link to='/' className="home-button">{t('insurance_application.step7.home_button')}</Link>
            </div>
        </div>
    );
};

export default Step7;
