import React from 'react';
import { AiOutlineRead } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineMarkChatRead } from "react-icons/md";
import './Explore.css'

const Explore = () => {
    return (
        <div className='row my-5 py-4 w-100'>
                      <h4 className='text-center fs-4 mb-5 fw-semibold'>FOUR BASIC THINGS</h4>
            <div className='part1 sec1 col-lg-3 col-md-6 px-5'>
                <p style={{ fontSize: '50px' }} className='text-center'><AiOutlineRead></AiOutlineRead></p>
                <p className='fs-5 fw-semibold pt-3 pb-2'>FUNDAMENTALS</p>
                <p>Structured as a developmental program spanning four sessions during one school year.</p>
            </div>
            <div className='part1 sec2 col-lg-3 col-md-6 px-5'>
                <p style={{ fontSize: '50px' }} className='text-center'> <LuFileSpreadsheet></LuFileSpreadsheet> </p>
                <p className='fs-5 fw-semibold pt-3 pb-2'>ADVANCED EXPLORATION
                </p>
                <p>This program is designed to develop self-directed programming makers, the students design their own projects.</p>
            </div>
            <div className='part1 sec3 col-lg-3 col-md-6 px-5'>
                <p style={{ fontSize: '50px' }} className='text-center'><HiOutlinePaperAirplane></HiOutlinePaperAirplane></p>
                <p className='fs-5 fw-semibold pt-3 pb-2'>CAMPS & CLASSES</p>
                <p>Our camps and classes are well Structured. So that learns learn faithfully and expand there skill properly.</p>
            </div>
            <div className='part1 sec4 four col-lg-3 col-md-6 px-5'>
                <p style={{ fontSize: '50px' }} className='text-center'><MdOutlineMarkChatRead></MdOutlineMarkChatRead></p>
                <p className='fs-5 fw-semibold pt-3 pb-2'>MAKE PROFESSIONAL</p>
                <p>Our classes feature a curriculum that will develop your skill, creative and critical thinking. Which make you best.</p>
            </div>

        </div>
    );
};

export default Explore;