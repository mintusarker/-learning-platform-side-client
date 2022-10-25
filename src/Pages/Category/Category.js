import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const newsCard = useLoaderData();
    return (
        <div>
            <h2>This is Category has news : {newsCard.length}</h2>
            {/* {
                 categoryNews.map(news => <NewsSummaryCard
                 key ={news._id}
                 news= {news}
                 ></NewsSummaryCard>)
            } */}
        </div>
    );
};

export default Category;