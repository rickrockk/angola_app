import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/auth_logo.svg'
import './Auth.scss'

export default function Auth() {
    return (
       <div className="container">
         <div className="main">
            <div className="name">
                <img className="auth__logo" src={Logo} alt="Логотип"/>
                <h3>Регистрация</h3>
                <p className="gray">Зарегистрируйтесь онлайн через банк или <br/>посетив центры обслуживания</p>
                <button className="first">Онлайн через интернет-банк</button>
                <button className="second">Через центр обслуживания</button>
                <Link to="/register">Другой способ регистрации</Link>
                </div>
                <p>Уже зарегистрировались? <Link to="/login"><span>Войти</span></Link></p>
        </div>
       </div>
    )
}