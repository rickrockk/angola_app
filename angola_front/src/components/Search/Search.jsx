import React from 'react';
import './Search.scss';
import { useTranslation } from 'react-i18next';

export default function Search() {
    const { t } = useTranslation();

    return (
        <div className="main__search">
            <div className="search__hero">
                <img className="hero__flag" src="src/assets/home/flag.svg" alt="" />
                <span className="hero__title">
          <img className="hero__img" src="src/assets/home/portal_flag.svg" alt="" />
                    {t('search.title')}
        </span>
            </div>
            <div className="search__input">
                <input
                    type="text"
                    placeholder={t('search.placeholder')}
                    className="input__input"
                />
                <svg className="input__img" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.24712 11.7073L3.89233 3.41895L22.0953 13.9994L3.89233 24.5811L6.24682 16.2929L11.7331 15.4871C12.3755 15.3927 12.8573 14.7554 12.8573 14.0001C12.8573 13.2447 12.3755 12.6074 11.7331 12.5131L6.24712 11.7073Z" fill="#FFCB00"/>
                    <path d="M3.89225 3.41895L4.2267 2.63576C3.95557 2.47817 3.62978 2.52633 3.40092 2.75785C3.17205 2.98937 3.08503 3.35878 3.18033 3.69424L3.89225 3.41895ZM6.24704 11.7073L5.53513 11.9826C5.62606 12.3027 5.86658 12.5333 6.15336 12.5755L6.24704 11.7073ZM22.0952 13.9994L22.4297 14.7826C22.6843 14.6346 22.8453 14.3313 22.8452 13.9994C22.8452 13.6676 22.6843 13.3643 22.4297 13.2163L22.0952 13.9994ZM3.89225 24.5811L3.18032 24.3058C3.08503 24.6413 3.17206 25.0107 3.40094 25.2422C3.62982 25.4737 3.95559 25.5219 4.22672 25.3643L3.89225 24.5811ZM6.24674 16.2929L6.15305 15.4247C5.86627 15.4669 5.62575 15.6975 5.53482 16.0176L6.24674 16.2929ZM3.18033 3.69424L5.53513 11.9826L6.95894 11.432L4.60416 3.14365L3.18033 3.69424ZM22.4297 13.2163L4.2267 2.63576L3.55779 4.20213L21.7608 14.7826L22.4297 13.2163ZM4.22672 25.3643L22.4297 14.7826L21.7607 13.2163L3.55777 23.7979L4.22672 25.3643ZM5.53482 16.0176L3.18032 24.3058L4.60417 24.8564L6.95865 16.5682L5.53482 16.0176ZM11.6393 14.6189L6.15305 15.4247L6.34041 17.161L11.8267 16.3552L11.6393 14.6189ZM12.1072 14.0001C12.1072 14.3144 11.9067 14.5797 11.6393 14.6189L11.8267 16.3552C12.8441 16.2058 13.6072 15.1964 13.6072 14.0001H12.1072ZM11.6393 13.3812C11.9067 13.4205 12.1072 13.6857 12.1072 14.0001H13.6072C13.6072 12.8037 12.8441 11.7944 11.8267 11.6449L11.6393 13.3812ZM6.15336 12.5755L11.6393 13.3812L11.8267 11.6449L6.34072 10.8392L6.15336 12.5755Z" fill="#FFCB00"/>
                </svg>
            </div>
            <div className="search__bubbles">
                <span className="search__bubble">{t('search.bubble_1')}</span>
                <span className="search__bubble">{t('search.bubble_2')}</span>
                <span className="search__bubble">{t('search.bubble_3')}</span>
                <span className="search__bubble">{t('search.bubble_4')}</span>
                <span className="search__bubble">{t('search.bubble_5')}</span>
            </div>
        </div>
    );
}
