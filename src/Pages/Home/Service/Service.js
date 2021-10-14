import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, name, img, price, description} = props.service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" style={{width: "100%"}}/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;