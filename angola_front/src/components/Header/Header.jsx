import './Header.scss';
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore.js";
import SearchIcon from '../../assets/Search.svg';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
import Logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = () => {
        userStore.logout();
        navigate("/");
    };

    return (
        <header className='header'>
            <Link to="/">
                <img src={Logo} alt='Логотип' className='header__logo' />
            </Link>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to='/notifications'>
                            {t('header.notifications')}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/docs_recovery'>
                            {t('header.docs_recovery')}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/appointment'>
                            {t('header.appointment')}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/'>
                            {t('header.payments')}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/'>
                            {t('header.help')}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <div className="nav__search-login">
                            <img src={SearchIcon} alt='Поиск' className='search' />
                            {
                                localStorage.getItem("token")
                                    ? <div className="user__block">
                                        <Link className="profile__link" to="/profile">{t('header.profile')}</Link>
                                        <button className="profile__logout-btn" onClick={handleLogout}>{t('header.logout')}</button>
                                    </div>
                                    : <span className="login__link">
                    <Link to="/auth">
                      {t('header.login')}
                    </Link>
                  </span>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
