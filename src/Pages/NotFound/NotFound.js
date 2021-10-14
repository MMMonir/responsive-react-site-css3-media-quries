import React from 'react';
import pagenotfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-danger pt-5">Page not found</h1>
            <img src={pagenotfound} width={400} alt="" />
        </div>
    );
};

export default NotFound;