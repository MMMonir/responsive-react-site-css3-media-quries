import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, img, price, description} = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;