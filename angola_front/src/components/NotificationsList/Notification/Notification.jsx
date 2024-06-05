import React from 'react';
import './Notification.scss'

const Notification = (props) => {
    return (
        <div className="notification">
            <div className="date">
                <h4>{props.type}</h4>
                <p>{props.date}</p>
            </div>
            <div className="details">
                <h4>{props.heading}</h4>
                <p>{props.sender}</p>
            </div>
        </div>
    );
};

export default Notification;