import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';

const Course = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col lg="5" className='d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                        <RightSideNav></RightSideNav>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;