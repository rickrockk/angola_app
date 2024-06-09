import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './step1.scss';

function Step1({ updateFormData, nextStep, resetForm }) {
    const { t } = useTranslation();

    const handleSubmit = () => {
        nextStep(); // Переход на следующий шаг
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
                            {t('grants_application.step1.back_button')}
                        </p>
                    </Link>
                    <h3 className="content__header">
                        {t('grants_application.step1.header')}
                    </h3>
                </div>
                <div className="content__body">
                    <p>{t('grants_application.step1.desc1')}</p>
                    <p>{t('grants_application.step1.desc2')}</p>
                    <div className="grants_list">
                        <p>{t('grants_application.step1.top_nominations')}</p>
                        <ul>
                            <li>{t('grants_application.step1.nominations.save_nature')}</li>
                            <li>{t('grants_application.step1.nominations.farms')}</li>
                            <li>{t('grants_application.step1.nominations.create_opportunities')}</li>
                        </ul>
                    </div>
                    <p>{t('grants_application.step1.desc3')}</p>
                    <p>{t('grants_application.step1.desc4')}</p>
                    <p>{t('grants_application.step1.contact_info')}</p>
                    <h4>{t('grants_application.step1.for_whom')}</h4>
                    <p>{t('grants_application.step1.for_whom_desc')}</p>
                    <h4>{t('grants_application.step1.benefit')}</h4>
                    <p>{t('grants_application.step1.benefit_desc')}</p>
                    <h4>{t('grants_application.step1.organizer')}</h4>
                    <p>{t('grants_application.step1.organizer_info')}</p>
                    <h4>{t('grants_application.step1.format')}</h4>
                    <p>{t('grants_application.step1.format_desc')}</p>
                    <h4>{t('grants_application.step1.period')}</h4>
                    <p>{t('grants_application.step1.period_desc')}</p>
                    <h4>{t('grants_application.step1.time')}</h4>
                    <p>{t('grants_application.step1.time_desc')}</p>
                    <h4>{t('grants_application.step1.address')}</h4>
                    <p>{t('grants_application.step1.address_desc')}</p>
                    <button onClick={handleSubmit}>{t('grants_application.step1.submit_button')}</button>
                </div>
            </div>

            <div className="docs-recovery__aside">
                <h3 className="aside__header">{t('grants_application.step1.other_materials')}</h3>
                <p className="aside__link">{t('grants_application.step1.registration')}</p>
                <span className="content__type">{t('grants_application.step1.documents')}</span>
                <span className="content__type">{t('grants_application.step1.receiving')}</span>
            </div>
        </div>
    );
}

export default Step1;
