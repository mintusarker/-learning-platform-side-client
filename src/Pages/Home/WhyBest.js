import React from 'react';
import img1 from '../../assets/cource2.jpg'
import { MdFilterBAndW } from 'react-icons/md';
import { FaCertificate } from 'react-icons/fa';
import { SiSololearn } from 'react-icons/si';
import './Explore.css'

const WhyBest = () => {
    return (
        <div className='row px-5 py-5 my-5 align-items-center w-100'>
            <div className='col-lg-6 col-md-6'>
                <img className='img1 mx-auto px-lg-5' src={img1} alt="" />
            </div>
            <div className='col-lg-6 col-md-6'>
                <h4 className='fw-semibold'>LEARN PROGRAMMING</h4>
                <p className='fs-5 pb-3 fw-semibold'>Benefits About Online Learning Expertise</p>
                <div className='part1 d-flex justify-content-center align-items-center gap-4'>
                    <div><MdFilterBAndW className='icon fs-1 text-info'></MdFilterBAndW></div>
                    <div>
                        <h4 className='fw-semibold'>Online Courses</h4>
                        <p className='fst-italic fs-5'>There are many more advantages to Internet-based courses. The ability to learn a new skill whenever you want and wherever you want is expand before.</p>
                    </div>
                </div>

                <div className='part1 d-flex my-4 justify-content-center align-items-center gap-4'>
                    <div><FaCertificate className='icon fs-1 text-info'></FaCertificate> </div>
                    <div>
                        <h4 className='fw-semibold'>Earn A Certificates</h4>
                        <p className='fst-italic fs-5'>
                            You can easily earn valuable certificates. That is proof of your skills. We provide you certificate after successfuly completing the course.
                        </p>
                    </div>
                </div>
                <div className='part1 d-flex justify-content-center align-items-center gap-4'>
                    <div><SiSololearn className='icon fs-1 text-info'></SiSololearn></div>
                    <div>
                        <h4 className='fw-semibold'>Learn with Expert</h4>
                        <p className='fst-italic fs-5'>Experts know what works and what doesn't work, which means they can help you generate better ideas. </p>
                     
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyBest;