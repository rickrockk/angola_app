import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './step1.scss';

function Step1({ updateFormData, nextStep, resetForm }) {
    const { t } = useTranslation();

    const handleSubmit = () => {
        nextStep();
    };

    return (
        <div className="docs-recovery__container container">
            <div className="docs-recovery__content">
                <div className="content__heading">
                    <Link className="back-link" to='/appointment'>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#0D4CD3" />
                        </svg>
                        <p className="back-link__text">
                            {t('vaccination_appointment.step1.back_button')}
                        </p>
                    </Link>
                    <h3 className="content__header">
                        {t('vaccination_appointment.step1.header')}
                    </h3>
                </div>
                <div className="content__body">
                    <p>{t('vaccination_appointment.step1.desc1')}</p>
                    <p>{t('vaccination_appointment.step1.desc2')}</p>
                    <div className="grants_list">
                        <p>{t('vaccination_appointment.step1.vaccine_contraindications')}</p>
                        <ul>
                            <li>{t('vaccination_appointment.step1.contraindication1')}</li>
                            <li>{t('vaccination_appointment.step1.contraindication2')}</li>
                            <li>{t('vaccination_appointment.step1.contraindication3')}</li>
                        </ul>
                    </div>
                    <p>{t('vaccination_appointment.step1.desc3')}</p>
                    <p>{t('vaccination_appointment.step1.desc4')}</p>
                    <p>{t('vaccination_appointment.step1.desc5')}</p>
                    <p>{t('vaccination_appointment.step1.desc6')}</p>
                    <button onClick={handleSubmit}>{t('vaccination_appointment.step1.start_button')}</button>
                </div>
            </div>

            <div className="docs-recovery__aside">
                <h3 className="aside__header">{t('vaccination_appointment.step1.aside_header')}</h3>
                <p className="aside__link">{t('vaccination_appointment.step1.aside_link')}</p>
                <span className="content__type">{t('vaccination_appointment.step1.aside_type1')}</span>
                <span className="content__type">{t('vaccination_appointment.step1.aside_type2')}</span>
            </div>
        </div>
    );
}

export default Step1;
