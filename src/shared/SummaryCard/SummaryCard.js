import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SummaryCard = ({ news }) => {
    const { _id, title, details, image_url } = news;
    return (
        <div>
            <Card className="bg-light border border-success mt-4 mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" style={{height: '300px'}} src={image_url} />
                <Card.Text className='my-4'>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}><Button variant="info" className='btn-sm'>Details</Button></Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default SummaryCard;