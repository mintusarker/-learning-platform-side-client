import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className=''>

            <div className="jumbotron jumbotron-fluid carosel py-5" id="banner"  >
                <div className="container text-center text-md-left">

                    <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="display-3 text-white font-weight-bold my-5">
                        A New Way<br />
                        To Learning
                    </h1>
                    <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="lead text-white my-4">
                        Learn for life so that you make more stronger than before
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Header;