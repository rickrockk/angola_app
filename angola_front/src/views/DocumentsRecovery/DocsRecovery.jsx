import {Link} from "react-router-dom";
import {BlockLink} from "../../components/BlockLink/BlockLink.jsx";
import {BlockDropdown} from "../../components/BlockDropdown/BlockDropdown.jsx";
import House from "../../assets/house_doc.svg"
import './DocsRecovery.scss'

export default function DocsRecovery() {
    return (
        <main className="main__docs-recovery">
            <div className="docs-recovery__container container">
                <div className="docs-recovery__content">
                    <div className="content__heading">
                        <Link className="back-link" to='/'>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z" fill="#0D4CD3"/>
                            </svg>
                            <p className="back-link__text">
                                Назад
                            </p>
                        </Link>
                        <h2 className="content__header">
                            Восстановление документов на недвижимость
                        </h2>
                        <div className="heading__subheading">
                            <span className="content__type">Документы</span>
                            <span className="update__date">Тест с датой обновления</span>
                        </div>
                    </div>
                    <div className="content__body">
                        <h3 className="body__header">Что нужно делать</h3>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">1. </span>Запретите любые действия с документами</h4>
                            <p className="block__text">Напишите заявление в полицию, если считаете, что документы были украдены. Не забудьте взять талон-уведомление о том, что заявление было принято</p>
                            <p className="block__text">Подайте обращение в Росреестр по месту нахождения недвижимости — запретите проводить любые операции с ней без вашего участия или участия вашего законного представителя</p>
                            <p className="block__text">Это можно сделать:</p>
                            <ul className="block__list">
                                <li className="block__item">лично посетив МФЦ с паспортом</li>
                                <li className="block__item">онлайн на сайте Росреестра — потребуется квалифицированная электронная подпись</li>
                                <li className="block__item">по почте — заполните заявление по установленной форме, заверьте подлинность своей подписи на нём у нотариуса и отправьте в отделение Росреестра по месту нахождения недвижимости</li>
                            </ul>
                        </BlockDropdown>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">2. </span>Обратитесь за копией правоустанавливающего документа</h4>
                            <p className="block__text">Права на недвижимость подтверждают:</p>
                            <ul className="block__list">
                                <li className="block__item">договор дарения, купли-продажи, мены или аренды</li>
                                <li className="block__item">свидетельство о праве на наследство</li>
                                <li className="block__item">судебные акты</li>
                            </ul>
                            <p className="block__text">Копию документов выдадут:</p>
                            <ul className="block__list">
                                <li className="block__item">владельцу недвижимости</li>
                                <li className="block__item">его законному представителю</li>
                                <li className="block__item">наследнику, если владелец умер</li>
                            </ul>
                            <div className="block__info">
                                <p className="info__text"><b>Если сделка была до 31 января 1998 г.</b></p>
                                <p className="info__text">Обратитесь в районное БТИ или нотариальную контору, которая выдала правоустанавливающий документ</p>
                                <p className="info__text"><b>Если сделка была после 31 января 1998 г.</b></p>
                                <p className="info__text">Закажите копии документов на Госуслугах или в отделении Росреестра</p>
                            </div>
                            <p className="block__text">При личной подаче в реестр к заявлению приложите:</p>
                            <ul className="block__list">
                                <li className="block__item">паспорт</li>
                                <li className="block__item">копии утраченных бумаг, если они есть</li>
                                <li className="block__item">квитанцию об оплате госпошлины — сумму уточните там, где собираетесь получать копии документов</li>
                            </ul>
                            <p className="block__text">Если неизвестно, на каком основании возникло право собственности — закажите выписку о содержании правоустанавливающих документов на Госуслугах или в реестре</p>
                            <p className="block__text">Оплата для граждан:</p>
                            <ul className="block__list">
                                <li className="block__item">450 ₽ за электронную выписку</li>
                                <li className="block__item">680 ₽ за бумажную</li>
                            </ul>
                        </BlockDropdown>
                        <BlockLink>
                            <div className="link__content">
                                <img src={House} alt="Дом"/>
                                <p className="link__text">Подробнее о получении выписки из ЕГРН</p>
                            </div>
                        </BlockLink>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">3. </span>Получите выписку из ЕГРН вместо потерянного свидетельства о регистрации</h4>
                            <p className="block__text">Свидетельство о регистрации права — это правоподтверждающий документ. С июля 2016 года его не выдают. Восстанавливать свидетельство о регистрации не нужно, вместо него собственник может получить выписку из единого государственного реестра недвижимости (ЕГРН)</p>
                            <p className="block__text">Росреестр предоставляет разные виды выписок из ЕГРН — уточните заранее в том месте, куда хотите предоставить документ, какая выписка нужна вам. Если хотите получить документ для себя и никуда предоставлять его не собираетесь — ознакомьтесь с информацией на Госуслугах и решите, какая выписка вам подходит. На портале можно заказать её онлайн</p>
                        </BlockDropdown>
                        <BlockLink>
                            <div className="link__content">
                                <img src={House} alt="Дом"/>
                                <p className="link__text">Получить выписку</p>
                            </div>
                        </BlockLink>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark">4. </span>Обратитесь в БТИ за копиями кадастрового и технического паспортов
                            </h4>
                            <p className="block__text">Кадастровый и технический паспорта, справки, выданные в бюро технической инвентаризации (БТИ), восстанавливайте в последнюю очередь — это техническая документация</p>
                            <p className="block__text">За дубликатами обращайтесь в БТИ, где был выдан первичный паспорт</p>
                        </BlockDropdown>
                        <BlockDropdown>
                            <h4 className="block__header"><span className="header__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.47742 15.9078L4.52972 10.9538L3.46973 12.0151L8.94743 17.4998C9.24014 17.7928 9.71471 17.7928 10.0074 17.4998L20.4649 7.0291L19.4049 5.96777L9.47742 15.9078Z" fill="#2DC36A"/>
</svg>
</span>        h4 Получите выписку или дубликаты утерянных документов
                            </h4>
                            <p className="block__text">О сроках готовности дубликатов утерянных документов вам сообщат при подаче заявления. Получить их вы сможете там, где заказывали</p>
                        </BlockDropdown>
                        <h3 className="body__header_info">Как избежать проблем с восстановлением документов</h3>
                        <div className="body__info">
                            <p className="body__text">Делайте ксерокопии всех важных документов, нотариально заверяйте их. Оригиналы храните отдельно от копий — например, в банковской ячейке. Не сообщайте посторонним, где храните документы</p>
                        </div>
                    </div>
                </div>
                <div className="docs-recovery__aside">
                    <h3 className="aside__header">Другие материалы по теме</h3>
                    <p className="aside__link">Регистрация ребёнка по месту жительства</p>
                    <span className="content__type">Документы</span>
                    <span className="content__type">Получение</span>
                </div>
            </div>
        </main>
    )
}