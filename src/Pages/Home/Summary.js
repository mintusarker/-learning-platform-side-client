import React from 'react';
import { MdOutlineAutoStories, MdOutlineManageAccounts, MdProductionQuantityLimits } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import './summary.css'

const Summary = () => {
    return (
        <div className='summary'>
            <h3 className='text-center text-capitalize pb-3'>Why should you join with us?</h3>
            <div className='pt-5 justify-content-lg-around align-items-center justify-content-sm-around d-lg-flex d-md-flex px-2 justify-content-md-around w-100'>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <MdOutlineAutoStories style={{ fontSize:'60px'}} className='text-success'></MdOutlineAutoStories>
                    <div>
                        <p className='fs-2 fw-semibold'>3000 +</p>
                        <p className='fw-light fs-5'>SUCCESS STORIES</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4 my-4'>
                    <GiTeacher style={{ fontSize:'60px'}} className='text-success'></GiTeacher>
                    <div>
                        <p className='fs-2 fw-semibold'>150</p>
                        <p className='fw-light fs-5'>TRUSTED TUTORS</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <MdProductionQuantityLimits style={{ fontSize:'60px'}} className='text-success'></MdProductionQuantityLimits>
                    <div>
                        <p className='fs-2 fw-semibold'>1500</p>
                        <p className='fw-light fs-5'>SCHEDULES</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4 my-4'>
                    <MdOutlineManageAccounts style={{ fontSize:'60px'}} className='text-success'></MdOutlineManageAccounts>
                    <div>
                        <p className='fs-2 fw-semibold'>50</p>
                        <p className='fw-light fs-5'>COURSES</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;