import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navber from '../shared/Navber/Navber';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <br />
            <br />
            <MessengerCustomerChat
                pageId="102798856181348"
                appId="582225470447505"
                themeColor={'#463b8f'}
            />
            <Footer></Footer>
        </div>
    );
};

export default Main;