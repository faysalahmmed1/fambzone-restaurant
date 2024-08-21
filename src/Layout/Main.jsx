import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';

const Main = () => {
    const location = useLocation();
    const noHeaderFotter = location.pathname.includes('login') ||location.pathname.includes('signup') ;
    return (
        <div>
            {/* {noHeaderFotter || <Navber></Navber>} */}
            
            <Navber></Navber>

            <Outlet></Outlet>
            {noHeaderFotter || <Footer></Footer>}
        </div>
    );
};

export default Main;