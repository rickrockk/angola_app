import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
      <span
          className={`language-option ${i18n.language === 'ru' ? 'active' : ''}`}
          onClick={() => changeLanguage('ru')}
      >
        RU
      </span>
            <span
                className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
            >
        EN
      </span>
            <span
                className={`language-option ${i18n.language === 'pt' ? 'active' : ''}`}
                onClick={() => changeLanguage('pt')}
            >
        PT
      </span>
        </div>
    );
};

export default LanguageSwitcher;
