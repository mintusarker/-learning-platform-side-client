import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Details = () => {
    const news = useLoaderData();
    const { title, price, _id, details, image_url, category_id } = news;
    return (
        <Card className='w-50 mx-auto my-5'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
            <div ref={ref}>
                <Card.Title className='text-primary my-3'>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='fs-3 text-primary'>Price: {price}</div>
            </div>
                <Link to={`/courses/${category_id}`}>
                    <Button className='my-3 mx-3' variant="info">All courses in this category</Button>
                </Link>
                <Link className='my-3 mx-3' to={`/access/${_id}`}><Button variant="info">Get Premium Access</Button></Link>

                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button onClick={toPdf} className="my-3 mx-3">Download<FaDownload className='text-warning ms-3'></FaDownload></Button>}
                </Pdf>
            </Card.Body>
        </Card>
    );
};

export default Details;