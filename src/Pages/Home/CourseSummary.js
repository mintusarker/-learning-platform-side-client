import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SummaryCard from '../../shared/SummaryCard/SummaryCard';
import { Button, Card } from 'react-bootstrap';

const CourseSummary = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className='px-5 w-100 mx-auto'>
            <h4 className='text-center mb-4'>POPULAR COURSES TO LEARN</h4>
            <div className='row'>
                {
                    news.slice(1, 5)?.map(news => <Card className="bg-light border-0 border gy-3  col-lg-3 col-md-6 col-sm-12">
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                            <Card.Img variant="top"  className='img-fluid' src={news?.image_url} />
                            <Card.Text className='my-4'>
                                {
                                    news?.details?.length > 250 ?
                                        <>{news?.details.slice(0, 106) + '...'} <Link to={`/news/${news?._id}`}><Button variant="info" className='btn-sm'>Detail</Button></Link></>
                                        :
                                        news?.details
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </div>

        </div>
    );
};
export default CourseSummary;