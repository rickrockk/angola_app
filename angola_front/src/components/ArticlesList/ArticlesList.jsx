import React from "react";
import './ArticlesList.scss';
import Article from "./Article/Article.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function ArticlesList() {
    const { t } = useTranslation();

    return (
        <section className="main__articles">
            <div className="articles__container container">
                <div className="articles__heading">
                    <h2 className="articles__header">{t('articles.heading')}</h2>
                    <Link className="articles__showall" to='/'>{t('articles.show_all')}</Link>
                </div>
                <div className="articles__body">
                    <ul className="articles__list">
                        <Article photo="src/assets/home/articles/News_01.png"
                                 date={t('articles.article_1.date')}
                                 title={t('articles.article_1.title')}
                                 desc={t('articles.article_1.desc')}
                        />
                        <Article photo="src/assets/home/articles/News_02.png"
                                 date={t('articles.article_2.date')}
                                 title={t('articles.article_2.title')}
                                 desc={t('articles.article_2.desc')}
                        />
                        <Article photo="src/assets/home/articles/News_03.png"
                                 date={t('articles.article_3.date')}
                                 title={t('articles.article_3.title')}
                                 desc={t('articles.article_3.desc')}
                        />
                        <Article photo="src/assets/home/articles/News_04.png"
                                 date={t('articles.article_4.date')}
                                 title={t('articles.article_4.title')}
                                 desc={t('articles.article_4.desc')}
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}
