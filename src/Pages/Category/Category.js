import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../shared/SummaryCard/SummaryCard';

const Category = () => {
    const news = useLoaderData()
    return (
        <div>
           {/* <h2 className='text-center'>All are here : {news?.length}</h2> */}
           <div>
            {
                news?.map(news => <SummaryCard

                    news = {news}
                
                ></SummaryCard>)
            }
           </div>

        </div>
    );
};

export default Category;