import React from 'react';
import { Link } from "react-router-dom";
import { BlockLink } from "../../components/BlockLink/BlockLink.jsx";
import { BlockDropdown } from "../../components/BlockDropdown/BlockDropdown.jsx";
import House from "../../assets/house_doc.svg";
import './DocsRecovery.scss';
import { useTranslation } from 'react-i18next';

export default function DocsRecovery() {
    const { t } = useTranslation();

    return (
        <main className="main__docs-recovery">
            <div className="docs-recovery__container container">
                <div className="docs-recovery__content">
                    <div className="content__heading">
                        <Link className="back-link" to='/'>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#0D4CD3" />
                            </svg>
                            <p className="back-link__text">
                                {t('docs_recovery.back')}
                            </p>
                        </Link>
                        <h2 className="content__header">
                            {t('docs_recovery.title')}
                        </h2>
                        <div className="heading__subheading">
                            <span className="content__type">{t('docs_recovery.type')}</span>
                            <span className="update__date">{t('docs_recovery.update_date')}</span>
                        </div>
                    </div>
                    <div className="content__body">
                        <h3 className="body__header">{t('docs_recovery.what_to_do')}</h3>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">1. </span>{t('docs_recovery.step_1.title')}</h4>
                            <p className="block__text">{t('docs_recovery.step_1.text_1')}</p>
                            <p className="block__text">{t('docs_recovery.step_1.text_2')}</p>
                            <p className="block__text">{t('docs_recovery.step_1.text_3')}</p>
                            <ul className="block__list">
                                <li className="block__item">{t('docs_recovery.step_1.list_1')}</li>
                                <li className="block__item">{t('docs_recovery.step_1.list_2')}</li>
                                <li className="block__item">{t('docs_recovery.step_1.list_3')}</li>
                            </ul>
                        </BlockDropdown>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">2. </span>{t('docs_recovery.step_2.title')}</h4>
                            <p className="block__text">{t('docs_recovery.step_2.text_1')}</p>
                            <ul className="block__list">
                                <li className="block__item">{t('docs_recovery.step_2.list_1')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_2')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_3')}</li>
                            </ul>
                            <p className="block__text">{t('docs_recovery.step_2.text_2')}</p>
                            <ul className="block__list">
                                <li className="block__item">{t('docs_recovery.step_2.list_4')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_5')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_6')}</li>
                            </ul>
                            <div className="block__info">
                                <p className="info__text"><b>{t('docs_recovery.step_2.info_1')}</b></p>
                                <p className="info__text">{t('docs_recovery.step_2.info_2')}</p>
                                <p className="info__text"><b>{t('docs_recovery.step_2.info_3')}</b></p>
                                <p className="info__text">{t('docs_recovery.step_2.info_4')}</p>
                            </div>
                            <p className="block__text">{t('docs_recovery.step_2.text_3')}</p>
                            <ul className="block__list">
                                <li className="block__item">{t('docs_recovery.step_2.list_7')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_8')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_9')}</li>
                            </ul>
                            <p className="block__text">{t('docs_recovery.step_2.text_4')}</p>
                            <p className="block__text">{t('docs_recovery.step_2.text_5')}</p>
                            <ul className="block__list">
                                <li className="block__item">{t('docs_recovery.step_2.list_10')}</li>
                                <li className="block__item">{t('docs_recovery.step_2.list_11')}</li>
                            </ul>
                        </BlockDropdown>
                        <BlockLink>
                            <div className="link__content">
                                <img src={House} alt="Дом"/>
                                <p className="link__text">{t('docs_recovery.receive')}</p>
                            </div>
                        </BlockLink>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">3. </span>{t('docs_recovery.step_3.title')}</h4>
                            <p className="block__text">{t('docs_recovery.step_3.text_1')}</p>
                            <p className="block__text">{t('docs_recovery.step_3.text_2')}</p>
                        </BlockDropdown>
                        <BlockLink>
                            <div className="link__content">
                                <img src={House} alt="Дом"/>
                                <p className="link__text">{t('docs_recovery.receive')}</p>
                            </div>
                        </BlockLink>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">4. </span>{t('docs_recovery.step_4.title')}</h4>
                            <p className="block__text">{t('docs_recovery.step_4.text_1')}</p>
                            <p className="block__text">{t('docs_recovery.step_4.text_2')}</p>
                        </BlockDropdown>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.47742 15.9078L4.52972 10.9538L3.46973 12.0151L8.94743 17.4998C9.24014 17.7928 9.71471 17.7928 10.0074 17.4998L20.4649 7.0291L19.4049 5.96777L9.47742 15.9078Z" fill="#2DC36A"/>
</svg>
</span> {t('docs_recovery.step_5.title')}
                            </h4>
                            <p className="block__text">{t('docs_recovery.step_5.text_1')}</p>
                        </BlockDropdown>
                        <h3 className="body__header_info">{t('docs_recovery.avoid_problems')}</h3>
                        <div className="body__info">
                            <p className="body__text">{t('docs_recovery.avoid_problems_text')}</p>
                        </div>
                    </div>
                </div>
                <div className="docs-recovery__aside">
                    <h3 className="aside__header">{t('docs_recovery.other_materials')}</h3>
                    <p className="aside__link">{t('docs_recovery.registration_child')}</p>
                    <span className="content__type">{t('docs_recovery.type')}</span>
                    <span className="content__type">{t('docs_recovery.receive')}</span>
                </div>
            </div>
        </main>
    );
}
