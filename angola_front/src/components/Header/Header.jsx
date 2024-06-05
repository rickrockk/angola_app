import './Header.scss'
import {Link, useNavigate} from "react-router-dom";
import {userStore} from "../../stores/userStore.js";
import SearchIcon from '../../assets/Search.svg'
import Logo from '../../assets/logo.svg'

export function Header() {

    const navigate = useNavigate()
    const handleLogout = () => {
        userStore.logout()
        navigate("/")
    }
    return (
        <header className='header'>
            <Link to="/">
                <img src={Logo} alt='Логотип' className='header__logo'/>
            </Link>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to='/notifications'>
                            Уведомления
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/docs_recovery'>
                            Документы
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/appointment'>
                            Заявления
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/'>
                            Платежи
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/'>
                            Помощь
                        </Link>
                    </li>
                    <li className="nav__item">
                        <div className="nav__search-login">
                            <img src={SearchIcon} alt='Поиск' className='search'/>
                            {
                                localStorage.getItem("token")
                                ?
                                    <div className="user__block">
                                        <Link className="profile__link" to="/profile">Профиль</Link>
                                        <button className="profile__logout-btn" onClick={handleLogout}>Выйти</button>
                                    </div>
                                :
                                    <span className="login__link">
                                        <Link to="/auth">
                                            Войти
                                        </Link>
                                    </span>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}