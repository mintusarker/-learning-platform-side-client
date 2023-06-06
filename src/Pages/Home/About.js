import React from 'react';
import image from '../../assets/carosel3.jpg';
import './About.css'

const About = () => {
    return (
        <div className='about w-100 px-5 mx-auto my-5 py-4'>
            <div className='row align-items-center'>
                <div className='col-lg-5 col-md-6'>
                    <h4 className='text-center fs-2'>About Us</h4>
                    <img className='img-fluid' src={image} alt="" />
                    
                </div>
                <div id='side1' className='col-lg-7 col-md-6 p-5'>
                    <p className='fs-4'>First Choice For Online Education Anywhere</p>
                    <cite className='fs-5'>
                         10 years, We have worked to teach people. We make ensure that our services is totally trusted. Our first priority is our responsibility. We are always concern to our service. And also we always ensure that our study materials is up to date within rapidly changing industry.
                    </cite>
                    <div className='d-flex justify-content-center align-items-center py-3'>
                        <div><p style={{ lineHeight: '42px', borderRadius: '100%', height:'55px', width: '55px' }} className='p-1 border-2 border border-dark text-center fw-bold fs-4'>20+</p>
                        </div>
                        <p className='px-2 fw-semibold fs-5'>High demandable Courses are available here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;