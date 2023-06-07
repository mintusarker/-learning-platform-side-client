import React from 'react';

const Footer = () => {
    return (
        <footer style={{height:'0px'}} className='position-absolute w-100 bottom-0 start-0'>
            <div className='text-center text-white bg-opacity-10 pt-5' style={{ width: '100%', height: '200px', background: 'rgb(2,3,24)' }}>
                <p>Copyright 2023@</p>
                <h4>Learn for life</h4>
                <p></p>
            </div>
        </footer>
    );
};

export default Footer;