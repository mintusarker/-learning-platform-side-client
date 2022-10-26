import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const news = useLoaderData();
    return (
        <div className='text-center text-primary'>
            <h2>Course name :{news?.title}</h2>
            <h4>Course Fee : {news?.price}</h4>
            <Image 
            roundedCircle
             src={news?.image_url}
             style ={{height : '200px', width : '200px'}}
            ></Image>
        </div>
    );
};

export default GetPremiumAccess;