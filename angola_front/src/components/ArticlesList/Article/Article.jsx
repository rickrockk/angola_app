import React from 'react';
import './Article.scss'

const Article = (props) => {
    return (
        <li className="articles__item">
            <img src={props.photo} alt="" className="article__img"/>
            <p className="article__date">{props.date}</p>
            <h3 className="article__title">{props.title}</h3>
            <p className="article__desc">{props.desc}</p>
        </li>
    );
};

export default Article;