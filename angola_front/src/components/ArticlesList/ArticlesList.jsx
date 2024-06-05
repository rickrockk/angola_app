import React from "react"
import './ArticlesList.scss'
import Article from "./Article/Article.jsx";
import {Link} from "react-router-dom";

export default function ArticlesList() {
    return (
        <section className="main__articles">
            <div className="articles__container container">
                <div className="articles__heading">
                    <h2 className="articles__header">Подберу интересные статьи</h2>
                    <Link className="articles__showall" to='/'>Вся лента</Link>
                </div>
                <div className="articles__body">
                    <ul className="articles__list">
                        <Article photo="src/assets/home/articles/News_01.png"
                                 date="30 декабря 2020"
                                 title="2020 на Госуслугах: новые пользователи, выплаты и вывозные рейсы"
                                 desc="Чем были полезны Госуслуги: в цифрах и фактах"
                        />
                        <Article photo="src/assets/home/articles/News_02.png"
                                 date="01 декабря 2020"
                                 title="Как оформить банкротство через МФЦ без суда и госпошлины"
                                 desc="Условия внесудебной процедуры с 1 сентября 2020 года"
                        />
                        <Article photo="src/assets/home/articles/News_03.png"
                                 date="15 ноября 2020"
                                 title="Новые электронные услуги для работающих и пенсионеров"
                                 desc="Электронная трудовая книжка, справка о статусе предпенсионера и размере пенсии"
                        />
                        <Article photo="src/assets/home/articles/News_04.png"
                                 date="12 ноября 2020"
                                 title="Как получать ежемесячные выплаты на первого и второго ребенка"
                                 desc="До трёх лет"
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}