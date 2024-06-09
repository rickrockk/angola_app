import React from 'react';
import './Appointment.scss';
import { BlockLink } from "../../components/BlockLink/BlockLink.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Appointment() {
    const { t } = useTranslation();

    return (
        <div className="appointment__container container">
            <h2 className="appointment__header">{t('appointment.header')}</h2>
            <div className="appointment__links">
                <Link to='/passport_form'>
                    <BlockLink>
                        <h3 className="link__header">{t('appointment.links.passport')}</h3>
                    </BlockLink>
                </Link>
                <Link to='/vaccination'>
                    <BlockLink>
                        <h3 className="link__header">{t('appointment.links.vaccination')}</h3>
                    </BlockLink>
                </Link>
                <Link to='/grant'>
                    <BlockLink>
                        <h3 className="link__header">{t('appointment.links.grant')}</h3>
                    </BlockLink>
                </Link>
                <Link to='/insurance_form'>
                    <BlockLink>
                        <h3 className="link__header">{t('appointment.links.insurance')}</h3>
                    </BlockLink>
                </Link>
                <Link to='/estate_request'>
                    <BlockLink>
                        <h3 className="link__header">{t('appointment.links.estate')}</h3>
                    </BlockLink>
                </Link>
            </div>
        </div>
    );
}
