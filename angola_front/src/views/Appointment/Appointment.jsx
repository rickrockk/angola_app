import React from 'react'
import './Appointment.scss'

export default function Appointment() {
    return (
        <div className="box">
            <div className="bread">
                <svg 
                    width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#CC2229"/>
                </svg>
                <p>Назад</p>
            </div>
            <div className="appointment">
            <div className="service">
            <ul>
                <li>
                    <h2>Запись на прием к врачу</h2>
                </li>
                <li>
                    <svg 
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="2" r="2" fill="#0D4CD3"/>
                        <circle cx="8" cy="8" r="2" fill="#0D4CD3"/>
                        <circle cx="8" cy="14" r="2" fill="#0D4CD3"/>
                    </svg>
                </li>
            </ul>
            <p>Отправитель:Университетская клиническая больница № 1 Клинического центра Первого Московского государственного медицинского университета имени И.М. Сеченова, вчера в 18:23 </p>
           <h3>Сигалев Георгий,</h3>
           <h3>Вы записаны на прием к врачу на завтра в 20.00, необходимо оплатить визит.</h3>
           </div>
           <div className="cost">
            <h3>Запись на прием к врачу</h3>
            <h2>500 ₽</h2>
            <p>Оплатите до 16 сентября</p>
            <button>Оплатить</button>
           </div>
            </div>
           
        </div>
    )
}