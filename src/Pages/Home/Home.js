import React from 'react';
import { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthConText } from '../../Context/UserContext';
import SummaryCard from '../../shared/SummaryCard/SummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    const { loading } = useContext(AuthConText)

    if(loading){
        return <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    return (
        <div className=' pt-5'>
            <h2 className='text-center pb-4'>All Courses are Here. Total Course is : {allNews.length}</h2>
             <div className='container mx-auto row row-cols-lg-2'>
             {
                allNews.map(news => <SummaryCard
                key = {news._id}
                news = {news}
                ></SummaryCard>)
             }
             </div>
            
        </div>
    );
};

export default Home;