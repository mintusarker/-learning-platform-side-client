import React from 'react';
import './FreeCourse.css'

const FreeCourse = () => {
    return (
        <div className="online-course">
            <div className="container">
                <div className="text-center mb-5">
                    <p className='fs-1'>Join Free Online Courses</p>
                </div>
                <form className="online-course-form">
                    <div className='d-flex gap-5 py-5'>
                        <input type="text" className="form-input" placeholder="Full Name" />
                        <input type="email" className="form-input" placeholder="E-mail" />
                        <select className='rounded-2 text-white bg-dark bg-opacity-75 p-2 fs-5'>
                            <option value="">Javascript</option>
                            <option value="">HTML</option>
                            <option value="">CSS</option>
                            <option value="">React.js</option>
                            <option value="">MongoDB</option>
                        </select>
                    </div>
                    <div className='text-center'>
                        <input type="submit" className="btn btn-outline-primary opacity-75" value="Take Schedule" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FreeCourse;