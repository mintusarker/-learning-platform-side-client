import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../shared/SummaryCard/SummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div className='bg-light pt-5'>
            <h2 className='text-center'>All Courses are Here. Total Course is : {allNews.length}</h2>
             {
                allNews.map(news => <SummaryCard
                key = {news._id}
                news = {news}
                ></SummaryCard>)
             }
            
        </div>
    );
};

export default Home;