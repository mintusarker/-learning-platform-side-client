import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const news = useLoaderData();
    return (
        <div>
            <div className='text-center d-flex flex-column justify-content-center align-items-center'>
                <div className='mb-4'>
                    <h5 className='my-5 text-info'>Welcome to Checkout Page</h5>
                    <h2 className='text-primary'>Course name :{news?.title}</h2>
                    <h4 className=' text-primary'>Course Fee : {news?.price}</h4>
                </div>
                <Image
                    roundedCircle
                    src={news?.image_url}
                    style={{ height: '200px', width: '200px' }}
                ></Image>
            </div>
        </div>
    );
};

export default GetPremiumAccess;