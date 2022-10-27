import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import Navber from '../shared/Navber/Navber';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Main;