import { Link } from "react-router-dom";
import './step1.scss';

function Step1({ updateFormData, nextStep, resetForm }) {

    const handleSubmit = () => {
       
        nextStep();
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
                            Назад
                        </p>
                    </Link>
                    <h3 className="content__header">
                    Запись на вакцинацию
                    </h3>
                </div>
                <div className="content__body">
                    <p>Выберите любой пункт вакцинации в регионе прикрепления к поликлинике и дату. Информация о записи будет в личном кабинете</p>
                    <p>Вакцина состоит из двух компонентов, которые вводятся раздельно, за исключением вакцины Спутник Лайт, которая имеет однокомпонентный состав. Вакцина Спутник Лайт применяется для вакцинации пациентов, перенесших новую коронавирусную инфекцию COVID-19, спустя 6 месяцев или вакцинированных ранее (более 6 месяцев) любой вакциной для профилактики COVID-19</p>
                    <div className="grants_list">
                        <p>Вакцинация противопоказана:</p>
                        <ul>
                            <li>при острых инфекционных и неинфекционных заболеваниях</li>
                            <li>в период обострения хронических заболеваний</li>
                            <li>при ранее встречавшихся случаях тяжелых аллергических реакций</li>
                        </ul>
                    </div>
                    <p>моложе 18 лет — только в медорганизацию, к которой есть прикрепление</p>
                    <p>старше 18 лет — в любую доступную медорганизацию в регионе прикрепления</p>
                    <p>Перед прививкой врач проведёт осмотр и определит, можно ли вакцинироваться</p>
                    <p>После финального этапа вакцинации получите электронный сертификат. Он будет доступен на портале и в приложении Госуслуг</p>
                    <button onClick={handleSubmit}>Начать</button>
                </div>
            </div>

            <div className="docs-recovery__aside">
                <h3 className="aside__header">Другие материалы по теме</h3>
                <p className="aside__link">Регистрация ребёнка по месту жительства</p>
                <span className="content__type">Документы</span>
                <span className="content__type">Получение</span>
            </div>
        </div>
    );
}

export default Step1;
