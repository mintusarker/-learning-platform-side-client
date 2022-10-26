import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const news = useLoaderData();
    return (
        <div className='text-center text-primary'>
            <h2>Course name :{news?.title}</h2>
        </div>
    );
};

export default GetPremiumAccess;