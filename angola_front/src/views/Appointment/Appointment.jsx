import React from 'react'
import './Appointment.scss'
import {BlockLink} from "../../components/BlockLink/BlockLink.jsx";
import {Link} from "react-router-dom";

export default function Appointment() {
    return (
        <div className="appointment__container container">
            <h2 className="appointment__header">Подать заявление</h2>
            <div className="appointment__links">
                <Link to='/passport_form'>
                    <BlockLink>
                        <h3 className="link__header">Получение/Замена паспорта</h3>
                    </BlockLink>
                </Link>
                <Link to='/vaccination'>
                    <BlockLink>
                        <h3 className="link__header">Запись на вакцинацию</h3>
                    </BlockLink>
                </Link>
                <Link to='/grant'>
                    <BlockLink>
                        <h3 className="link__header">Получение гранта на развитие семейного фермерства</h3>
                    </BlockLink>
                </Link>
                <Link to='/insurance_form'>
                    <BlockLink>
                        <h3 className="link__header">Получение полиса</h3>
                    </BlockLink>
                </Link>
                <Link to='/estate_request'>
                    <BlockLink>
                        <h3 className="link__header">Выписка по недвижимости</h3>
                    </BlockLink>
                </Link>
            </div>
        </div>
    )
}