import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const Details = () => {
    const news = useLoaderData();
    const {title,price, _id, details, image_url,category_id} = news;
    return (
        <Card className='w-50 mx-auto my-5'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {details}
                </Card.Text>
                <div className='fs-3 text-primary'>{price}</div>
                <Link to={`/courses/${category_id}`}>
                <Button className='my-3 mx-3' variant="info">All courses in this category</Button>
                </Link>
                  <Link to={`/access/${_id}`}><Button variant="info">Get Premium Access</Button></Link>
                  <Link><FaDownload className='text-warning ms-3'></FaDownload></Link>
            </Card.Body>
        </Card>
    );
};

export default Details;