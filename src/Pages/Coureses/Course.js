import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';

const Course = () => {
    return (
        <div className='pt-5'>
            <Container>
                <Row>
                    <Col lg="4" className='ps-5' style={{height: '400px'}} >
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="8" className=''>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;