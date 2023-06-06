import React from 'react';
import { MdOutlineAutoStories, MdOutlineManageAccounts, MdProductionQuantityLimits } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import './summary.css'

const Summary = () => {
    return (
        <div className='summary'>
            <h3 className='text-center'> Why should you join with us?</h3>
            <div className=' pt-5 my-2 justify-content-lg-around align-items-center justify-content-sm-around d-lg-flex d-md-flex justify-content-md-around w-100'>
                <div className='summary1 d-flex justify-content-center align-items-center gap-4'>
                    <MdOutlineAutoStories className='fs-1 text-success'></MdOutlineAutoStories>
                    <div>
                        <p className='fs-2 fw-semibold'>3000 +</p>
                        <p className='fw-bolder'>SUCCESS STORIES</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4 my-4'>
                    <GiTeacher className='fs-1 text-success'></GiTeacher>
                    <div>
                        <p className='fs-2 fw-semibold'>150</p>
                        <p className='fw-bolder'>TRUSTED TUTORS</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <MdProductionQuantityLimits className='fs-1 text-success'></MdProductionQuantityLimits>
                    <div>
                        <p className='fs-2 fw-semibold'>1500</p>
                        <p className='fw-bolder'>SCHEDULES</p>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center gap-4 my-4'>
                    <MdOutlineManageAccounts className='fs-1 text-success'></MdOutlineManageAccounts>
                    <div>
                        <p className='fs-2 fw-semibold'>50</p>
                        <p className='fw-bolder'>COURSES</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;