import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SummaryCard = ({ news }) => {
    const { _id, title, details, image_url } = news;
    return (
        <Card className="w-50 bg-light mx-auto mt-3 mb-2">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}><Button variant="info">Details</Button></Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SummaryCard;