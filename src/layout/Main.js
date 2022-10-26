import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import Navber from '../shared/Navber/Navber';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            {/* <LeftSideNav></LeftSideNav> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;